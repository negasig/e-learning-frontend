import React from 'react'
import '../App.css'
import { Link } from 'react-router-dom'
export default function Maths() {
  return (
    <>
     <h1>E-Learning</h1>
     <div>Maths</div>
     <div className='ng'>
    <Link to='/dashboard'>Dashboard</Link>
    <Link to='/student'>Students</Link>
    <Link to='/course'>Courses</Link>
    <Link to='/department'>Departments</Link>
    <Link to='/academic'>Academic year</Link>
    
    </div>
    <p>
    Linear algebra is central to almost all areas of mathematics. For instance, linear algebra is fundamental in modern presentations of geometry, including for defining basic objects such as lines, planes and rotations. Also, functional analysis, a branch of mathematical analysis, may be viewed as the application of linear algebra to function spaces.
Linear algebra is also used in most sciences and fields of engineering, because it allows modeling many natural phenomena, and computing efficiently with such models. For nonlinear systems, which cannot be modeled with linear algebra, it is often used for dealing with first-order approximations, using the fact that the differential of a multivariate function at a point is the linear map that best approximates the function near that point.
History
    </p><br/>
    <p>
    The procedure (using counting rods) for solving simultaneous linear equations now called Gaussian elimination appears in the ancient Chinese mathematical text Chapter Eight: Rectangular Arrays of The Nine Chapters on the Mathematical Art. Its use is illustrated in eighteen problems, with two to five equations.[4]

Systems of linear equations arose in Europe with the introduction in 1637 by René Descartes of coordinates in geometry. In fact, in this new geometry, now called Cartesian geometry, lines and planes are represented by linear equations, and computing their intersections amounts to solving systems of linear equations.
    </p>
    </>
    
  )
}
