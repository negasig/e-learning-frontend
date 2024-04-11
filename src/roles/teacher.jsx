import React from 'react'

export default function Teacher(props) {
  const logout=()=>{
    localStorage.clear();
  }
  return (
    <>
   <div>Welcome {props.value}</div>
    <button onClick={logout}>Logout</button>
    </>
  )
}
