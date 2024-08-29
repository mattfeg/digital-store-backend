const { prisma } = require('../database')

async function listarPedidos(){
    return prisma.pedidos.findMany()
}

async function listarUmPedido(id){
    const pedido = await prisma.pedidos.findUnique({
        where: {
            pedido_id: parseInt(id)
        }
    })
    if(pedido){
        return pedido
    }
    return {
        status: 200,
        detail: "Pedido não existe.",
        severity: "success"
    }
}

async function cadastrarPedido(data){
    try{
        const pedidoCriado = await prisma.pedidos.create({data: data})

        if(pedidoCriado){
            return {
                status: 200,
                detail: "Pedido cadastrado com sucesso.",
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

async function editarPedido(data){
    try{
        const { pedido_id, ...dadosParaAtualizar } = data;
        const pedidoEditado = await prisma.pedidos.update({
            where: {
                pedido_id: parseInt(pedido_id)
            }, data: dadosParaAtualizar})

        if(pedidoEditado){
            return {
                status: 200,
                detail: "Pedido editado com sucesso.",
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

async function apagarPedido(id){
    try{
        const pedidoApagado = await prisma.pedidos.delete({
            where: {
                pedido_id: parseInt(id)
            }})
        if(pedidoApagado){
            return {
                status: 200,
                detail: "Pedido apagado com sucesso.",
                severity: "success"
            }
        }
    }catch (error) {
        return {
            status: 422,
            detail: error.message,
            severity: "danger"
        }
    }
}

module.exports= {
    listarPedidos,
    listarUmPedido,
    cadastrarPedido,
    editarPedido,
    apagarPedido
}