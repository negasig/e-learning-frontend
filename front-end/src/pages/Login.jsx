import React from 'react'
import imgb from '../images/imgfo.jpg'
import Button from '@mui/material/Button';

export default function Login() {
  return (
    <>
    <h1>E-Learning</h1>
    <div className='login'>
    <form>
    <h3>login</h3>
    <Button variant='contained'>register</Button>
 </form>
    </div>
 
 <img src={imgb} alt='jffjf'/>
     </>
  )
}
