const mongoose = require('mongoose')

const regSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    number:{
        type:String,
    },
    dob:{
        type:String,
    },
    gender:{
        type:String,
    },
    address:{
        type:String,
    },
    profile:{
        type:String,
    }
})

module.exports = mongoose.model('Registers',regSchema)