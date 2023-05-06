const mongoose = require('mongoose')
let edatas = mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    name:String,
    age:Number,
    jd:mongoose.Schema.Types.Date,
    id:{type:Number,default:0},
})
module.exports = mongoose.model("edatas",edatas)