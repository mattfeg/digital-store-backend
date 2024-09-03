const {listarImagens, listarUmaImagem, cadastrarImagem, atualizarImagem, apagarImagem} = require("../controllers/imagensController");
const express = require('express')
const router = express.Router()


router.get('/', async (req,res)=>{
    // #swagger.tags = ['Imagens']
    // #swagger.description = 'Retorna lista de imagens'
    /* #swagger.responses[200] = {
            description: 'Retorna lista de imagens',
            schema: [{
                imagem_id: 1,
                imagem_url: 'imagem',
                produto: 1,
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
    req.send(await listarImagens())
})

router.get('/:id', async (req,res)=>{
    // #swagger.tags = ['Imagens']
    // #swagger.description = 'Retorna uma imagem'
    /* #swagger.responses[200] = {
            description: 'Retorna uma imagem',
            schema: {
                imagem_id: 1,
                imagem_url: 'imagem',
                produto: 1,
                criado_em: '2024-08-26 23:31:00',
                atualizado_em: '2024-08-26 23:31:00'
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
    req.send(await listarUmaImagem(req.params.id))
})

router.post('/', async (req,res) => {
    // #swagger.tags = ['Imagens']
    // #swagger.description = 'Cria uma Imagem'
    /* #swagger.parameters['obj'] = {
                in: 'body',
                schema: {
                    $imagem_url: 'imagem',
                    $produto: 1
                }
        } */
    /* #swagger.responses[200] = {
            description: 'Imagem criada',
            schema: {
                status: 200,
                detail: 'Imagem criada',
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
    req.send(await cadastrarImagem(req.body))
})

router.put('/', async (req,res)=>{
    // #swagger.tags = ['Imagens']
    // #swagger.description = 'Edita uma imagem'
    /* #swagger.parameters['obj'] = {
                in: 'body',
                schema: {
                    $$imagem_id: 1,
                    $$imagem_url: 'imagem',
                    $$produto: 1
                }
        } */
    /* #swagger.responses[200] = {
            description: 'Imagem atualizada',
            schema: {
                status: 200,
                detail: 'Imagem atualizada',
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
    req.send(await atualizarImagem(req.body))
})

router.delete('/:id', async (req,res)=>{
    // #swagger.tags = ['Imagens']
    // #swagger.description = 'Deleta uma imagem'
    /* #swagger.responses[200] = {
            description: 'Imagem deletada',
            schema: {
                status: 200,
                detail: 'Imagem deletada',
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
    req.send(await apagarImagem(req.params.id))
})

module.exports = router