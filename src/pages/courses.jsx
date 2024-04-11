import React from 'react'
import '../App.css'
import im from '../images/Ell.png'
import { Link } from 'react-router-dom'
export default function Courses() {
  return (
    <>
<<<<<<< HEAD
    <br/>
    <img src={im} style={{width:'12%', marginLeft:'-50%', marginTop:'-0.5%'}} alt='helo'/>
=======
<<<<<<<< HEAD:src/pages/Home.jsx
    
    <img src={im} style={{width:'12%', marginLeft:'-50%', marginTop:'-1%'}} alt='helo'/>
========
    <br/>
    <img src={im} style={{width:'12%', marginLeft:'-50%', marginTop:'-0.5%'}} alt='helo'/>
>>>>>>>> a6ab8acb373c7eaa6198896a2e61bfac9bf7a1f1:src/pages/courses.jsx
>>>>>>> a6ab8acb373c7eaa6198896a2e61bfac9bf7a1f1
    <div className='home'>

    <Link to='/Home'>Home</Link>
    <Link to='/student'>Students</Link>

  <div className='ab'>
  <Link to='/Maths'>Courses</Link>
<<<<<<< HEAD
    <div className='abc'>
      <div className='abcd'>
        <Link to='/Maths'>Javascript</Link><br />
        <Link to='/Maths'>English</Link><br/>
        <Link to='/Maths'>Maths</Link><br/>
        <Link to='/Maths'>Java</Link>
      </div>
    </div>
=======
>>>>>>> a6ab8acb373c7eaa6198896a2e61bfac9bf7a1f1
  </div>

      
</div>
    <Link to='/department'>Departments</Link>
    <Link to='/academic'>Academic year</Link>

    </>
  
  )
}
