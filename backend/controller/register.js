const Profile = require('../models/register')
const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const filename = Date.now() + '-' + file.originalname
    cb(null, filename)
  }
  })
const upload = multer({ storage: storage })



const getProfiles = async (req,res) => {
    const profiles =await Profile.find()
    return res.json(profiles)
}

const getProfile = async (req,res) => {
    const profile = await Profile.findById(req.params.id)
    return res.json(profile)
  }

   const addProfile = async (req,res) => {
    console.log(req.file, req.body)
    
    const {name,email,number,dob,gender,address} = req.body
    if(!name || !email || !number){
        res.json({message:'Required field is empty'})
    }
    const newProfile = {  name,email,number,dob,gender,address}
    if(req.file){
     newProfile.profile=req.file.filename;
    }
    const newprofiles = await Profile.create(newProfile)

    return res.json(newprofiles)
   }

  const editProfile = async (req,res) => {
    const {name,email,number,dob,gender,address} = req.body
    const updateReg =  await Profile.findById(req.params.id)
    try{
        if(updateReg){
            // await Profile.findByIdAndUpdate(req.params.id,req.body,{new:true})
            // res.json({name,email,number,dob,gender,address})

            let profile = req.file?.filename ? req.file?.filename:updateReg.profile
            await Profile.findByIdAndUpdate(req.params.id,{...req.body,profile},{new:true})
              res.json({name,email,number,dob,gender,address})
       }
    }catch(error){
       res.status(400).json({message:"error"})
    }
  
  }

  const deleteProfile = async (req,res) => {
    try{
    await Profile.deleteOne({_id:req.params.id})
     res.json({status:"ok"})
    }
    catch(error){
    res.status(400).json({message:"error"})
    }
  }
  


module.exports = {getProfiles,getProfile,addProfile,editProfile,deleteProfile,upload}