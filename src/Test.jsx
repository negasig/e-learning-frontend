


import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link} from 'react-router-dom/dist';
import Protectedroute from './pages/protectedRoute';




export default function Test() {

  const[user, setUser]=useState([]);
useEffect(()=>{
    const handleLogin=()=>{
        axios.post("http://localhost:9009/Api/v1/loginn", {username:"negu", password:"1234"}, {'content-type': 'text/json'}).then(result=>{
        setUser(result.data);
       
        })
          }
          handleLogin();
},[])


  return (
    <>
 
    <Protectedroute data={user} />
    {
    user.map(u=>{
        return <p key={u.id}>{u.role}</p>
    }
       
        )
    }
         <div className='login'>
        <h3>E-learning <Link to="/register">Register</Link></h3>
        <div className="logerr" style={{color:"red", fontStyle:"revert", paddingBottom:"16px"}}></div>
        
    
     <Link to="/test" >Test</Link>
        </div>
    </>


 
   
    )

}
