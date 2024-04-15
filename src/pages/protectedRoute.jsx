import React from 'react'

import Login from './Login'
import Admin from '../roles/admin'
import Guestpage from '../roles/guest'
import Teacher from '../roles/teacher'

import Student from '../roles/student'
import Eror from './eror'

export default function Protectedroute() {
 
 const isLogedin=localStorage.getItem("token")
 const err="Incorect username or password"
 if(isLogedin === "teacher"){
    return <Teacher value={isLogedin} />
}
else if(isLogedin === "admin"){
  
    return <Admin value={isLogedin} />
}
else if(isLogedin === "student"){
    return <Student value={isLogedin}/>
}
else if(isLogedin === "guest"){
    return <Guestpage value={isLogedin} />
}
else if(isLogedin === "false"){

    return <Eror dt={err}/>
    
   
    
}
else{
    return (
        <Login />
    )
}

}

