const { executarSQL } = require("../database")
const table = 'avaliacoes';


async function listarTodos(){
    try {
        
        return await executarSQL(`SELECT * FROM ${table};`);

    } catch (error) {
        return {
            mensagem: error.message
        }
    }
}

async function listarUm(id){
    try {
        
        return await executarSQL(`SELECT * FROM ${table} WHERE avaliacao_id = ${id};`);

    } catch (error) {
        return {
            mensagem: error.message
        }
    }
}

async function criar(dados){
    try {
        if(dados.avaliacao_opiniao == "" || !dados.avaliacao_opiniao){
            throw new Error("A opinião é obrigatória");
        }

        const result = await executarSQL(`INSERT INTO ${table} (avaliacao_opiniao, avaliacao_nota, usuario_id) VALUES ('${dados.avaliacao_opiniao}', ${dados.avaliacao_nota}, ${dados.usuario_id});`);
        if(result.affectedRows > 0){
            return {
                mensagem: "Sua avaliação foi recebida!"
            }
        }else{
            return {
                mensagem: `Aconteceu algo inesperado, contate o suporte!`
            }
        }
    } catch (error) {
        return {
            mensagem: error.message
        }
    }
}

async function deletar(id){
    try {
        
        return await executarSQL(`DELETE * FROM ${table} WHERE avaliacao_id = ${id};`);

    } catch (error) {
        return {
            mensagem: error.message
        }
    }
}

module.exports = {
    listarTodos,
    listarUm,
    criar,
    deletar
}