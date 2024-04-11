import React, { useEffect, useState } from 'react'
import '../App.css'
import im from '../images/Ell.png'
import axios from 'axios'
import { Link } from 'react-router-dom'
export default function Studentt() {
  const [students, setStudents]=useState([]);
  useEffect(()=>{
  getStudents();
  },[])
  
  function getStudents() {
    axios.get("http://localhost:9009/Api/v1/students").then(dt=>{
      setStudents(dt.data);
})}
return (
  <>
  <div>Home</div>
  <img src={im} style={{width:'12%', marginLeft:'-50%', marginTop:'-0.5%'}} alt='helo'/>
  <div className='home'>

  <Link to='/Home'>Home</Link>
  <Link to='/student'>Students</Link>
  <Link to='/course'>Courses</Link>
  <Link to='/department'>Departments</Link>
  <Link to='/academic'>Academic year</Link>
  </div>
        <div  className='listst'>
          <table>
            <thead>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Department</th>
              <th>Drade</th>
              <th>Age</th>
              <th>Action</th>
            </thead>
            {
      students.map(std=>{
           return <tbody>
              <tr key={std.id}>
                <td>{std.firstname}</td>
                <td>{std.lastname}</td>
                <td>{std.department}</td>
                <td>{std.grade}</td>
                <td>{std.age}</td>
                <td><button>update</button><button>delete</button></td>
              </tr>
            </tbody>
      })}
          </table>
          </div>
      
    
    
    
    </>

  )

}
