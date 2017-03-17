var express = require('express');
var router = express.Router();
var connection = require('../db/db.js');


/* GET users listing. */
router.get('/', function(req, res, next) {

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
