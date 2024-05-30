
import React, { useEffect, useState } from 'react'
import '../App.css'

import axios from 'axios'



export default function User() {

  const [students, setStudents] = useState([]);
  useEffect(() => {
    getStudents();
  }, [])

  function getStudents() {
    axios.get("http://localhost:9009/Api/v1/getusers").then(dt => {
      setStudents(dt.data);
    })
  }
  const deletestudent = (id) => {
    axios.delete(`http://localhost:9009/Api/v1/delstud/${id}`)
    getStudents();
  }
  const changestatus = (id) => {
    axios.put(`http://localhost:9009/Api/v1/changeust/${id}`)
    getStudents();
  }
  return (
    <>

      <div className='listst'>
        <table>
          <thead>
            <th>Username</th>
            <th>Role</th>
            <th>Status</th>
            <th>Action</th>
          </thead>
          {
            students.map(std => {
              return <tbody>
                <tr key={std.id}>
                  <td>{std.username}</td>
                  <td>{std.role}</td>
                  <td><button style={{color:"dimgrey"}} onClick={()=>changestatus(std.id)}>change</button>{std.status}</td>
                  <td><button>update</button><button onClick={() => deletestudent(std.id)}>delete</button></td>
                </tr>
              </tbody>
            })}
        </table>
      </div>
    </>

  )

}


