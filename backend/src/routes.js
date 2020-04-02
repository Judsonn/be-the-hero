const express = require('express');
const OngsController = require('./controllers/OngsController');
const IncidentController = require('./controllers/IncidentController');
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

routes.post('/ongs', OngsController.create);
routes.get('/ongs', OngsController.index); 

routes.post('/incidents', IncidentController.create);
routes.get('/incidents', IncidentController.index);
routes.delete('/incidents/:id', IncidentController.delete);

module.exports = routes;