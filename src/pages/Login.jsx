
import im from '../images/Ell.png'
import { Button } from '@mui/material';
import axios from 'axios';
import '../App.css'
import Protectedroute from './protectedRoute';
import {useState } from 'react';
import { Link } from 'react-router-dom';



export default function Login(props) {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();

  const handleLogin = () => {

    axios.post("http://localhost:9009/Api/v1/login", { username, password }, { 'content-type': 'text/json' }).then(result => {
      localStorage.setItem("token", result.data)
    })
  }

  return localStorage.getItem("token") ? <Protectedroute /> :

    <>
      <div className='home'>
        <img src={im} style={{ width: '8%', marginTop: '0%' }} alt='helo' />
        <Link to='/Home'>Home</Link>
        <Link to='/login' >Login</Link>
      </div>
      <div className='bg'>
        <div className='logo'>
        </div>

        <div className='login'>
          <h3>E-learning</h3>
          <div className="logerr" style={{ color: "red", fontStyle: "revert", paddingBottom: "16px" }}>{props.value}</div>
          <form onSubmit={handleLogin}>
            <input type='text' name="username" onChange={(e) => setUsername(e.target.value)}
              placeholder='Enter Username' required /><br />
            <input type='password' name="password" onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter Password' required /><br />
            <Button type='submit' color='primary' variant='contained'>Login</Button>
          </form>
        </div>
      </div>

    </>
}
