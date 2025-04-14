const mongoose = require('mongoose')

const userSchema = mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true
    },
   mobile:{
    type:String
   }

})


module.exports = mongoose.model('User',userSchema)