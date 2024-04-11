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
    <div>Welcome {props.value}</div>
    <button onClick={logout}>Logout</button>
    </>
  )
}
