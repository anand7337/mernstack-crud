import React, { useEffect, useRef, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function RegisterForm({onAdd, updateReg, onUpdate, reset}) {
  const [formstate,setFormstate] = useState({})
  const imageRef = useRef(null)
  const [show, setShow] = useState(false);



    const handleClose = () =>{
      // setFormstate({name:'', email:'', number:'', dob:'', gender:'', address:''})
      reset()
      setShow(false)
    };


  const handleShow = () => setShow(true);  

  const handeleChange = (e) => {
    // const {name,value, files} = (e.target === 'file') ? e.target.files[0] : e.target;
    // setFormstate((pre) => ({
    //   ...pre, [name] : value,
    // }))
    // console.log(e.target.files[0]);

    // const {name,value, files} = e.target;
    // setFormstate((pre) => ({ ...pre, [name] : name === 'file' ? files[0] : value,  }))
    // console.log(e.target.files[0]);

    let val =  (e.target.name === 'file') ? e.target.files[0] : e.target.value
    setFormstate(pre => ({...pre, [e.target.name]:val})) 
  }

  const formSubmit = (e) => {
   e.preventDefault()
   if(updateReg){
    const update = {...updateReg,...formstate};
    onUpdate(update);
    // setShow(false)
   }else{
    onAdd(formstate );
    // setShow(false)
   }
    setFormstate({name:'', email:'', number:'', dob:'', gender:'', address:''})
    imageRef.current.value=''
    handleClose();
  }

  useEffect(() => {
    if(updateReg){
     setFormstate({
      name:updateReg.name,
      email:updateReg.email,
      number:updateReg.number,
      dob:updateReg.dob,
      gender:updateReg.gender,
      address:updateReg.address
     })
     setShow(true)
    }else{
      setFormstate({name:'', email:'', number:'', dob:'', gender:'', address:''})
    }
  },[updateReg])
 
  return (
   <>


     <Button variant="primary" onClick={handleShow}>
        Add 
      </Button>

      <Modal show={show} onHide={handleClose} animation={false}>
        <Modal.Header closeButton>
          <Modal.Title>{updateReg ? 'Update Register' : 'Add Register'}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <form onSubmit={formSubmit}>
      <div className="container">
    {/* <h1>{updateReg ? 'Update Register' : 'Add Register'}</h1> */}
    <input type="text" placeholder="Enter Name..."   name="name" required onChange={handeleChange}  value={formstate.name}/>
    <input type="email" placeholder="Enter Email..." name="email"  required  onChange={handeleChange}   value={formstate.email}/>
    <input type="number" placeholder="Enter Mobile..." name="number"  required onChange={handeleChange}   value={formstate.number}/>
    <input type="date" placeholder="Enter Mobile..." name="dob"   onChange={handeleChange}   value={formstate.dob}/>
  <select name="gender" onChange={handeleChange}  value={formstate.gender}>
    <option value="">Select Gender</option>
    <option value="male">Male</option>
    <option value="female">Female</option>
  </select>
    <textarea name="address" placeholder='Enter Your Address' onChange={handeleChange}   value={formstate.address}></textarea>
    <input type="file" ref={imageRef} placeholder="Enter Mobile..." name="file"    onChange={handeleChange} />
    <button type="submit" className="registerbtn">{updateReg ? 'Update Register' : 'Add Register'}</button>
    <button type='button' className="registerbtn" onClick={reset}>Reset</button>
  </div>
</form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
   </>
  )
}
