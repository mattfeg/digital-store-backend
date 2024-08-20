const { prisma } = require('../database/index')

async function listarImagens(){
    try{
        return prisma.imagens.findMany()
    } catch (error) {
        return {
            status: 422,
            detail: error.message,
            severity: "danger"
        }
    }
}

async function listarUmaImagem(id){
    try{
        return prisma.imagens.findUnique({
            where: {
                imagem_id: parseInt(id)
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

async function cadastrarImagem(data){
    try{
        const imagemCadastrada = await  prisma.imagens.create({
            data: {
                imagem_url: data.imagem_url,
                produto_id: data.produto_id
            }
        })
        if(imagemCadastrada){
            return {
                status: 200,
                detail: "Imagem cadastrada.",
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

async function atualizarImagem(data){
    try{
        const imagemAtualizada = await  prisma.imagens.update({
            where: {
                imagem_id: data.imagem_id
            }, data: {
                imagem_url: data.imagem_url,
                produto_id: data.produto_id
            }
        })
        if(imagemAtualizada){
            return {
                status: 200,
                detail: "Imagem atualizada.",
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

async function apagarImagem(id){
    try{
        const imagemApagada = await  prisma.imagens.delete({
            where: {
                imagem_id: parseInt(id)
            }
        })
        if(imagemApagada){
            return {
                status: 200,
                detail: "Imagem apagada.",
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
    listarImagens,
    listarUmaImagem,
    cadastrarImagem,
    atualizarImagem,
    apagarImagem
}