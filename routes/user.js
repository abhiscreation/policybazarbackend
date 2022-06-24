var express = require('express');
var router = express.Router();
var user = require('./user_model');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Insert data for customer login
router.post('/insert', function(req, res) {
    console.log(req.body)
    const User = new user(req.body);
    User.save(err =>{
        if(err){
            res.send(err)
        }else{
            res.send({message:"Successfully Inserted"})
        }
    })
});



module.exports = router;
