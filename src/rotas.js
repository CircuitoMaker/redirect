const express = require('express');
const redirect = require('./redirect');
const rotas = express();


//rotas de views
rotas.get('/', redirect);



module.exports = rotas