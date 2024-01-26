
import React from 'react'
import ih from '../images/OIP.jpg'
import kh from '../images/e-learning.jpg'
import { Button } from '@mui/material';


export default function Login() {
  localStorage.setItem("name", "negasi");
  console.log(localStorage.getItem("name"));
  return (
    <>
    <div className='logo'>
    <img src={kh} alt='aghfjj'/>
    </div>
      
      <div className='login'>
        <h3>E-learning</h3>
        <img src={ih} alt='igkdbc'/>
        <div className='login'>
        <form>
          <input type='text' name="username" placeholder='Enter username' required/><br/>
          <input type='password' name="password" placeholder='Enter password' required/><br/>
          <Button type='submit' variant='contained'>Login</Button>
        </form>
        </div>

      </div>
    </>
  )

}
