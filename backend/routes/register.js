const express = require('express')
const { getProfiles,getProfile,addProfile,editProfile,deleteProfile,upload } = require('../controller/register')
const router = express.Router()
const verifytoken = require('../middleware/auth')

// router.route('/register').get(getProfile)
router.get('/register', getProfiles )   // get profiles
router.get('/register/:id', getProfile)
router.post('/register' , upload.single('file'), addProfile)
router.put('/register/:id',upload.single('file'), editProfile)
router.delete('/register/:id', deleteProfile)

module.exports= router