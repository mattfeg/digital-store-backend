const {listarPedidos, listarUmPedido, cadastrarPedido, editarPedido, apagarPedido} = require("../controllers/pedidosController");
const router = require('express').Router()


router.get('/', async (req,res)=>{
    res.send(await listarPedidos())
})

router.get('/:id', async (req,res)=>{
    res.send(await listarUmPedido(req.params.id))
})

router.post('/', async (req,res)=>{
    res.send(await cadastrarPedido(req.body))
})

router.put('/', async (req,res)=>{
    res.send(await editarPedido(req.body))
})

router.delete('/:id', async (req,res)=>{
    res.send(await apagarPedido(req.params.id))
})

module.exports = router