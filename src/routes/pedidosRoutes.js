const {listarPedidos, listarUmPedido, cadastrarPedido, editarPedido, apagarPedido} = require("../controllers/pedidosController");
const router = require('express').Router()


router.get('/', async (req,res)=>{
    // #swagger.tags = ['Pedidos']
    // #swagger.description = 'Retorna lista de pedidos.'
    /* #swagger.responses[200] = {
            description: 'Retorna lista de pedidos',
            schema: [{
                pedido_id: 1,
                pedido_descricao: 'Tenis Nike 41',
                pedido_imagem: 'imagens-tenis',
                criado_em: '2024-08-26 23:31:00',
                atualizado_em: '2024-08-26 23:31:00'
            }]
    } */
    /* #swagger.responses[422] = {
            description: 'Erro interno',
            schema: {
                status: 422,
                detail: 'mensagem do sistema',
                severity: 'danger'
            }
    } */
    res.send(await listarPedidos())
})

router.get('/:id', async (req,res)=>{
    // #swagger.tags = ['Pedidos']
    // #swagger.description = 'Retorna um pedido.'
    /* #swagger.responses[200] = {
            description: 'Retorna um pedido.',
            schema: [{
                pedido_id: 1,
                pedido_descricao: 'Tenis Nike 41',
                pedido_imagem: 'imagens-tenis',
                criado_em: '2024-08-26 23:31:00',
                atualizado_em: '2024-08-26 23:31:00'
            }]
    } */
    /* #swagger.responses[422] = {
            description: 'Erro interno',
            schema: {
                status: 422,
                detail: 'mensagem do sistema',
                severity: 'danger'
            }
    } */
    res.send(await listarUmPedido(req.params.id))
})

router.post('/', async (req,res)=>{
    // #swagger.tags = ['Pedidos']
    // #swagger.description = 'Cria um pedido'
    /* #swagger.parameters['obj'] = {
                in: 'body',
                schema: {
                    $pedido_descricao: 'Blusa Puma',
                    $pedido_status: 1,
                    $pedido_imagem: 'imagem-blusa'
                }
        } */
    /* #swagger.responses[200] = {
            description: 'Pedido criado',
            schema: {
                status: 200,
                detail: 'Pedido criado',
                severity: 'success'
            }
    } */
    /* #swagger.responses[422] = {
            description: 'Erro interno',
            schema: {
                status: 422,
                detail: 'mensagem do sistema',
                severity: 'danger'
            }
    } */
    res.send(await cadastrarPedido(req.body))
})

router.put('/', async (req,res)=>{
    // #swagger.tags = ['Pedidos']
    // #swagger.description = 'Edita um pedido.'
    /* #swagger.parameters['obj'] = {
                in: 'body',
                schema: {
                    $pedido_id: 1,
                    $pedido_descricao: 'Blusa Puma',
                    $pedido_status: 1,
                    $pedido_imagem: 'imagem-blusa'
                }
        } */
    /* #swagger.responses[200] = {
            description: 'Pedido atualizado',
            schema: {
                status: 200,
                detail: 'Pedido atualizado',
                severity: 'success'
            }
    } */
    /* #swagger.responses[422] = {
            description: 'Erro interno',
            schema: {
                status: 422,
                detail: 'mensagem do sistema',
                severity: 'danger'
            }
    } */
    res.send(await editarPedido(req.body))
})

router.delete('/:id', async (req,res)=>{
    // #swagger.tags = ['Pedidos']
    // #swagger.description = 'Deleta um pedido.'
    /* #swagger.responses[200] = {
            description: 'Pedido deletado.',
            schema: {
                status: 200,
                detail: 'Pedido deletado.',
                severity: 'success'
            }
    } */
    /* #swagger.responses[422] = {
            description: 'Erro interno',
            schema: {
                status: 422,
                detail: 'mensagem do sistema',
                severity: 'danger'
            }
    } */
    res.send(await apagarPedido(req.params.id))
})

module.exports = router