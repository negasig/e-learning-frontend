import React from 'react'
import imgb from '../images/imgfo.jpg'
export default function Login() {
  return (
    <>
    <h1>E-Learning</h1>
 <form>
    <label for='ww'>Username</label>
    <input type='text' id='ww' name='username'/><br></br>
    <label for='kk'>Password</label>
    <input type='password' name='password' id='kk'/>
 </form>
 <img src={imgb} alt='jffjf'/>
     </>
  )
}
