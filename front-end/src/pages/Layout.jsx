import React from 'react'
import { Link} from 'react-router-dom'
import '../App.css'
export default function Layout() {
  return (
    <>
    <h1>E-Learning</h1>
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
