const User = require('../models/user')
// const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')  


const userSignUp =async (req,res) => {
  try{
    const{name,email,password,mobile} = req.body
    if(!email || !password){
    return  res.status(400).json({error:"Email and Password field required"})
    }
    let user = await User.findOne({email})
    if(user){
       return  res.status(400).json({error:"Email already exists"})
    }
    const hashpwd = await bcrypt.hash(password,10)
    const newUser = await User.create({
      name,email,password:hashpwd,mobile
    })
    return res.status(200).json({newUser})
  }catch(error){
   res.status(400).json({message:"error"}) 
  }

}

const userLogin =async (req,res) => {
  try{
    const{email,password} = req.body
    if(!email || !password){
    // return  res.status(400).json({message:"Email and Password field required"})
    return  res.status(400).json({error:"Email and Password field required"})

    }
    let user = await User.findOne({email})
    let userPass = await bcrypt.compare(password,user.password)
    if(user && userPass){
     let token = await jwt.sign({email,id:user._id},process.env.SECRET_KEY)
     return res.status(200).json({token,user:user})
    }
  }catch(error){
    return res.status(400).json({error:"Invalid credientials"})
  }

}


const getUser = async (req,res) => {
//  return res.send(req.user.email)
  try{
    const user = await User.findById(req.params.id)
    res.json({email:user.email})
  }catch(error){
    return res.status(400).json({message:"error"})
  }
 
}

module.exports = {userSignUp,userLogin,getUser}
