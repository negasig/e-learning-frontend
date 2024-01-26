import React from 'react'
import { Outlet } from 'react-router-dom';
import Login from './Login';
export default function Protectedroute() {
    var islogedIn=false;
  return islogedIn ? <Outlet />:<Login />
  
}