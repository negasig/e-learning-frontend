import React from 'react'
import '../App.css'
import im from '../images/Ell.png'
import { Link } from 'react-router-dom'
export default function Department() {
  return (
    <>
    <div>Home</div>
    <img src={im} style={{width:'12%', marginLeft:'-50%', marginTop:'-0.5%'}} alt='helo'/>
    <div className='home'>

    <Link to='/Home'>Home</Link>
    <Link to='/student'>Students</Link>
    <Link to='/course'>Courses</Link>
    <Link to='/department'>Departments</Link>
    <Link to='/academic'>Academic year</Link>
    </div>
    <div className='top'>
        <div className='midle'><Link to='/hg'>pen</Link></div>
        <div className='first'>
          <Link to='/hg'>pen</Link>
          <Link to='/hg'>pen</Link>
          <Link to='/hg'>pen</Link>
        </div>
      </div>
    
    </>
  )
}
