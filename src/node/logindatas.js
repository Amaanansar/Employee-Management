const mongoose = require('mongoose')
let logindatas = mongoose.Schema({
    id:mongoose.Schema.Types.ObjectId,
    email:String,
    pass:String,
})
module.exports = mongoose.model("logindatas",logindatas)