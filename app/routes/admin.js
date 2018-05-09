module.exports = function(app){
    app.get('/insert', function(req, res){
        res.render("admin/form_add_noticia", {error : {}, noticia : {}});
    });

    app.post('/noticias/salvar', function(req, res){
        var noticia = req.body;

        req.assert('titulo', 'O Título é obrigatório!').notEmpty();
        req.assert('resumo', 'O Resumo é obrigatório!').notEmpty();
        req.assert('resumo', 'O Resumo deve conter entre 10 e 100 caractéres!').len(10,100);
        req.assert('autor', 'O Nome do Autor é obrigatório!').notEmpty();
        req.assert('data_noticia', 'A Data da Notícia é obrigatória!').notEmpty();
        req.assert('noticia', 'A Notícia é obrigatória!').notEmpty()

        var errors = req.validationErrors();

        console.log(errors)
        
        if(errors){
            res.render("admin/form_add_noticia", {error : errors, noticia : noticia});
            return;
        }

        var connection = app.config.dbConnection();
        var noticiasModel = new app.app.models.NoticiasDAO(connection);

        noticiasModel.salvar(noticia, function(error, result){
            res.redirect('/noticias');
        });

    });
}

