const jwt =require('jsonwebtoken')

const verifytoken = async (req,res,next) => {
try{
   const token = req.headers['authorization']
   if(!token){
    res.status(400).json({message:"Request denied"})
   }
   const verified = jwt.verify(token,process.env.SECRET_KEY )
   console.log(verified);
   req.user = verified
   next()
}catch(error){
  return res.status(400).json({message:"Token Error"})
}
}

module.exports = verifytoken