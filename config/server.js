var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var expressValidator = require('express-validator');

var app = express();

app.set('view engine', 'ejs');
app.set('views', './app/views');

app.use(bodyParser.urlencoded({extended : true}));
app.use(expressValidator());

consign()
    .include('app/routes')
    .then('config/dbConnection.js') //Autoload do wrapper de conexão com DB.
    .then('app/models') //Autoload de todos os models em app/models.
    .then('app/controllers') //Autoload de todos os controllers em app/controllers.
    .into(app); // Autoload de todas as rotas criadas em app/routes.

module.exports = app;
