import React from 'react'
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Academicyear from './pages/Academicyear';
import Dashboard from './pages/Dashboard';

import Department from './pages/department';
import Student from './pages/student';
import Maths from './subjects/Maths';


import Register from './pages/Register';
import Home from './pages/Home';
import Protectedroute from './pages/protectedRoute';
import Login from './pages/Login';
import Java from './subjects/java'
import Javascript from './subjects/javascript';
import Admin from './roles/admin';
import Allcours from './subjects/allcours';
import Logone from './pages/log1';
import Secure from './pages/secure';




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
   <Route path="/academic" element={<Academicyear />}/>
   <Route path="/Maths" element={<Maths />}/>
   <Route path="/student" element={<Student />}/>
   <Route path="/java" element={<Java />} />
   <Route path="/javascript" element={<Javascript />} />
   <Route path='/admin' element={<Admin />} />
   <Route path='allc' element={<Allcours />} />
  </Route>
  <Route path='/logone' element={<Logone />}/>
  <Route path='/secure' element={<Secure />}/>

    </Routes>
    
    </BrowserRouter>       
  )

  }
export default App;
