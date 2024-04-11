
import ih from '../images/ngim.jpeg'
import nh from '../images/Ell.png'
import { Button } from '@mui/material';
import axios from 'axios';
<<<<<<< HEAD
import {useEffect, useState } from 'react';
import { Link} from 'react-router-dom/dist';
import '../App.css'
<<<<<<<< HEAD:src/pages/Login.jsx


export default function Login(props) {
  const[username, setUsername]=useState('');
  const[password, setPassword]=useState('');

 
      const handleLogin=()=>{
        
          axios.post("http://localhost:9009/Api/v1/login", {username, password}, {'content-type': 'text/json'}).then(result=>{
          
            localStorage.setItem("token", result.data)
========
import  Protectedroute from "../pages/protectedRoute";
=======
import {useState } from 'react';

import '../App.css'

import Protectedroute from './protectedRoute';

>>>>>>> a6ab8acb373c7eaa6198896a2e61bfac9bf7a1f1


export default function Login(props) {
  const[username, setUsername]=useState();
  const[password, setPassword]=useState();
<<<<<<< HEAD
  const[user, setUser]=useState("");
=======

>>>>>>> a6ab8acb373c7eaa6198896a2e61bfac9bf7a1f1

      const handleLogin=()=>{
        
          axios.post("http://localhost:9009/Api/v1/login", {username, password}, {'content-type': 'text/json'}).then(result=>{
<<<<<<< HEAD
            setUser(result.data);
          
>>>>>>>> a6ab8acb373c7eaa6198896a2e61bfac9bf7a1f1:front-end/src/pages/Login.jsx
          })
        
        }
      
        useEffect(()=>{
          handleLogin();
<<<<<<<< HEAD:src/pages/Login.jsx
        })
========
        },[user])
        
>>>>>>>> a6ab8acb373c7eaa6198896a2e61bfac9bf7a1f1:front-end/src/pages/Login.jsx
  return (
  
 <>
<<<<<<<< HEAD:src/pages/Login.jsx
 
========

>>>>>>>> a6ab8acb373c7eaa6198896a2e61bfac9bf7a1f1:front-end/src/pages/Login.jsx
 <div className='bg'>
 <div className='logo'>

    <img src={nh} alt='aghfjj'/>
    </div>
    <img src={ih} alt='igkdbc'/>
        <div className='login'>
        <h3>E-learning <Link to="/register">Register</Link></h3>
        <div className="logerr" style={{color:"red", fontStyle:"revert", paddingBottom:"16px"}}>{props.value}</div>
        <form onSubmit={handleLogin}> 
          <input type='text' name="username" onChange={(e)=>setUsername(e.target.value)} 
          placeholder='Enter Username' required/><br/>
          <input type='password' name="password" onChange={(e)=>setPassword(e.target.value)} 
          placeholder='Enter Password' required/><br/>
          <Button type='submit' color='primary' variant='contained'>Login</Button>
        </form>
        </div>
    </div>
    
 </>
    
    )
=======
          localStorage.setItem("token", result.data);
          
   
          });
          
        }
    
 
   return localStorage.getItem("token") ? <Protectedroute />:
   
    <>
    
    <div className='bg'>
    <div className='logo'>
    
       <img src={nh} alt='aghfjj'/>
       </div>
       <img src={ih} alt='igkdbc'/>
           <div className='login'>
           <h3>E-learning</h3>
           <div className="logerr" style={{color:"red", fontStyle:"revert", paddingBottom:"16px"}}>{props.value}</div>
           <form onSubmit={handleLogin}> 
             <input type='text' name="username" onChange={(e)=>setUsername(e.target.value)} 
             placeholder='Enter Username' required/><br/>
             <input type='password' name="password" onChange={(e)=>setPassword(e.target.value)} 
             placeholder='Enter Password' required/><br/>
             <Button type='submit' color='primary' variant='contained'>Login</Button>
           </form>
           </div>
       </div>
       
    </>
 
>>>>>>> a6ab8acb373c7eaa6198896a2e61bfac9bf7a1f1

}
