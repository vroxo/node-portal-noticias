var mysql = require('mysql');

var mySqlConnection = function(){ // function wrapper
    console.log('DB connection: ON');
    return mysql.createConnection({
        host : 'localhost',
        user : 'root',
        password : 'root',
        database : 'portal_noticias'

    });
}

module.exports = function(){
    console.log('Create wrapper DB.');
    return mySqlConnection;
}