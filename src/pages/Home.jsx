import React from 'react'
import im from '../images/Ell.png'
import { Link } from 'react-router-dom'
export default function Home() {
  return (
    <>
    <img src={im} style={{width:'12%', marginLeft:'-50%', marginTop:'1%'}} alt='helo'/>
    <div className='home'>

    <Link to='/Home'>Home</Link>
    <Link to='/login' >Login</Link>
    </div>
    
    

    </>

  )
}
