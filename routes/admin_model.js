const mongoose = require("mongoose");
const AdminSchema =new mongoose.Schema({
 email:{
     type:String,
     required:[true,"please enter an email address"]
 }  ,
password:{
    type:String,
    required:[true,"please enter an password"]
}  ,
});
module.exports = mongoose.model("admin",AdminSchema)