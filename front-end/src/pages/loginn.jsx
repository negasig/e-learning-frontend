
import ih from '../images/ngim.jpeg'
import nh from '../images/Ell.png'
import { Button } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { Link} from 'react-router-dom/dist';
import '../App.css'
import Protectedroute from './protectedRoute';


export default function Loginn(props) {
  const[username, setUsername]=useState();
  const[password, setPassword]=useState();
  const[user, setUser]=useState([{}]);
 
 
  

const handleLogin=()=>{
axios.get("http://localhost:9009/Api/v1/login", {username, password}).then(result=>{
setUser(result.data)

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
    
    )

}
