const {
	listarMarcas,
	listarUmaMarca,
	cadastrarMarca,
	editarMarca,
	apagarMarca,
} = require('../controllers/marcasController');
const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
	// #swagger.tags = ['Marcas']
	// #swagger.description = 'Retorna lista de marcas'
	/* #swagger.responses[200] = {
            description: 'Retorna lista de marcas',
            schema: [{
                marca_id: 1,
                marca_nome: 'Nike',
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
	res.send(await listarMarcas());
});

router.get('/:id', async (req, res) => {
	// #swagger.tags = ['Marcas']
	// #swagger.description = 'Retorna uma marca'
	/* #swagger.responses[200] = {
            description: 'Retorna uma marca',
            schema: {
                marca_id: 1,
                marca_nome: 'Nike',
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
	res.send(await listarUmaMarca(req.params.id));
});

router.post('/', async (req, res) => {
	// #swagger.tags = ['Marcas']
	// #swagger.description = 'Cria uma marca'
	/* #swagger.parameters['obj'] = {
                in: 'body',
                schema: {
                    $marca_nome: 'Puma'
                }
        } */
	/* #swagger.responses[200] = {
            description: 'Marca criada',
            schema: {
                status: 200,
                detail: 'Marca criada',
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
	res.send(await cadastrarMarca(req.body));
});

router.put('/', async (req, res) => {
	// #swagger.tags = ['Marcas']
	// #swagger.description = 'Edita uma marca'
	/* #swagger.parameters['obj'] = {
                in: 'body',
                schema: {
                    $marca_id: 1,
                    $marca_nome: 'Nike'
                }
        } */
	/* #swagger.responses[200] = {
            description: 'Marca atualizada',
            schema: {
                status: 200,
                detail: 'Marca atualizada',
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
	res.send(await editarMarca(req.body));
});

router.delete('/:id', async (req, res) => {
	// #swagger.tags = ['Marcas']
	// #swagger.description = 'Deleta uma marca'
	/* #swagger.responses[200] = {
            description: 'Marca deletada',
            schema: {
                status: 200,
                detail: 'Marca deletada',
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
	res.send(await apagarMarca(req.params.id));
});

module.exports = router;
