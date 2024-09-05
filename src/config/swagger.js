const { port } = require('../..');
const { Marcas, Avaliacoes, Categorias, Enderecos, Imagens, Pedidos, Produtos, Usuarios } = require('../documentation/index');

module.exports = {
	info: {
		version: '1.0.0',
		title: 'DigitalStore API',
		description: 'Documentação da API da digital store',
	},
	host: `https://digital-store-backend-c4an.onrender.com`,
	schemes: ['http', 'https'],
	consumes: ['application/json'],
	produces: ['application/json'],
	securityDefinitions: {
		JWT: {
		  description: 'JWT token',
		  type: 'apiKey',
		  in: 'header',
		  name: 'Authorization',
		},
		// bearerAuth: {
		// 	type: 'http',
		// 	scheme: 'bearer',
		// 	bearerFormat: 'JWT',
		// },
	},
	definitions: {
		Marcas,
		Avaliacoes,
		Categorias,
		Enderecos,
		Imagens,
		Pedidos,
		Produtos,
		Usuarios
	},
};
