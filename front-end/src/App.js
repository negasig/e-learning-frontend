import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Academicyear from './pages/Academicyear';
import Dashboard from './pages/Dashboard';
import Courses from './pages/courses';
import Department from './pages/department';
import Student from './pages/student';
import Layout from './pages/Layout';



function App() {
  return (
<BrowserRouter>
    <Routes>
      <Route index element={<Layout />}/>
      <Route path="/student" element={<Student />}/>
      <Route path="/department" element={<Department />}/>
      <Route path="/course" element={<Courses />}/>
      <Route path="/academic" element={<Academicyear />}/>
      <Route path="/dashboard" element={<Dashboard />}/>
    </Routes>
    
    </BrowserRouter>       
  )

  }
export default App;
