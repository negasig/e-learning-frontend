
import React, { useState } from 'react'
import {Link, useNavigate } from 'react-router-dom';
import Login from '../pages/Login';
import Allcours from '../subjects/allcours';
import Java from '../subjects/java';
export default function Student(props) {
  const[isloged, setIsloge]=useState(true);
  const displac=()=>{
    let pp=document.getElementById('p1');
    pp.display='block';
  }
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
  <Link to='/student'>Students</Link>
  <Link to='/course'>Courses</Link>
  <Link to='/department'>Departments</Link>
  <Link to='/academic'>Academic year</Link>
  <button onClick={logout} style={{marginLeft:'10%', backgroundColor:'#808080', color:'white', borderRadius:'10px'}}>Logout</button>
  </div>
      <div className='admin'>
      <div style={{color:'red'}}>Welcome <b>{props.value}</b></div>
      </div>
      <div>
      </div>
     <Link to='java' style={{display:'none'}}>java{<Java />}</Link>
     <button onClick={displac}>java</button>
     <p id='p1' style={{display:'none'}}><Java />view course</p>
      </>
    ) 
  }
}