const { prisma } = require('../database')

async function listarEnderecos(){
    try {
        return prisma.enderecos.findMany()
    } catch (error) {
        return {
            status: 422,
            detail: error.message,
            severity: "danger"
        }
    }
}

async function listarUmEndereco(id){
    try {
        return prisma.enderecos.findUnique({
            where: {
                endereco_id: parseInt(id)
            }
        })
    } catch (error) {
        return {
            status: 422,
            detail: error.message,
            severity: "danger"
        }
    }
}

async function cadastrarEndereco(data){
    try {
        const categoriaCadastrada = await prisma.enderecos.create({
            data: data
        })
        if(categoriaCadastrada){
            return {
                status: 200,
                detail: "Endereço cadastrado com sucesso.",
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

async function editarEndereco(data){
    try {
        const { endereco_id, ...dadosParaAtualizar } = data;
        const enderecoEditado = await prisma.enderecos.update({
            where: {
                endereco_id: parseInt(endereco_id)
            },
            data: dadosParaAtualizar
        })
        if(enderecoEditado){
            return {
                status: 200,
                detail: "Endereço editado com sucesso.",
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

async function apagarEndereco(id){
    try {
        const enderecoApagado = await prisma.enderecos.delete({
            where: {
                endereco_id: parseInt(id)
            }
        })
        if(enderecoApagado){
            return {
                status: 200,
                detail: "Endereço apagado com sucesso.",
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

module.exports = {
    listarEnderecos,
    listarUmEndereco,
    cadastrarEndereco,
    editarEndereco,
    apagarEndereco
}