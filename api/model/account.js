var mongoose= require('mongoose')
var Schema= mongoose.Schema
var acccountModel= new Schema({
    username:String,
    password:String,
    role:{
        type:String,
        enum:['admin','user'],
        default:'user'
    }
})
module.exports=mongoose.model("taikhoan",acccountModel)