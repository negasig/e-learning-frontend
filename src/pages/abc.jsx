
import React, { useEffect, useState } from 'react'
import '../App.css'
import axios from 'axios'
import Updatestu from './updatestu';




export default function Abc() {

  const [students, setStudents] = useState([]);
  useEffect(() => {
    getStudents();
  }, [])

  function getStudents() {
    axios.get("http://localhost:9009/Api/v1/students").then(dt => {
      setStudents(dt.data);
    })
  }
 
  const deletestudent = (id) => {
    alert("are you sure to delete")
    axios.delete(`http://localhost:9009/Api/v1/delstud/${id}`)
    getStudents();
  }
  const changestatus = (id) => {
    axios.put(`http://localhost:9009/Api/v1/changest/${id}`)
    getStudents();
  }
  const updatestudd=(id)=>{
    document.getElementById("abbb").style.display="block";
    <Updatestu id ={id}/>
  }
  return (
    <>
      <div className='listst'>
        <table>
          <thead>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Department</th>
            <th>Grade</th>
            <th>Age</th>
            <th>Status</th>
            <th>Action</th>
          </thead>
          {
            students.map(std => {
              return <tbody>
                <tr key={std.id}>
                  <td>{std.firstname}</td>
                  <td>{std.lastname}</td>
                  <td>{std.department}</td>
                  <td>{std.grade}</td>
                  <td>{std.age}</td>
                  <td><button style={{color:"dimgrey"}} onClick={()=>changestatus(std.id)}>change</button>{std.status}</td>
                  <td><button onClick={updatestudd}>update</button><button onClick={() => deletestudent(std.id)}>delete</button></td>
                </tr>
              </tbody>
            })}
        </table>
      </div>
      <div id='abbb' style={{display:'none'}}>
<Updatestu />
      </div>
   
    </>

  )

}


