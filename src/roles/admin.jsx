<<<<<<< HEAD

import React from 'react'




export default function Admin(props) {
  const logout=()=>{
 
localStorage.clear();
  }
  return (
    <>
    <div>Welcome {props.value}</div>
    <button onClick={logout}>Logout</button>
    </>
    
    
  )
=======
import {Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import Login from '../pages/Login';

import Abc from '../pages/abc';


export default function Admin(props) {
  const[isloged, setIsloge]=useState(true);
const navigate=useNavigate();
const logout=()=>{
  setIsloge(false);
  localStorage.clear();
  navigate('/login');
  }

    
if(!isloged){
  return <Login />
} else{
  return(
    <>
    <div className='home'>

<Link to='/Home'>Home</Link>
<Link to='/student'>Students</Link>
<Link to='/course'>Courses</Link>
<Link to='/department'>Departments</Link>
<Link to='/academic'>Academic year</Link>
<button onClick={logout} style={{marginLeft:'10%', backgroundColor:'#808080', color:'white', borderRadius:'10px'}}>Logout</button>
</div>
    <div className='admin'>
    <div>Welcome <b>{props.value}</b></div>
    </div>
    <Abc />
    </>
  ) 
}
 
>>>>>>> a6ab8acb373c7eaa6198896a2e61bfac9bf7a1f1
}
