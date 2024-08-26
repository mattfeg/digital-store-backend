const { listarAvaliacoes,listarUmaAvaliacao,cadastrarAvaliacao,apagarAvaliacao, editarAvaliacao} = require("../controllers/avaliacoesController");

const router = require("express").Router();

router.get("/", async (req, res) => {
    res.send(await listarAvaliacoes());
});
router.get("/:id", async (req, res) => {
    res.send(await listarUmaAvaliacao(req.params.id));
});
router.post("/", async (req, res) => {
    res.send(await cadastrarAvaliacao(req.body));
});
router.put("/", async (req, res) => {
    res.send(await editarAvaliacao(req.body));
});
router.delete("/:id", async (req, res) => {
    res.send(await apagarAvaliacao(req.params.id));
});

module.exports = router;