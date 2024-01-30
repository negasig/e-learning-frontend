import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
export default function Courses() {
  return (
    <>
    <h1>E-Learning</h1>
        
    <div>Courses</div>

    <div className='ng'>
    
    <Link to='/dashboard'>Dashboard</Link>
    <Link to='/student'>Students</Link>
    <Link to='/course'>Courses</Link>
    <Link to='/department'>Departments</Link>
    <Link to='/academic'>Academic year</Link>
    </div>
    
        <div className='courses'>
        <Link to='/Maths'>Maths</Link><br/>
        <Link to='/Maths'>English</Link><br/>
        <Link to='/Maths'>Java</Link><br />
        <Link to='/Maths'>C#</Link>
        </div>
    </>
  
  )
}
