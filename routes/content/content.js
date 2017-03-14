var express = require('express');
var router = express.Router();
var mysql = require('../../db/db.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
    //res.render('content/content', { title: 'test' });
   //res.send('respond with a resource');

   mysql.query('select * from user',function(err, result){
          if(!err){
              res.render('content/content', { title: 'test' });
          }
          else{
              console.log(err.stack);
          }
   });
   mysql.end();
   
});

module.exports = router;
