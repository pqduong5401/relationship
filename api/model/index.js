var mongoose= require('mongoose')
var Schema= mongoose.Schema
var studentModel= new Schema({
    name:String,
    age:Number
})
module.exports=mongoose.model("thongtin",studentModel)