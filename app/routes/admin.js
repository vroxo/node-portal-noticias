module.exports = function(app){
    app.get('/insert', function(req, res){
        app.app.controllers.admin.form_insert(app, req, res);
    });

    app.post('/noticias/salvar', function(req, res){
        app.app.controllers.admin.salvar_noticia(app, req, res)
    });
}

