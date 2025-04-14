import React from 'react'
// import axios from '../axios'
// import { format } from 'date-fns'; // npm i date-fns
import { Link, useNavigate } from 'react-router-dom';

export default function RegisetrInfo({register,edit, regDel }) {
  const token = localStorage.getItem('token')
  const user = JSON.parse(localStorage.getItem('user'))
  const navigate = useNavigate()

  const logout = () => {
    if(token){
      localStorage.removeItem('token')
      localStorage.removeItem('user')
      navigate('/login')
     }else{
       navigate('/login')
     }
  }

  
  const viewData = (e) => {
   if(!window.confirm('View Details')){e.preventDefault()}
  }

  return (
    <>
    <div className="container">
      <h1 onClick={logout} style={{cursor:'pointer'}}>{`${user.name}`} : Logout</h1>
   <table className="table table-bordered">
    <thead>
      <tr>
        <th>Id</th>
        <th>Name</th>
        <th>Email</th>
        <th>Mobile Number</th>
        <th>Date of birth</th>
        <th>Gender</th>
        <th>Address</th>
        <th>Profile</th>
        <th>View</th>
        <th>Edit</th>
        <th>Delete</th>
      </tr>
     </thead>
          
     {register.map((item,index) => {
        return(
     <tbody key={index}>
          <tr>
          <td>{index + 1}</td>
          <td>{item.name}</td>
          <td>{item.email}</td>
          <td>{item.number}</td>
          <td>{item.dob}</td>
          <td>{item.gender}</td>
          <td>{item.address}</td>
          <td><img src={`${import.meta.env.VITE_REACT_APP_API}/images/${item.profile}`} alt="" width="100"/></td>
          <td><Link to={`/profile/${item._id}`} onClick={viewData}>View</Link></td>
          <td><button onClick={() => {
            edit(item._id) 
          }}>Edit</button>
         </td>
          <th><button onClick={() =>{ regDel(item._id)}}>Delete</button></th>
        </tr>
     
    </tbody>
       )
      })}
      
  </table>
</div>
    </>
  )
}
