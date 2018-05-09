module.exports.get_noticias = function(app, req, res){
    var connection = app.config.dbConnection();
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticias(function(error, result){
        res.render("noticias/noticias", {noticias : result});    
    });
}

module.exports.get_noticia = function(app, req, res){
    var connection = app.config.dbConnection()
    var noticiasModel = new app.app.models.NoticiasDAO(connection);

    noticiasModel.getNoticia(function(error, result){
        res.render("noticias/noticia", {noticia : result});    
    });
}