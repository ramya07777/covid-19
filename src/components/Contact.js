
import React, { useState } from 'react';
import "./Contact.css";
import { addContact } from '../Redux toolkit/Slice';
import { useDispatch } from 'react-redux';
import {useNavigate} from "react-router-dom";
//import { useSelector } from 'react-redux';


function Contact() {

  
 // const user = useSelector((state) => state.Contact.user);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [status, setStatus] = useState('active'); // Initialize with 'active'
    const [name, setName] = useState('');
  const [lname, setLname] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addContact({ name, lname, status }));
    setName('');
    setLname('');
    setStatus('');
    navigate("/");
  };

    const handleStatusChange = (newStatus) => {
      setStatus(newStatus);
    };
    
    const handleNameChange = (e) => {
        setName(e.target.value)
    }

    const handleLameChange = (e) => {
        setLname(e.target.value)
    }

    console.log(name, lname, status);

  return (
   
    <div className='contact__info'>
   <div className='contact' >

<div className='contact__first'>
    <label className='first'>First Name</label>
    <input className='name'  value={name} onChange={handleNameChange} type='text' />
</div>

<div className='contact__first'>
    <label className='first'>Last Name</label>
    <input className='name'  value={lname} onChange={ handleLameChange } type='text' />
</div>

<div className='status'>
    <p className='contact__status'>Status:</p>

    <div>
    <div  className='radio'>
<input type='radio' checked={status === 'active'} 
 onChange={() => handleStatusChange('active')} /> <p>Active</p>
</div>
<div  className='radio'>
<input type='radio'    checked={status === 'inactive'}
 onChange={() => handleStatusChange('inactive')} />  <p>Inactive</p></div>
</div>
</div>

<button onClick={handleSubmit} className='save' type='submit'>Save contact</button>

</div>

   </div>

  );
}

export default Contact;