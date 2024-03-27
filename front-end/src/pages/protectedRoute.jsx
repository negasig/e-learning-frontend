import React from 'react'
import { Outlet } from 'react-router-dom';
import Login from './Login';
export default function Protectedroute() {
    const islogedIn=localStorage.getItem("token")
    console.log(islogedIn)
  return islogedIn === 'true' ? <Outlet />:<Login />
}