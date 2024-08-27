const { logar } = require('./src/controllers/usuariosController')
const { verificarToken } = require('./src/utils')
const { prisma } = require('./src/database')
const { jwt } = require('jsonwebtoken')
const express =  require('express')
const cors =  require('cors')
const nodemailer = require('nodemailer')
const bcrypt = require("bcrypt");
require('dotenv').config()

const usuarioRoutes = require('./src/routes/usuariosRoutes')
const avaliacoesRoutes = require("./src/routes/avaliacoesRoutes");
const imagensRoutes = require('./src/routes/imagensRoutes')
const produtosRoutes = require("./src/routes/produtosRoutes")
const marcasRoutes = require("./src/routes/marcasRoutes")
const pedidosRoutes = require('./src/routes/pedidosRoutes')

const port = 8000
const app = express()
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
    }
})


app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Documentação")
});

app.post('/login', async(req,res)=>{
    res.send(await logar(req.body))
});

app.post('/req-recuperar-senha', async (req, res) => {
    const usuarioEmail = req.body.usuario_email
    const resposta = await prisma.usuarios.findUnique({
        where: {
            usuario_email: usuarioEmail
        }
    })

    if (!resposta) {
        return res.status(400).json({ message: 'Email não encontrado' })
    }

    const token = jwt.encode({ usuarioEmail, exp: Date.now() + 3600000 }, process.env.SECRET)

    const mailOptions = {
        from: process.env.EMAIL_USER,
        to: usuarioEmail,
        subject: 'Redefinição de Senha',
        html: `<p>Para redefinir sua senha, clique no link abaixo:</p>
               <a href="http://localhost:3000/recuperar-senha/${token}">Redefinir Senha</a>`
    }

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return res.status(500).json({ message: 'Erro ao enviar email' })
        }
        res.status(200).json({ message: 'Email de redefinição de senha enviado' })
    })
})

app.post('/recuperar-senha/:token', async (req, res) => {
    const { token } = req.params
    const { usuario_senha, usuarioEmail } = req.body

    // TODO: Atribuir corretamente o Email do Usuario
    try {
        const decoded = jwt.decode(token, process.env.SECRET)

        if (decoded.exp <= Date.now()) {
            return res.status(400).json({ message: 'Token expirado' })
        }

        const resposta = await prisma.usuarios.findUnique({
            where: {
                usuario_email: usuarioEmail
            }
        })

        if (!resposta) {
            return res.status(400).json({ message: 'Usuário não encontrado' })
        }

        const senhaEncriptada = await bcrypt.hash(usuario_senha, 10)
        await prisma.usuarios.update({
            where: {
                usuario_email: usuarioEmail
            }, data: {
                usuario_senha: senhaEncriptada
            }
        })

        return res.status(200).json({ message: 'Senha redefinida com sucesso' })
    } catch (error) {
        res.status(400).json({ message: 'Token inválido' })
    }
})

app.use('/usuarios', verificarToken, usuarioRoutes)

app.use('/avaliacoes', verificarToken, avaliacoesRoutes)

app.use('/imagens', verificarToken, imagensRoutes)

app.use('/produtos', verificarToken, produtosRoutes)

app.use('/marcas', verificarToken, marcasRoutes)

app.use('/pedidos', verificarToken, pedidosRoutes)

app.listen(port, () => {
    console.log(`http://localhost:${port}`)
})