const mongoose = require("mongoose");
const planSchema =new mongoose.Schema({

_id:{
    type:Number,
},

plan_name:{
    type:String,
},

premium_amt:{
    type:Number,
},

totalpersons:{
    type:Number,
},

plan_duration:{
    type:String,
},

conditions:{
    type:String,
},

});
module.exports = mongoose.model("plan",planSchema)