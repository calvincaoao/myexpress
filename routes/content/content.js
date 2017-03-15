var express = require('express');
var router = express.Router();
//ar mysql = require('../../db/db.js');

var mysql = require('mysql');
var dbsetting = require('../../config/dbsetting');

var connection = mysql.createConnection({
   /*
    host: 'localhost',
    user: 'caoc',
    database: 'customer',
    password: '1234'
    */

    host: dbsetting.host,
    user: dbsetting.username,
    database: dbsetting.database,
    password: dbsetting.password
});

connection.connect(function(err){
    if(err){
        console.log('error when connect to db:',err);
    }
    else{
        console.log('connected to db:',connection.database);
    }

});

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.render('content/content', { title: 'test' });
   //res.send('respond with a resource');

   connection.query('select * from user',function(err, result){
          if(!err){
              /*
              console.log(result);
              var user = JSON.stringify(result);
              console.log(user);
              var usernew = JSON.parse(user);
              console.log(usernew);
              */
              res.render('content/content', { title: result[0].name });
          }
          else{
              console.log(err.stack);
          }
   });
   connection.end();
   
});

module.exports = router;
