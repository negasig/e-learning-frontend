
import ih from '../images/ngim.jpeg'
import nh from '../images/Ell.png'
import { Button } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { Link } from 'react-router-dom/dist';
import '../App.css'
export default function Login() {
  const[username, setUsername]=useState();
  const[password, setPassword]=useState();
  const handleLogin=()=>{
axios.post("http://localhost:9009/Api/v1/login", {username, password}).then(result=>{
localStorage.setItem("token", result.data);
console.log(localStorage.getItem("token"));

})
  }
  return (
    <div className='bg'>
 <div className='logo'>
    <img src={nh} alt='aghfjj'/>
    </div>
    <img src={ih} alt='igkdbc'/>
        <div className='login'>
        <h3>E-learning <Link to="/register">Register</Link></h3>
        <form onSubmit={handleLogin}>
          <input type='text' name="username" onChange={(e)=>setUsername(e.target.value)} 
          placeholder='Enter username' required/><br/>
          <input type='password' name="password" onChange={(e)=>setPassword(e.target.value)} 
          placeholder='Enter password' required/><br/>
          <Button type='submit' color='primary' variant='contained'>Login</Button>
        </form>
        </div>
    </div>
   
  )

}
