import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Academicyear from './pages/Academicyear';
import Dashboard from './pages/Dashboard';
import Courses from './pages/courses';
import Department from './pages/department';
import Student from './pages/student';
import Maths from './pages/Maths';
import Login from './pages/Login';
import Protectedroute from './pages/protectedRoute';
import Register from './pages/Register';
import Home from './pages/Home';



function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route index element={<Home />}/>
      <Route path='/home' element={<Home />}/>
      <Route element={<Protectedroute />}>
      <Route path='/login' element={<Login />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
      <Route path='/register' element={<Register />}/>
      <Route path="/department" element={<Department />}/>
      <Route path="/course" element={<Courses />}/>
      <Route path="/academic" element={<Academicyear />}/>
      <Route path="/Maths" element={<Maths />}/>
      <Route path="/student" element={<Student />}/>
      </Route>
    </Routes>
    
    </BrowserRouter>       
  )

  }
export default App;
