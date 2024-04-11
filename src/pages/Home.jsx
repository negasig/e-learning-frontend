import React from 'react'
<<<<<<< HEAD
import '../App.css'
import im from '../images/Ell.png'
import { Link } from 'react-router-dom'
export default function Courses() {
  return (
    <>
<<<<<<<< HEAD:src/pages/Home.jsx
    
    <img src={im} style={{width:'12%', marginLeft:'-50%', marginTop:'-1%'}} alt='helo'/>
========
    <br/>
    <img src={im} style={{width:'12%', marginLeft:'-50%', marginTop:'-0.5%'}} alt='helo'/>
>>>>>>>> a6ab8acb373c7eaa6198896a2e61bfac9bf7a1f1:src/pages/courses.jsx
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
  
=======
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

>>>>>>> a6ab8acb373c7eaa6198896a2e61bfac9bf7a1f1
  )
}
