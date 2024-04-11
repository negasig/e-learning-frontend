import React from 'react'
import '../App.css'
import im from '../images/Ell.png'
import { Link } from 'react-router-dom'
export default function Courses() {
  return (
    <>
    <br/>
    <img src={im} style={{width:'12%', marginLeft:'-50%', marginTop:'-0.5%'}} alt='helo'/>
    <div className='home'>

    <Link to='/Home'>Home</Link>
    <Link to='/student'>Students</Link>

  <div className='ab'>
  <Link to='/Maths'>Courses</Link>
  </div>

      
</div>
    <Link to='/department'>Departments</Link>
    <Link to='/academic'>Academic year</Link>

    </>
  
  )
}
