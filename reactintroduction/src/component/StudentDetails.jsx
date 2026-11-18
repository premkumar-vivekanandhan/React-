import { useState } from "react";

function StudentDetails(){
    const[inputs,setinput]=useState("No Outputs")
    const[outputs,setoutput]=useState("");
    const[name,setname]=useState("");
    const[age,setage]=useState("");
    const[username,setusername]=useState("");
    const[password,setpassword]=useState("")
    const[CollectMyDetails,setCollectMyDetails]=useState({})
    
    return(
        
        <div>
            <label>Name:</label>
        <input type="text" placeholder="enter your name" onChange={(e)=>setname(e.target.value)}></input>
        <br></br>
        <label>Age:</label>
        <input type="number" placeholder="enter your age" onChange={(e)=>setage(e.target.value)}></input>
        <br></br>
        <label>Enter Your Username:</label>
        <input type="text" placeholder="enter your username" onChange={(e)=>setusername(e.target.value)}></input>
        <br></br>
        <label>Enter Your Password:</label>
        <input type="password" placeholder="enter your password" onChange={(e)=>setpassword(e.target.value)}></input>
        <br></br>
        <br></br>
        <button onClick={()=>(setCollectMyDetails({name,age,username,password}))}>Collect My Details</button>
        <p>Name:{CollectMyDetails.name}</p>
        <p>Age:{CollectMyDetails.age}</p>
        <p>Username:{CollectMyDetails.username}</p> 
        <p>Password:{CollectMyDetails.password}</p>

</div>
    )
}
export default StudentDetails;