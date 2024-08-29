const { prisma } = require('../database')

async function listarCategorias(){
    try {
        return prisma.categorias.findMany()
    } catch (error) {
        return {
            status: 422,
            detail: error.message,
            severity: "danger"
        }
    }
}

async function listarUmaCategoria(id){
    try {
        return prisma.categorias.findUnique({
            where: {
                categoria_id: parseInt(id)
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

async function cadastrarCategoria(data){
    try {
        const categoriaCadastrada = await prisma.categorias.create({
            data: data
        })
        if(categoriaCadastrada){
            return {
                status: 200,
                detail: "Categoria cadastrada com sucesso.",
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

async function editarCategoria(data){
    try {
        const { categoria_id, ...dadosParaAtualizar } = data;
        const categoriaEditada = await prisma.categorias.update({
            where: {
                categoria_id: parseInt(categoria_id)
            },
            data: dadosParaAtualizar
        })
        if(categoriaEditada){
            return {
                status: 200,
                detail: "Categoria editada com sucesso.",
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

async function apagarCategoria(id){
    try {
        const categoriaApagada = await prisma.categorias.delete({
            where: {
                categoria_id: parseInt(id)
            }
        })
        if(categoriaApagada){
            return {
                status: 200,
                detail: "Categoria apagada com sucesso.",
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
    listarCategorias,
    listarUmaCategoria,
    cadastrarCategoria,
    editarCategoria,
    apagarCategoria
}