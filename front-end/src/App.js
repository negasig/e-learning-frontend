
import './App.css';
import {Link} from 'react-router-dom'


function App() {
  return (
   <>

            <Link to="/">Dashboard</Link>

            <Link to={"/student"}>Students</Link>
       
            <Link to={"/courses"}>Courses</Link>
  
            <Link to={"/Depsrtment"}>Depsrtment</Link>
    
            <Link to={"/academicyear"}>Academic year</Link>

  
  
  </>
  );

  }
export default App;
