import React, { useEffect, useState } from 'react'
import axios  from '../axios';
import { Link, useNavigate, useParams } from 'react-router-dom';

export default function profileDetail() {
  const [regDetail,setRegDetail] = useState([])
  const {id} = useParams()
 const navigate = useNavigate()
   
     const getData = async () => {
      try{
      const result =   await axios.get(`/register/${id}`)
         setRegDetail(result.data)
          console.log(result.data);
      }catch(error){
        console.error('error',error); 
      }
     }
     
 useEffect(() => {
  getData()
  },[])


  // const getRecipe=async()=>{
  //   await axios.get(`http://localhost:4500/register/${id}`)
  //   .then(res=>setRegDetail(res.data))
  // }
 
  return (
    <div>
      <h1><Link to={'/'}> Home</Link></h1>
   <table className="table">
    <thead>
      <tr>
        <th>List</th>
        <th>Details</th>
      </tr>
    </thead>

    <tbody>
          <tr>
          <td>Name</td>
          <td>{regDetail.name}</td>
        </tr>
        <tr>
          <td>Email</td>
          <td>{regDetail.email}</td>
        </tr>
        <tr>
          <td>Mobile Number</td>
          <td>{regDetail.number}</td>
        </tr>
        <tr>
          <td>Date Of Birth</td>
          <td>{regDetail.dob}</td>
        </tr>
        <tr>
          <td>Gender</td>
          <td>{regDetail.gender}</td>
        </tr>
        <tr>
          <td>Address</td>
          <td>{regDetail.address}</td>
        </tr>
        <tr>
          <td>Profile</td>
          <td><img src={`${import.meta.env.VITE_REACT_APP_API}/images/${regDetail.profile}`} width="100" alt="" /></td>
        </tr>
    </tbody>
  </table>
    </div>
  )
}
