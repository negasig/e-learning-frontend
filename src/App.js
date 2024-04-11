import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Academicyear from './pages/Academicyear';
import Dashboard from './pages/Dashboard';
import Courses from './pages/courses';
import Department from './pages/department';
import Student from './pages/student';
import Maths from './subjects/Maths';


import Register from './pages/Register';
import Home from './pages/Home';
import Protectedroute from './pages/protectedRoute';
import Login from './pages/Login';




function App() {
  return (
<BrowserRouter>
    <Routes>
      
   <Route index element={<Home />}/>
   <Route path='/home' element={<Home />}/>
   <Route path='/login' element={<Login />}/>
   <Route element={<Protectedroute />}>
 
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
