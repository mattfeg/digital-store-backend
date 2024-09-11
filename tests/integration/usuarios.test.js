// tests/integration/usuarios.test.js
const request = require('supertest');
const { app } = require('../../index');
const { prisma } = require('../../src/database/index');

let userId; // Define uma variável global para o userId

describe('Testes de Integração: Endpoints de Usuários', () => {

    beforeAll(async () => {
        await prisma.usuarios.deleteMany(); // Limpa a tabela de usuários antes dos testes

        // Cria um usuário para testes
        const user = await prisma.usuarios.create({
            data: {
                usuario_nome: 'Matheus',
                usuario_email: 'matheus@test.com',
                usuario_senha: 'senha123',
                usuario_cpf: '12345678901',
                usuario_celular: '999999999',
                usuario_newsletter: true
            }
        });

        userId = user.usuario_id; // Armazena o ID do usuário para atualização
    });

    afterAll(async () => {
        await prisma.$disconnect(); // Fecha a conexão com o banco de dados após os testes
    });

    it('Deve retornar todos os usuários', async () => {
        const response = await request(app).get('/usuarios');
        const usuario = response.body[0]; // Corrige o acesso ao primeiro usuário do body
        expect(response.status).toBe(200);
        expect(response.body.length).toBeGreaterThan(0); // O teste espera que haja pelo menos 1 usuário
        userId = usuario.usuario_id; // Armazena o ID do usuário retornado para o próximo teste
    });

    it('Deve retornar um usuário', async () => {
        const response = await request(app).get(`/usuarios/${userId}`);

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('usuario_id'); // Verifica se o ID está presente
        expect(response.body.usuario_id).toBe(userId); // Verifica se o ID é o esperado
        expect(response.body).toHaveProperty('usuario_nome'); // Verifica se o nome do usuário está presente
        expect(response.body.usuario_nome).toBe('Matheus'); // Verifica se o nome do usuário está correto
    });

    it('Deve atualizar um usuario', async () => {
        const response = await request(app)
            .put(`/usuarios`) // Certifique-se de que a rota PUT esteja correta
            .send({
                usuario_id: userId, // Usa o userId armazenado no teste anterior
                usuario_nome: 'Matheus Atualizado',
                usuario_email: 'matheus_atualizado@test.com',
                usuario_cpf: '12345678901',
                usuario_celular: '999999999',
                usuario_newsletter: false
            });

        expect(response.status).toBe(200); // Sucesso ao atualizar o usuário
        expect(response.body.detail).toBe('Usuario atualizado.');

        // Verifica se o usuário foi atualizado no banco de dados
        const userInDb = await prisma.usuarios.findUnique({
            where: { usuario_id: userId }
        });
        expect(userInDb.usuario_nome).toBe('Matheus Atualizado');
        expect(userInDb.usuario_email).toBe('matheus_atualizado@test.com');
    });

    it('Deve deletar um usuario', async()=>{
        const response = await request(app)
            .delete(`/usuarios/${userId}`)
        expect(response.status).toBe(200);
        expect(response.body.detail).toBe("Usuario apagado.")
    })
});