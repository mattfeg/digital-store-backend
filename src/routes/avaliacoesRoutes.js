const { listarTodos, deletar, listarUm, criar } = require("../controllers/avaliacoesController");

const router = require("express").Router();

router.get("/", async (req, res) => {
    res.send(await listarTodos());
});
router.get("/:id", async (req, res) => {
    res.send(await listarUm(req.params.id));
});
router.post("/", async (req, res) => {
    res.send(await criar(req.body));
});
router.post("/:id", async (req, res) => {
    res.send();
});
router.delete("/:id", async (req, res) => {
    res.send(await deletar(req.params.id));
});

module.exports = router;