const jwt = require("jsonwebtoken");
const { executarSQL } = require("../database");
require('dotenv').config()


async function verificarToken(req, res, next) {
    const permiteVerificar = process.env.AUTENTICACAO
    if(parseInt(permiteVerificar)) {
        try {
            const response = await executarSQL(`SELECT *
                                                FROM usuarios
                                                WHERE usuario_email = '${req.headers.usuario_email}';`)

            if (response.length === 0) {
                return res.status(401).json({
                    status: 401,
                    detail: "Usuário não encontrado.",
                    severity: "warn"
                })
            }

            const usuario = response[0]
            const decoded = jwt.verify(req.headers.authorization.split(' ')[1], process.env.SECRET)

            if (decoded.data === usuario.usuario_id) {
                next()
            } else {
                return res.status(401).json({
                    status: 401,
                    detail: "Token não corresponde ao usuário.",
                    severity: "warn"
                })
            }
        } catch (error) {
            return res.status(401).json({
                status: 401,
                detail: "Token inválido.",
                severity: "error"
            })
        }
    }
    next()
}


module.exports = {
    verificarToken
}