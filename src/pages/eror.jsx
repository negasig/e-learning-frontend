import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom';
import Login from './Login';

export default function Eror(prop) {
    const[stay, setStay]=useState(true)
    const nav=useNavigate();
    const logout=()=>{
        localStorage.clear();
        nav('/login')
        setStay(false);
    }
 
   return stay?<div style={{color:'red'}}>{prop.dt} please try again <button onClick={logout}>login again</button></div>
  :<Login />
}
