import React, { useState } from 'react'
import { data, Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'react-toastify'

export default function SignUp() {
    const[email,setEmail]= useState("")
    const[password,setPassword] = useState("")
    const[error,setError] = useState("")
    const naviagete = useNavigate()
    
    setTimeout(() => {
        setError(""); 
      }, 10000);
    const handleOnSubmit = async (e) => {

        try{
            e.preventDefault()
            await axios.post(`http://localhost:4500/login`, {email,password})
            .then((res) => {
            localStorage.setItem("token",res.data.token)
            localStorage.setItem("user",JSON.stringify(res.data.user))
            naviagete('/')
            toast.success("successfully login")
            })
        }catch(error){
            const loginError = error.response?.data?.error
            toast.error(loginError)
           setError(error.response?.data?.error)
        }     
    }
  return (
    <div className="row container">
    <div className="col-md-3"></div>
    <div className="col-md-8">
    <form onSubmit={handleOnSubmit}>
  <div className="form-group">
    <input type="email" className="form-control" name='email' onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
  </div>
  <div className="form-group">
    <input type="text" className="form-control" name='password' onChange={(e) => setPassword(e.target.value)} placeholder="Enter password"  />
  </div>
  <button type="submit" className="btn btn-primary w-100">Submit</button>
</form>
<br />
<Link to={'/login'}><button type="submit" className="btn btn-dark w-100">Signup</button></Link>
<br />
{(error) && <h4 className='error' style={{color:"red"}}>{error}</h4> }
    </div>
    <div className="col-md-3"></div>
   </div>
  
  )
}
