const { prisma } = require('../database')


async function listarMarcas(){
    return prisma.marcas.findMany()
}

async function listarUmaMarca(id){
    return prisma.marcas.findUnique({
        where: {
            marca_id: parseInt(id)
        }
    })
}

async function apagarMarca(id){
    try {
        const marcaApagada = await prisma.marcas.delete({
            where: {
                marca_id: parseInt(id)
            }
        })
        if(marcaApagada){
            return {
                status: 200,
                detail: "Marca apagada.",
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

async function cadastrarMarca(data){
    try {
        const marcaCriada = await prisma.marcas.create({
            data: {
                marca_nome: data.marca_nome,
            }
        })
        if(marcaCriada){
            return {
                status: 200,
                detail: "Marca criada.",
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
async function editarMarca(data){
    try {
        const marcaAtualizada = await prisma.marcas.update({
            where: {
                marca_id: data.marca_id
            },
            data: data
        })
        if(marcaAtualizada){
            return {
                status: 200,
                detail: "Marca atualizada.",
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
    listarMarcas,
    listarUmaMarca,
    cadastrarMarca,
    apagarMarca,
    editarMarca
}