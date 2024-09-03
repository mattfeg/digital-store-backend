const { listarAvaliacoes,listarUmaAvaliacao,cadastrarAvaliacao,apagarAvaliacao, editarAvaliacao} = require("../controllers/avaliacoesController");

const router = require("express").Router();

router.get("/", async (req, res) => {
    // #swagger.tags = ['Avaliações']
    // #swagger.description = 'Retorna lista de avaliacoes'
    /* #swagger.responses[200] = {
            description: 'Retorna lista de avaliacoes',
            schema: [{
                avaliacao_id: 1,
                avaliacao_opiniao: "Texto da Avaliação",
                avaliacao_nota: 4,
                usuario_id: 1
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
    res.send(await listarAvaliacoes());
});
router.get("/:id", async (req, res) => {
    // #swagger.tags = ['Avaliações']
    // #swagger.description = 'Retorna uma avaliação'
    /* #swagger.responses[200] = {
            description: 'Retorna uma avaliação',
            schema: {
                avaliacao_id: 1,
                avaliacao_opiniao: "Texto da Avaliação",
                avaliacao_nota: 4,
                usuario_id: 1
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
    res.send(await listarUmaAvaliacao(req.params.id));
});
router.post("/", async (req, res) => {
    // #swagger.tags = ['Avaliações']
    // #swagger.description = 'Cria uma Avaliação'
    /* #swagger.parameters['obj'] = {
                in: 'body',
                schema: {
                    $avaliacao_opiniao: "Texto da Avaliação",
                    $avaliacao_nota: 4,
                    $usuario_id: 1
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
    res.send(await cadastrarAvaliacao(req.body));
});
router.put("/", async (req, res) => {
    // #swagger.tags = ['Avaliações']
    // #swagger.description = 'Edita uma avaliação'
    /* #swagger.parameters['obj'] = {
                in: 'body',
                schema: {
                    $avaliacao_id: 1,
                    $avaliacao_opiniao: "Texto da Avaliação",
                    $avaliacao_nota: 4,
                    $usuario_id: 1
                }
        } */
    /* #swagger.responses[200] = {
            description: 'Avaliação atualizada.',
            schema: {
                status: 200,
                detail: 'Avaliação atualizada.',
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
    res.send(await editarAvaliacao(req.body));
});
router.delete("/:id", async (req, res) => {
    // #swagger.tags = ['Avaliações']
    // #swagger.description = 'Deleta uma avaliação.'
    /* #swagger.responses[200] = {
            description: 'Avaliação deletada',
            schema: {
                status: 200,
                detail: 'Avaliação deletada com sucesso.',
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
    res.send(await apagarAvaliacao(req.params.id));
});

module.exports = router;