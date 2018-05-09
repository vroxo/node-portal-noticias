var app = require('./config/server');
/**
 *  Rotas sem usar o consign
    var rotaHome = require('./app/routes/home')(app);
    var rotaNoticias = require('./app/routes/noticias')(app);
    var rotaAdmin = require('./app/routes/admin')(app);
 */
app.listen(3000, function(){
    console.log('Server: ON');
})