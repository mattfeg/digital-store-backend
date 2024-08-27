const {listarImagens, listarUmaImagem, cadastrarImagem, atualizarImagem, apagarImagem} = require("../controllers/imagensController");
const express = require('express')
const router = express.Router()


router.get('/', async (req,res)=>{
    req.send(await listarImagens())
})

router.get('/:id', async (req,res)=>{
    req.send(await listarUmaImagem(req.params.id))
})

router.post('/', async (req,res) => {
    req.send(await cadastrarImagem(req.body))
})

router.put('/', async (req,res)=>{
    req.send(await atualizarImagem(req.body))
})

router.delete('/:id', async (req,res)=>{
    req.send(await apagarImagem(req.params.id))
})

module.exports = router