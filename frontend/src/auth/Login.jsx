import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'
import {  toast } from 'react-toastify';

export default function Login() {
    const [login,setLogin] = useState({})
    const naviagete = useNavigate()
     const[error,setError] = useState("")

     setTimeout(() => {
        setError(" ")
     }, 10000);

    const onHandleChange = (e) => {
        let val = e.target.value
        setLogin(pre => ({...pre, [e.target.name]:val}))
    }

    const onHandleSubmit = async (e) => {
        try{
            e.preventDefault()
            console.log(login);
            await axios.post('http://localhost:4500/signUp', login)
            naviagete('/signup')
            toast.success('Resistration successfully!')
        }catch(error){
    const errorMessage = error.response?.data?.error;
    toast.error(errorMessage);
       setError(error.response?.data?.error);
        }

        // e.preventDefault()
        // console.log(login);
        // await axios.post('http://localhost:4500/signUp', login)
        // .then(() => naviagete('/signup'))
        // .catch(data=>setError(data.response?.data?.error))
        // toast.success('Resistration successfully!' , login)
        // toast.error(error)
      }
    
  return (
   <>
   <div className="row container">
    <div className="col-md-3"></div>
    <div className="col-md-8">
    <form onSubmit={onHandleSubmit}>
  <div className="form-group">
    <input type="text" className="form-control" required name='name' placeholder="Enter name" onChange={onHandleChange} />
  </div>
  <div className="form-group">
    <input type="email" className="form-control" name='email' placeholder="Enter email"  onChange={onHandleChange}/>
  </div>
  <div className="form-group">
    <input type="text" className="form-control" name='password' placeholder="Enter password" onChange={onHandleChange}/>
  </div>
  <div className="form-group">
    <input type="number" className="form-control" name='mobile' placeholder="Enter mobile number" onChange={onHandleChange}/>
  </div>
  
  <button type="submit" className="btn btn-primary w-100">Submit</button>
 
</form>
<br />
<Link to={'/signup'}><button type="submit" className="btn btn-dark w-100">Login</button></Link>
   <br />
   {(error) && <h4 className='error' style={{color:"red"}}>{error}</h4> }

    </div>
    <div className="col-md-3"></div>
   </div>
  
   </>
  )
}
