<<<<<<< HEAD
import React from 'react'

export default function Student(props) {
  const logout=()=>{
    localStorage.clear();
  }
  return (
    
    <>
    <div>Welcome {props.value}</div>
    <button onClick={logout}>Logout</button>
  
    </>
  )
}
=======
import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom';
export default function Student(props) {
  const[isloged,setIsloge]=useState(true);
const navigate=useNavigate();
const logout=()=>{
  setIsloge(false);
localStorage.clear()
navigate('/login')
  }

    
if(isloged){
  return(
    <>
    <div>Welcome {props.value}</div>
    <button onClick={logout}>Logout</button>
    </>
  ) }
}
>>>>>>> a6ab8acb373c7eaa6198896a2e61bfac9bf7a1f1
