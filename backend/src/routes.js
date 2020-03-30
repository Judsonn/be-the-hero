const express = require('express');
const crypto = require('crypto');

const routes = express.Router();

/**
 * Rota/ Recursos 
 */
/**
 * request faz a busca com os dados especificados, o response retorna esse dados, nesse caso
 * através de um json(javascript object nomenation), que é usado para troca de informações no sistema ou entre sistemas
 * 
 * Query Params: Parâmetros nomeados enviados na rota após "?" (filtros, paginação)
 * Route Params: Parâmetros utilizados para identificar recursos, rotas
 * Request Body: Corpo da request , utilizado para criar ou alterar recursos 
 */

routes.post('/ongs', (request, response) => {
    const { name, email, whatsapp, city, uf} = request.body;

    const id = crypto.randomBytes(4).toString('HEX');

    console.log(data);

    return response.json();
});

module.exports = routes;