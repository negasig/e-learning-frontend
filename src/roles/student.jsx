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