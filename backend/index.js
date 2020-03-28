const express = require('express');    

const app = express();

app.get('/', (request, response) => {
    return response.json({
        evento: 'Semana OmniStavck',
        aluno: 'Judson Henrique'
    });
});

app.listen(3333);