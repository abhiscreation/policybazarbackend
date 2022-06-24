var express = require('express');
var router = express.Router();
var admin = require('./admin_model');

// Insert data customer login
router.post('/insert', function(req, res) {
    console.log(req.body)
    const Admin = new admin(req.body);
    Admin.save(err =>{
        if(err){
            res.send(err)
        }else{
            res.send({message:"Successfully Inserted"})
        }
    })
});

router.get('/login', function(req, res, next) {
    const{ email, password }= req.query
       admin.findOne({email:email},(err,user)=>{
   if(user){
   if(password === user.password){
     res.send({message:"login Successfully",user:user})
   }
       else{
           res.send({message:"password didnt match"})
       }
   }else{
       res.send({message:"incorrect username or password"})
   }
       })
     });

module.exports = router;