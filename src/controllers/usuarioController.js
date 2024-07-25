const { executarSQL } = require('../database/index')

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
    await executarSQL(`INSERT INTO usuarios (
        usuario_email,
        usuario_senha,
        usuario_nome,
        usuario_cpf,
        usuario_celular,
        usuario_newsletter
        ) VALUES (
        '${data.usuario_email}',
        '${data.usuario_senha}',
        '${data.usuario_nome}',
        '${data.usuario_cpf}',
        '${data.usuario_celular}',
        '${data.usuario_newsletter}'
        );`)
    return {
        status: 200,
        detail: "Usuario cadastrado com Sucesso.",
        severity: "success"
    }
}

async function apagarUsuario(id){
    
    try {
        await executarSQL(`DELETE FROM usuarios WHERE usuario_id = ${id}`)
        return {
            status: 200,
            detail: "Usuario deletado.",
            severity: "success"
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
    try {
        await executarSQL(`UPDATE usuarios SET
        usuario_email = "${data.usuario_email}",
        usuario_senha = "${data.usuario_senha}",
        usuario_nome = "${data.usuario_nome}",
        usuario_cpf = "${data.usuario_cpf}",
        usuario_celular = "${data.usuario_celular}",
        usuario_newsletter = "${data.usuario_newsletter}"
        WHERE
        usuario_id = ${data.usuario_id}
        ;`)
        return {
            status: 200,
            detail: "Usuario atualizado.",
            severity: "success"
        }
    } catch (error) {
        return {
            status: 422,
            detail: error.message,
            severity: "danger"
        }
    }
}

module.exports = {
    listarUsuarios,
    listarUmUsuario,
    cadastrarUsuario,
    apagarUsuario,
    editarUsuario
}