import React from 'react'
import { Link} from 'react-router-dom'

export default function Layout() {
  return (
   <>
   <Link to='/dashboard'>Dashboard</Link>
   <Link to='/student'>Students</Link>
   <Link to='/course'>Courses</Link>
   <Link to='/department'>Department</Link>
   <Link to='/academic'>Academic year</Link>
   </>
  )
}
