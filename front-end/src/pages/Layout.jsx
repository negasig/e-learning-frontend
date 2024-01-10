import React from 'react'
import { Link} from 'react-router-dom'

export default function Layout() {
  return (
   <>
   <Link to='/'>Dashboard</Link>
   <Link to='/students'>Students</Link>
   <Link to='/courses'>Courses</Link>
   <Link to='/departments'>Department</Link>
   <Link to='/academic'>Academic year</Link>
   </>
  )
}
