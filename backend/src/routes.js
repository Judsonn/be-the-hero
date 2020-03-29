const express = require('express');

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

routes.post('/users', (request, response) => {
    const body = request.body;
    console.log(body);

    return response.json({
        evento: 'Semana OmniStavck',
        aluno: 'Judson fefefefeique'
    });
});

module.exports = routes;