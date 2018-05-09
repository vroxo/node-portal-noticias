function NoticiasDAO(connection){
    this._connection = connection;
}

NoticiasDAO.prototype.getNoticias = function(callback) {
    this._connection.query('SELECT * FROM noticias', callback);       
}

NoticiasDAO.prototype.getNoticia = function(callback) {
    this._connection.query('SELECT * FROM noticias where id_noticias = 2', callback);       
}

NoticiasDAO.prototype.salvar = function(noticia, callback){
    console.log(noticia)
    this._connection.query('INSERT INTO noticias SET ?', noticia, callback);
}

module.exports = function(){
    return NoticiasDAO;
}