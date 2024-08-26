const { listarMarcas,listarUmaMarca,cadastrarMarca,editarMarca,apagarMarca } = require('../controllers/marcasController')
const express = require('express')
const router = express.Router()

router.get('/', async (req,res)=>{
    res.send(await listarMarcas())
})

router.get('/:id', async (req,res)=>{
    res.send(await listarUmaMarca(req.params.id))
})

router.put('/', async (req,res)=>{
    res.send(await editarMarca(req.body))
})

router.delete('/:id', async (req,res)=>{
    res.send(await apagarMarca(req.params.id))
})

router.post('/', async (req,res)=>{
    res.send(await cadastrarMarca(req.body))
})

module.exports = router