var mysql = require('mysql');
var dbsetting = require('../config/dbsetting');

var connection = mysql.createConnection({
    host: dbsetting.host,
    user: dbsetting.username,
    database: dbsetting.database,
    password: dbsetting.password
});

connection.connect();
module.exports = connection;