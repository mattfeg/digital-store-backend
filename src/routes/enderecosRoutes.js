const { listarUmEndereco, cadastrarEndereco, editarEndereco, apagarEndereco, listarEnderecos} = require("../controllers/enderecosController");
const router = require('express').Router()


router.get('/', async (req,res)=>{
    // #swagger.tags = ['Endereços']
    // #swagger.description = 'Retorna lista de endereços'
    /* #swagger.responses[200] = {
            description: 'Retorna lista de endereços',
            schema: [{
                endereco_id: 1,
                endereco_estado: "Ceará",
                endereco_cidade: "Fortaleza",
                endereco_bairro: "Aldeota",
                endereco_rua: "Rua 1",
                endereco_numero: "12",
                endereco_complemento: null,
                endereco_referencia: null,
                endereco_cep: 12345-67,
                usuario_id: 1,
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
    res.send(await listarEnderecos())
})

router.get('/:id', async (req,res)=>{
    // #swagger.tags = ['Endereços']
    // #swagger.description = 'Retorna um endereço'
    /* #swagger.responses[200] = {
            description: 'Retorna um endereço',
            schema: [{
                endereco_id: 1,
                endereco_estado: "Ceará",
                endereco_cidade: "Fortaleza",
                endereco_bairro: "Aldeota",
                endereco_rua: "Rua 1",
                endereco_numero: "12",
                endereco_complemento: null,
                endereco_referencia: null,
                endereco_cep: 12345-67,
                usuario_id: 1,
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
    res.send(await listarUmEndereco(req.params.id))
})

router.post('/', async (req,res)=>{
    // #swagger.tags = ['Endereços']
    // #swagger.description = 'Cria uma categoria'
    /* #swagger.parameters['obj'] = {
                in: 'body',
                schema: {
                    $endereco_estado: "Ceará",
                    $endereco_cidade: "Fortaleza",
                    $endereco_bairro: "Aldeota",
                    $endereco_rua: "Rua 1",
                    $endereco_numero: "12",
                    $endereco_complemento: null,
                    $endereco_referencia: null,
                    $endereco_cep: 12345-67,
                    $usuario_id: 1
                }
        } */
    /* #swagger.responses[200] = {
            description: 'Categoria criada',
            schema: {
                status: 200,
                detail: 'Endereço criado com sucesso.',
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
    res.send(await cadastrarEndereco(req.body))
})

router.put('/', async (req,res)=>{
    // #swagger.tags = ['Endereços']
    // #swagger.description = 'Editar um endereço'
    /* #swagger.parameters['obj'] = {
                in: 'body',
                schema: {
                    $endereco_estado: "Ceará",
                    $endereco_cidade: "Fortaleza",
                    $endereco_bairro: "Aldeota",
                    $endereco_rua: "Rua 1",
                    $endereco_numero: "12",
                    $endereco_complemento: null,
                    $endereco_referencia: null,
                    $endereco_cep: 12345-67,
                    $usuario_id: 1
                }
        } */
    /* #swagger.responses[200] = {
            description: 'Endereço editado',
            schema: {
                status: 200,
                detail: 'Endereço editado com sucesso.',
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
    res.send(await editarEndereco(req.body))
})

router.delete('/:id', async (req,res)=>{
    // #swagger.tags = ['Endereços']
    // #swagger.description = 'Apaga um endereço.'
    /* #swagger.responses[200] = {
            description: 'Endereço apagado.',
            schema: {
                status: 200,
                detail: 'Endereço apagado com sucesso.',
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
    res.send(await apagarEndereco(req.params.id))
})

module.exports = router