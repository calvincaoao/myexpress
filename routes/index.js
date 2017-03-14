var express = require('express');
var router = express.Router();
var mysql = require('../db/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {

  mysql.query('select name from user',function(err,result){
       if(!err)
         {
           console.log('done');
         //res.render('customer', { data: result});
           res.render('index', { title: result[0] });

         }

         
    })
  mysql.end();
});

module.exports = router;
