import React from 'react'
import imgh from '../images/abc.jpg'
import Marquee from 'react-fast-marquee'
import '../App.css'
export default function Mar() {
  return (
    <div className='marq'>
    
      <Marquee>
      <h1>HELLO</h1>
      <img src={imgh} style={{width:"60%", height:"80%" }}alt="Natural" />
      </Marquee>
  
    </div>
 
  )
}
