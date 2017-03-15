var mysql = require('mysql');
var dbsetting = require('../config/dbsetting');

var connection = mysql.createConnection({
    host: dbsetting.host,
    user: dbsetting.username,
    database: dbsetting.database,
    password: dbsetting.password
});

connection.connect(function(err){
    if(err){
        console.log(err);
    }
    else{
        console.log('connected...');
    }
});
module.exports = connection;