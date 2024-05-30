import {Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react'
import Login from '../pages/Login';
import User from '../pages/users';
import im from '../images/Ell.png'

export default function Admin(props) {
  const[isloged, setIsloge]=useState(true);
const navigate=useNavigate();
const logout=()=>{
  localStorage.clear();
  setIsloge(false);
  navigate('/login');
  }

    
if(!isloged){
  return <Login />
} else{
  return(
   
    <>
   
    <div className='home'>
<Link to='/'>Students</Link>
<Link to='/department'>Departments</Link>
<Link to='/academic'>Academic year</Link>
<img src={im} style={{width:'8%', marginTop:'0%'}} alt='helo'/>
<button onClick={logout} style={{marginLeft:'10%', backgroundColor:'#808080', color:'white', borderRadius:'10px'}}>Logout</button>
</div>
    <div className='admin'>
    <div style={{color:'red'}}>Welcome <b>{props.value}</b></div>
    </div>
  <User />
    </>
  ) 
}
 
}
