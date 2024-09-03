const {listarCategorias, listarUmaCategoria, cadastrarCategoria, editarCategoria, apagarCategoria} = require("../controllers/categoriasController");
const router = require('express').Router()


router.get('/', async (req,res)=>{
    // #swagger.tags = ['Categorias']
    // #swagger.description = 'Retorna lista de categorias'
    /* #swagger.responses[200] = {
            description: 'Retorna lista de marcas',
            schema: [{
                marca_id: 1,
                marca_nome: 'Vestuario',
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
    res.send(await listarCategorias())
})

router.get('/:id', async (req,res)=>{
    // #swagger.tags = ['Categorias']
    // #swagger.description = 'Retorna uma categoria'
    /* #swagger.responses[200] = {
            description: 'Retorna uma marca',
            schema: [{
                marca_id: 1,
                marca_nome: 'Vestuario',
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
    res.send(await listarUmaCategoria(req.params.id))
})

router.post('/', async (req,res)=>{
    // #swagger.tags = ['Categorias']
    // #swagger.description = 'Cria uma categoria'
    /* #swagger.parameters['obj'] = {
                in: 'body',
                schema: {
                    $categoria_nome: 'Puma',
                    $categoria_descricao: 'Linha de Produtos Puma',
                    $produtos: [],
                }
        } */
    /* #swagger.responses[200] = {
            description: 'Categoria criada',
            schema: {
                status: 200,
                detail: 'Categoria criada com sucesso.',
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
    res.send(await cadastrarCategoria(req.body))
})

router.put('/', async (req,res)=>{
    // #swagger.tags = ['Categorias']
    // #swagger.description = 'Editar uma categoria'
    /* #swagger.parameters['obj'] = {
                in: 'body',
                schema: {
                    $categoria_id: 1,
                    $categoria_nome: 'Puma',
                    $categoria_descricao: 'Linha de Produtos Puma',
                    $produtos: [],
                }
        } */
    /* #swagger.responses[200] = {
            description: 'Categoria editada',
            schema: {
                status: 200,
                detail: 'Categoria editada com sucesso.',
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
    res.send(await editarCategoria(req.body))
})

router.delete('/:id', async (req,res)=>{
    // #swagger.tags = ['Categorias']
    // #swagger.description = 'Apaga uma marca'
    /* #swagger.responses[200] = {
            description: 'Categoria apagada',
            schema: {
                status: 200,
                detail: 'Categoria apagada',
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
    res.send(await apagarCategoria(req.params.id))
})

module.exports = router