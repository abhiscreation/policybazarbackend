const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
 fullname:{
     type:String
 },

 email:{
    type:String
},

contact:{
    type:Number
},

password:{
    type:String
},

address:{
    type:String
},

totalmembers:{
    type:String
},
});
module.exports = mongoose.model("User",UserSchema)