import React from 'react'
import {useNavigate } from 'react-router-dom';
export default function Guestpage(props) {
  const navigate=useNavigate();
  const logout=()=>{
    localStorage.clear()
    
    navigate('/login')
      }
  return (
    <>
    <div style={{color:'red'}}>Welcome <b>{props.value}</b></div>
    <button onClick={logout}>Logout</button>
    </>
  )
}
