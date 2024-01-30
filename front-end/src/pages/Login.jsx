
import ih from '../images/ngim.jpeg'
import kh from '../images/elear.jpg'
import { Button } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';

export default function Login() {
  const[username, setUsername]=useState();
  const[password, setPassword]=useState();
  const handleLogin=()=>{
axios.post("http://localhost:9009/Api/v1/login", {username, password}).then(result=>{
localStorage.setItem("token", result.data);
})
  }
  return (
    <>
    <div className='logo'>
    <img src={kh} alt='aghfjj'/>
    </div>
    <img src={ih} alt='igkdbc'/>
        <div className='login'>
        <h3>E-learning</h3>
        <form onSubmit={handleLogin}>
          <input type='text' name="username" onChange={(e)=>setUsername(e.target.value)} 
          placeholder='Enter username' required/><br/>
          <input type='password' name="password" onChange={(e)=>setPassword(e.target.value)} 
          placeholder='Enter password' required/><br/>
          <Button type='submit' color='primary' variant='contained'>Login</Button>
        </form>
        </div>
    </>
  )

}
