const express = require('express')
const { listarProdutos,listarUmProduto,cadastrarProduto,editarProduto,apagarProduto,listarProdutosEmDestaque } = require('../controllers/produtosController')

const router = express.Router()


router.get('/', async (req,res)=>{
    // #swagger.tags = ['Produtos']
    // #swagger.description = 'Retorna lista de produtos'
    /* #swagger.responses[200] = {
            description: 'Retorna lista de produtos',
            schema: [{
                produto_id: 1,
                produto_nome: "Nome do Produto",
                produto_descricao: "Descrição do Produto",
                produto_preco: 100,
                produto_status: 1,
                produto_estoque: 20,
                produto_peso: 500,
                produto_em_promocao: 0,
                produto_destaque: 0,
                produto_tags: "",
                marca_id: 1,
                categoria_id: 1,
                produto_imagems: 1,
                produto_tamanho: 1,
                genero_id: 1,
                colecao_id: 1,
                pedidoItens: 1
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
    res.send(await listarProdutos())
})

router.get('/destaques', async (req,res)=>{
    // #swagger.tags = ['Produtos']
    // #swagger.description = 'Retorna um produto em destaque'
    /* #swagger.responses[200] = {
            description: 'Retorna um produto em destaque',
            schema: {
                produto_id: 1,
                produto_nome: "Nome do Produto",
                produto_descricao: "Descrição do Produto",
                produto_preco: 100,
                produto_status: 1,
                produto_estoque: 20,
                produto_peso: 500,
                produto_em_promocao: 0,
                produto_destaque: 0,
                produto_tags: "",
                marca_id: 1,
                categoria_id: 1,
                produto_imagems: 1,
                produto_tamanho: 1,
                genero_id: 1,
                colecao_id: 1,
                pedidoItens: 1
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
    res.send(await listarProdutosEmDestaque())
})

router.get('/:id', async (req,res)=>{
    // #swagger.tags = ['Produtos']
    // #swagger.description = 'Retorna um produto'
    /* #swagger.responses[200] = {
            description: 'Retorna um produto',
            schema: {
                produto_id: 1,
                produto_nome: "Nome do Produto",
                produto_descricao: "Descrição do Produto",
                produto_preco: 100,
                produto_status: 1,
                produto_estoque: 20,
                produto_peso: 500,
                produto_em_promocao: 0,
                produto_destaque: 0,
                produto_tags: "",
                marca_id: 1,
                categoria_id: 1,
                produto_imagems: 1,
                produto_tamanho: 1,
                genero_id: 1,
                colecao_id: 1,
                pedidoItens: 1
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
    res.send(await listarUmProduto(req.params.id))
})

router.post('/', async (req,res)=>{
    // #swagger.tags = ['Produtos']
    // #swagger.description = 'Cria um produto'
    /* #swagger.parameters['obj'] = {
                in: 'body',
                schema: {
                    $produto_nome: "Nome do Produto",
                    $produto_descricao: "Descrição do Produto",
                    $produto_preco: 100,
                    $produto_status: 1,
                    $produto_estoque: 20,
                    $produto_peso: 500,
                    $produto_em_promocao: 0,
                    $produto_destaque: 0,
                    $produto_tags: "",
                    $marca_id: 1,
                    $categoria_id: 1,
                    $produto_imagems: 1,
                    $produto_tamanho: 1,
                    $genero_id: 1,
                    $colecao_id: 1,
                    $pedidoItens: 1
                }
        } */
    /* #swagger.responses[200] = {
            description: 'Produto criado',
            schema: {
                status: 200,
                detail: 'Produto criado com sucesso.',
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
    res.send(await cadastrarProduto(req.body))
})

router.put('/', async (req,res)=>{
    // #swagger.tags = ['Produtos']
    // #swagger.description = 'Edita um produto'
    /* #swagger.parameters['obj'] = {
                in: 'body',
                schema: {
                    $produto_id: 1,
                    $produto_nome: "Nome do Produto",
                    $produto_descricao: "Descrição do Produto",
                    $produto_preco: 100,
                    $produto_status: 1,
                    $produto_estoque: 20,
                    $produto_peso: 500,
                    $produto_em_promocao: 0,
                    $produto_destaque: 0,
                    $produto_tags: "",
                    $marca_id: 1,
                    $categoria_id: 1,
                    $produto_imagems: 1,
                    $produto_tamanho: 1,
                    $genero_id: 1,
                    $colecao_id: 1,
                    $pedidoItens: 1
                }
        } */
    /* #swagger.responses[200] = {
            description: 'Produto atualizado.',
            schema: {
                status: 200,
                detail: 'Produto atualizado.',
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
    res.send(await editarProduto(req.body))
})

router.delete('/:id', async (req,res)=>{
    // #swagger.tags = ['Produtos']
    // #swagger.description = 'Deleta um produto'
    /* #swagger.responses[200] = {
            description: 'Produto deletado',
            schema: {
                status: 200,
                detail: 'Produto deletado com sucesso.$',
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
    res.send(await apagarProduto(req.params.id))
})


module.exports = router