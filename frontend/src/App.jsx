import React from 'react'
import {BrowserRouter as Router, Routes, Route} from  'react-router-dom'
import Home from './pages/Home'
import ProfileDetail from './pages/profileDetail'
import Login from './auth/Login'
import SignUp from './auth/SignUp'
import Data from './auth/Data'
import Producted from './auth/Producted'
import { ToastContainer } from 'react-toastify';


export default function App() {
  return (
   <Router>
    <ToastContainer theme="dark"  position="top-center"/>
    <Routes>
      <Route path='/' element={<Producted><Home /></Producted>  } />
      <Route path='/data'  element={ <Producted><Data /></Producted>  } />
      <Route path='/profile/:id' element={<ProfileDetail />} />
      <Route path='/login'  element={<Login />}/>
      <Route path='/signup' element={<SignUp />} />
     
    </Routes>
   </Router>
  )
}
