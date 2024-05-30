import React from 'react'
import im from '../images/Ell.png'
import ip from '../images/abc.jpg'
import { Link } from 'react-router-dom'
import Protectedroute from './protectedRoute'
export default function Home() {
  if(!localStorage.getItem("token")){
    //#476CC4 
  return (
    <>
    <div className='home'>
    <img src={im} style={{width:'8%', marginTop:'0%'}} alt='helo'/>
  <Link to='/Home'>Home</Link>
  <Link to='/login' >Login</Link>
  <Link to='/Logone' >Login2</Link>
  </div>

  </>
  )
}
else{
  return <Protectedroute />
}
   
}
