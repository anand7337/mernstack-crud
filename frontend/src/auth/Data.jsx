import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Data() {
    let token = localStorage.getItem('token')
    let user=JSON.parse(localStorage.getItem("user"))
    const navigate = useNavigate()

    const checkLogin = () => {
        if(token){
            localStorage.removeItem('token')
            localStorage.removeItem('user')
            navigate('/login')
        }else{
            navigate('/login')
        }
    }
  return (
    <div>

        <a onClick={checkLogin}>Logout</a>
      <h1>data</h1>
    </div>
  )
}
