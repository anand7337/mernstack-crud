import React, { useCallback, useEffect, useState, } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import RegisterForm from '../components/RegisterForm';
import RegisetrInfo from '../components/RegisetrInfo';
import '../App.css'
import axios from '../axios'

// import {useNavigate} from 'react-router-dom'

const BASE_URL ='http://localhost:4500'

export default function Home() {

  const[register,setRegister] = useState([ ])
  const[updateReg,setUpdateReg] = useState(null)
  // const navigate = useNavigate()

  // const apiRequest = useCallback(async(method,endpoint,data) => {
  //   try{
  //     const response = await axios({
  //       method,
  //       url:`${BASE_URL}${endpoint}`,
  //       data
  //     })
  //     return response.data
  //   }catch(error){
  //     console.error(`error ${method} error ${endpoint}`);
  //   }
  // },[])

  //   const fetchdata = async () => {
  //     try{
  //        const data = await apiRequest('get','/register');
  //        setRegister(data);
  //     }catch(error){
  //        console.error('Error', error);
  //     }
  //    };
   
  const fetchdata = async () => {
    try{
      // const response = await axios.get(`${import.meta.env.VITE_REACT_APP_API}/register`);
      // const response = await axios.get(`/register`);

    const response = await axios.get(`${BASE_URL}/register`);
      setRegister(response.data)
    }catch(error){
     console.error('fetch error', error);
    }
   }

  useEffect(() => {
    fetchdata();
  },[])

const handleAdd = async (newReg) => {
  try{
  const response =   await axios.post('http://localhost:4500/register', newReg, {
    headers:{
     "Content-Type":"multipart/form-data",
    }
   });
  // setRegister((pre) => [...pre,{...response.data}])
  fetchdata()
  }catch(error){
  console.error('Add data error', error);
  }
}

// useEffect(() => {
//   console.log(updateReg);
//  },[updateReg])


const handleEdit =((id) => {
  if (!window.confirm('Are you sure you want to edit?')) {
  }else{
    const emp = register.find((x) => x._id === id);
    setUpdateReg(emp);  
  }
})

const handleUpdate = async (updateNew) => {
try{
  await axios.put(`http://localhost:4500/register/${updateNew._id}`, updateNew,{
    headers:{
     "Content-Type":"multipart/form-data",
 }
 });
    // setRegister((pre) => 
    // pre.map((upd) => 
    //   upd._id === updateNew._id ? updateNew : upd
    // ));
  setUpdateReg(null)
  fetchdata()
}catch(error){
  console.log('Update Error', error);
}
}

const handleDelete = async (id) => {
  if(!window.confirm('Are you sure you want to delete?')){
    // e.preventDefault()
  }else{
    try{
      await axios.delete(`http://localhost:4500/register/${id}`)
      setRegister((pre) => 
        pre.filter((del) => del._id !==  id)
      )
    }catch(error){
      console.error('Deleted Error', error);   
    }
  }
}

const handleReset = () => {
 setUpdateReg(null)
}

  return (
    <div className="container text-center">
   <div className='row'>
   <div className="col-md-2"></div>
   <div className="col-md-8">
      <RegisterForm updateReg={updateReg} onAdd = {handleAdd} onUpdate={handleUpdate}  reset={handleReset} />
      </div>
      <div className="col-md-2"></div>
      <div className="col-md-12">
      <RegisetrInfo register={register}  edit={handleEdit}  regDel={handleDelete}/>
      </div>
    </div>
    </div>
    
  )
}
