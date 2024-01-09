
import './App.css';
import {Link, Outlet} from 'react-router-dom'


function App() {
  return (
   <>
      <nav>
        <ul>
          <li>
            <Link to="/">Dashboard</Link>
          </li>
          <li>
            <Link to="/student">Students</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to="/Depsrtment">Depsrtment</Link>
          </li>
          <li>
            <Link to="/academicyear">Academic year</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  
  
  );
}

export default App;
