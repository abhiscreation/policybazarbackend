const mongoose = require("mongoose");
const insuranceSchema =new mongoose.Schema({

insured_person:{
    type:String,
},

insurance_type:{
    type:String,
},

total_amt:{
    type:Number,
},

summary:{
    type:String,
},

duration:[{startdate:{type:String},enddate:{type:String}}],

user:{
    type:mongoose.Schema.ObjectId,
    ref:"User",
    required:true,
},
});
module.exports = mongoose.model("insurance",insuranceSchema)