const swaggerAutogen = require('swagger-autogen')({ language: 'pt-BR' });
const doc = require('./config/swagger');

const outputFile = './swagger_documentation.json';
const endpoints = ['../index.js'];

swaggerAutogen(outputFile, endpoints, doc);