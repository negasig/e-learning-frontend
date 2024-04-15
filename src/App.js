import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Academicyear from './pages/Academicyear';
import Dashboard from './pages/Dashboard';
import Courses from './pages/courses';
import Department from './pages/department';
import Student from './pages/student';
import Maths from './subjects/Maths';
<<<<<<< HEAD


import Register from './pages/Register';
import Home from './pages/Home';
import Protectedroute from './pages/protectedRoute';
import Login from './pages/Login';
=======
import Login from './pages/Login';
import User from './pages/user'
import Register from './pages/Register';
import Home from './pages/Home';
import Protectedroute from './pages/protectedRoute';
import Admin from './roles/admin';
>>>>>>> a6ab8acb373c7eaa6198896a2e61bfac9bf7a1f1




function App() {
  return (
<BrowserRouter>
    <Routes>
      
   <Route index element={<Home />}/>
   <Route path='/home' element={<Home />}/>
<<<<<<< HEAD
   <Route path='/login' element={<Login />}/>
=======
   <Route path='/login' element={<Login />} />
   <Route path='/user' element={<User />} />

>>>>>>> a6ab8acb373c7eaa6198896a2e61bfac9bf7a1f1
   <Route element={<Protectedroute />}>
   <Route path="/dashboard" element={<Dashboard />}/>
   <Route path='/register' element={<Register />}/>
   <Route path="/department" element={<Department />}/>
   <Route path="/course" element={<Courses />}/>
   <Route path="/academic" element={<Academicyear />}/>
   <Route path="/Maths" element={<Maths />}/>
   <Route path="/student" element={<Student />}/>
<<<<<<< HEAD

  </Route>
      
=======
   <Route path="/admin" element={<Admin />}/>
<Route/>
  </Route>
>>>>>>> a6ab8acb373c7eaa6198896a2e61bfac9bf7a1f1

    </Routes>
    
    </BrowserRouter>       
  )

  }
export default App;
