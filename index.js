const { logar } = require('./src/controllers/usuariosController');
const { verificarToken } = require('./src/utils');
const { prisma } = require('./src/database/index');
const { jwt } = require('jsonwebtoken');
const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
const bcrypt = require('bcrypt');
const swaggerUI = require('swagger-ui-express');
require('dotenv').config();

const swaggerFile = require('./src/swagger_documentation.json');
const usuarioRoutes = require('./src/routes/usuariosRoutes');
const avaliacoesRoutes = require('./src/routes/avaliacoesRoutes');
const imagensRoutes = require('./src/routes/imagensRoutes');
const produtosRoutes = require('./src/routes/produtosRoutes');
const marcasRoutes = require('./src/routes/marcasRoutes');
const pedidosRoutes = require('./src/routes/pedidosRoutes')
const categoriasRoutes = require('./src/routes/categoriasRoutes')

const port = 8000;
const app = express();
const transporter = nodemailer.createTransport({
	service: 'gmail',
	auth: {
		user: process.env.EMAIL_USER,
		pass: process.env.EMAIL_PASS,
	},
});

app.use(cors());
app.use(express.json());
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerFile));

app.get('/', (req, res) => {
	res.redirect('/docs');
});

app.use('/usuarios', usuarioRoutes);

app.use('/avaliacoes', verificarToken, avaliacoesRoutes);

app.use('/imagens', verificarToken, imagensRoutes);

app.use('/produtos', verificarToken, produtosRoutes);

app.use('/pedidos', verificarToken, pedidosRoutes)

app.use('/categorias',
	/* #swagger.responses[401] = {
            description: 'Não autorizado',
            schema: {
                status: 401,
                detail: 'Usuário não encontrado.',
                severity: 'warm'
            }
    } */
	verificarToken,
	categoriasRoutes)

app.use(
	'/marcas',
	/* #swagger.responses[401] = {
            description: 'Não autorizado',
            schema: {
                status: 401,
                detail: 'Usuário não encontrado.',
                severity: 'warm'
            }
    } */
	verificarToken,
	marcasRoutes
);

app.listen(port, () => {
	console.log(`http://localhost:${port}`);
});

module.exports = {
	port,
};
