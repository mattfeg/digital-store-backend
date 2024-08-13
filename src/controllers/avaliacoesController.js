const { prisma } = require("../database")


async function listarAvaliacoes(){
    try {
        return await prisma.avaliacoes.findMany()
    } catch (error) {
        return {
            status: 422,
            detail: error.message,
            severity: "danger"
        }
    }
}

async function listarUmaAvaliacao(id){
    try {
        return await prisma.avaliacoes.findFirst({
            where: {
                avaliacao_id: parseInt(id)
            },

        })
    } catch (error) {
        return {
            status: 422,
            detail: error.message,
            severity: "danger"
        }
    }
}

async function cadastrarAvaliacao(dados){
    try {
        const avaliacaoCadastrada = await prisma.avaliacoes.create({
            data: {
                avaliacao_opiniao: dados.avaliacao_opiniao,
                avaliacao_nota: dados.avaliacao_nota,
                usuario_id: dados.usuario_id
            }
        })
        if(avaliacaoCadastrada){
            return {
                status: 200,
                detail: "Avaliação cadastrada com sucesso.",
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

async function editarAvaliacao(dados){
    try {
        const avaliacaoEditada = await prisma.avaliacoes.update({
            where: {
                avaliacao_id: dados.avaliacao_id
            }, data: {
                avaliacao_opiniao: dados.avaliacao_opiniao,
                avaliacao_nota: dados.avaliacao_nota,
                avaliacao_data: dados.avaliacao_data
            }
        })
        if(avaliacaoEditada){
            return {
                status: 200,
                detail: "Avaliação editada com sucesso.",
                severity: "success"
            }
        }else{
            return {
                status: 422,
                detail: "Avaliação não encontrada.",
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

async function apagarAvaliacao(id){
    try {
        const avaliacaoApagada = await prisma.avaliacoes.delete({
            where: {
                avaliacao_id: parseInt(id)
            }
        })
        if(avaliacaoApagada){
            return {
                status: 200,
                detail: "Avaliacao apagada com sucesso.",
                severity: "success"
            }
        }else{
            return {
                status: 422,
                detail: "Avaliacao não encontrada.",
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

module.exports = {
    listarAvaliacoes,
    listarUmaAvaliacao,
    cadastrarAvaliacao,
    apagarAvaliacao,
    editarAvaliacao
}