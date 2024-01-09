
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Academicyear from './pages/Academicyear';
import Dashboard from './pages/Dashboard';
import Courses from './pages/courses';
import Department from './pages/department';
import Student from './pages/student';

export function Layout() {
  return (
  <div className='ng-cls'>
    <BrowserRouter>
    <Routes>
      <Route index element={<Dashboard />}></Route>
      <Route path="/student" element={<Student />}/>
      <Route path="/department" element={<Department />}/>
      <Route path="/course" element={<Courses />}/>
      <Route path="/academicyear" element={<Academicyear />}/>
    </Routes>
    
    </BrowserRouter>

  </div>
  
  
  );
}

