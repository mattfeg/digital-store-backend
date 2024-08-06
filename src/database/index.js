require('dotenv').config()

const mysql = require("mysql2/promise");

async function executarSQL(query){
    const conexao = await mysql.createConnection({
        host: process.env.HOST_NAME,
        user: process.env.USER_NAME,
        password: process.env.USER_PASS,
        database: process.env.DATABASE_NAME
    });

    const [result] = await conexao.query(query);

    conexao.end();

    return result;
}

module.exports = {
    executarSQL
}