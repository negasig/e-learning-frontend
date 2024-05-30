import axios from 'axios'
import React, { useEffect, useState } from 'react'

export default function Updatestu(id) {
    const[firstname, setFirstname]=useState()
    const[lastname, setLastname]=useState()
    const[department, setDepartment]=useState()
    const[grade, setGrade]=useState()
    const[age, setAge]=useState()
    const[student,setStudents]=useState([]);
    useEffect(()=>{
        getStudents();
    })
    const getStudents=()=> {
        axios.get("http://localhost:9009/Api/v1/students").then(dt => {
          setStudents(dt.data);
        })
      }
      const updattt=()=>{
    axios.put(`http://localhost:9009/Api/v1/updateStud/${id}`, firstname,lastname,department,grade,age)
      }
    return (
        <>
       
        <form onSubmit={updattt}>
                <input type='text' name='fname'  onChange={(e)=>setFirstname(e.target.value)}/>
                <input type='text' name='lname'  onChange={(e)=>setLastname(e.target.value)}/>
                <input type='text' name='dname'  onChange={(e)=>setDepartment(e.target.value)}/>
                <input type='number' name='grade'  onChange={(e)=>setGrade(e.target.value)}/>
                <input type='number' name='age'  onChange={(e)=>setAge(e.target.value)}/>
                <button>Update</button>
        </form>

        </>

    )
}
