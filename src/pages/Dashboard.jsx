import React from 'react'
import '../App.css'
import im from '../images/Ell.png'
import { Link } from 'react-router-dom'
export default function Dashboard() {
  return (
    <>
    <h1>E-Learning</h1>
    <img src={im} style={{width:'12%', marginLeft:'-50%', marginTop:'-0.5%'}} alt='helo'/>
      <div>Dashboard</div>
      <div className='ng'>
    <Link to='/dashboard'>Dashboard</Link>
    <Link to='/student'>Students</Link>
    <Link to='/course'>Courses</Link>
    <Link to='/department'>Departments</Link>
    <Link to='/academic'>Academic year</Link>
    </div>
    </>
  
  )
}
