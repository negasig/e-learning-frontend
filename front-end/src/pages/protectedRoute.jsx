import React from 'react'
import { Outlet } from 'react-router-dom'
import Login from './Login'


export default function Protectedroute() {
 const isLogedin=localStorage.getItem("token")
const dd=JSON.parse(isLogedin);
console.log(dd);
return isLogedin==="true" ? <Outlet />:<Login />
}