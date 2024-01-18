import React from 'react'



export default function Login() {
  localStorage.setItem("name", "negasi");
   console.log(localStorage.getItem("name"));
  return (
    <>
    <h1>E-Learning</h1>
    <div className='login'>
    <form>
    <h3>login</h3>
    <label>username</label>
    <input type='text' name='uname'/>
    <label>password</label>
    <input type='password' name='pass'/><br/>
    <input type='submit'/>
 </form>
    </div>
     </>
  )
  
}
