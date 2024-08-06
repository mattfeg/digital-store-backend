const { executarSQL } = require('../database/index')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
require('dotenv').config()

async function listarUsuarios(){
    return await executarSQL("SELECT * FROM usuarios;")
}

async function listarUmUsuario(id){
    const response = await executarSQL(`SELECT * FROM usuarios WHERE usuario_id = ${id}`)
    try {
        if (0 < response.length){
            return response[0]
        }else{
            return {
                status: 404,
                detail: "Usuario não encontrado.",
                severity: "warn"
            }
        }
    } catch (error) {
        return {
            status: 422,
            detail: error.message,
            severity: "danger"
        }
    }
}

async function cadastrarUsuario(data){

    const saltRounds = 10;
    const senhaEncriptada = await bcrypt.hash(data.usuario_senha, saltRounds)
    try {
        const response = await executarSQL(`INSERT INTO usuarios (
            usuario_email,
            usuario_senha,
            usuario_nome,
            usuario_cpf,
            usuario_celular,
            usuario_newsletter
            ) VALUES (
            '${data.usuario_email}',
            '${senhaEncriptada}',
            '${data.usuario_nome}',
            '${data.usuario_cpf}',
            '${data.usuario_celular}',
            '${data.usuario_newsletter}'
        );`)
        
        if(0 < response.affectedRows){
            return {
                status: 200,
                detail: "Usuario cadastrado com sucesso.",
                severity: "success"
            }
        }else{
            return {
                status: 422,
                detail: "Usuario ja existe",
                severity: "warn"
            }
        }
    } catch (error) {
        return {
            status: 422,
            detail: error.message,
            severity: "danger"
        }
    }

}

async function apagarUsuario(id){
    
    try {
        const response = await executarSQL(`DELETE FROM usuarios WHERE usuario_id = ${id}`)
        if(0 < response.affectedRows){
            return {
                status: 200,
                detail: "Usuario apagado.",
                severity: "success"
            }
        }else{
            return {
                status: 422,
                detail: "Usuario não encontrado.",
                severity: "success"
            }
        }
        
    } catch (error) {
        return {
            status: 422,
            detail: error.message,
            severity: "danger"
        }
    }  
}

async function editarUsuario(data){

    const saltRounds = 10;
    const senhaEncriptada = await bcrypt.hash(data.usuario_senha, saltRounds)

    try {
        const response = await executarSQL(`UPDATE usuarios SET
        usuario_email = "${data.usuario_email}",
        usuario_senha = "${senhaEncriptada}",
        usuario_nome = "${data.usuario_nome}",
        usuario_cpf = "${data.usuario_cpf}",
        usuario_celular = "${data.usuario_celular}",
        usuario_newsletter = "${data.usuario_newsletter}"
        WHERE
        usuario_id = ${data.usuario_id}
        ;`)

        if(0 < response.affectedRows){
            return {
                status: 200,
                detail: "Usuario atualizado.",
                severity: "success"
            }
        }else{
            return {
                status: 422,
                detail: "Usuario não encontrado.",
                severity: "warn"
            }
        }
        
    } catch (error) {
        return {
            status: 422,
            detail: error.message,
            severity: "danger"
        }
    }
}

async function logar(data){
    try {
        if(data.usuario_email == "" || !data.usuario_email){
            throw new Error("Campo email é obrigatório!")
        }

        if(data.usuario_senha == "" || !data.usuario_senha){
            throw new Error("Campo senha é obrigatório!")
        }

        const response = await executarSQL(`SELECT * FROM usuarios WHERE usuario_email = '${data.usuario_email}';`)

        if(0 < response.length){
            const usuario = response[0]
            const aSenhaEstaCorreta = await bcrypt.compare(data.usuario_senha, usuario.usuario_senha)
            if (aSenhaEstaCorreta) {
                console.log('Senha correta!')
                const token = jwt.sign({
                    data: usuario.usuario_id
                }, process.env.SECRET, { expiresIn: '1h' })
                return {
                    usuario_nome: usuario.usuario_nome,
                    usuario_email: usuario.usuario_email,
                    token
                }
            } else {
                console.log('Senha incorreta!')
                return {
                    status: 422,
                    detail: "Usuário ou senha incorretos.",
                    severity: "warn"
                }
            }
        }else{
            return {
                status: 422,
                detail: "Usuário não encontrado.",
                severity: "warn"
            }
        }

        
    } catch (error) {
        return {
            status: 422,
            detail: error.message,
            severity: "error"
        }
    }
}

module.exports = {
    listarUsuarios,
    listarUmUsuario,
    cadastrarUsuario,
    apagarUsuario,
    editarUsuario,
    logar
}