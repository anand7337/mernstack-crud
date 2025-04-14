const express = require('express')
const router = express.Router()
const{userSignUp,userLogin,getUser} = require('../controller/user')
const verifytoken = require('../middleware/auth')

router.post('/signUp', userSignUp) 
router.post('/login', userLogin)
router.get('/user/:id',verifytoken,getUser)

module.exports = router