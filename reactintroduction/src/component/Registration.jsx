import { useState } from "react"
import First from "./First"
function Registration(){
    const disclaimer="must be included username and password"
    const courses={
        a1:"Java",
        a2:"Python",
        a3:"Javascript",
        a4:"C#"
    }
    const[inputs,setinput]=useState("No Outputs")
    const[outputs,setoutput]=useState("");
    const[language,setlanguage]=useState("");
    const[college,setcollege]=useState("");
    const[name,setname]=useState("");
    const[submit,setsubmit]=useState({})
    return(
        <>
        <h2>Premkumar</h2>
         <First warning={{data:disclaimer,courses1:courses.a1,courses2:courses.a2,courses3:courses.a3,courses4:courses.a4,Department:outputs}}></First>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name"></input>
        <label>Age:</label>
        <input type="number" placeholder="Enter ypur age"></input>
         <label>username:</label>
        <input type="text" placeholder="Enter your Username"></input>
         <label>Password:</label>
        <input type="password" placeholder="Enter your password"></input>
        <div>
        <label>Department:</label>
         <input type="text" placeholder="Enter your Department" onChange={(e)=>setinput(e.target.value)}></input>
         <button onClick={()=>{setoutput(inputs)}}>Save</button>
        
         </div>
          <p>{outputs}</p>
 
         <h3>Details:</h3>
          <input type="text" placeholder="enter your language" onChange={(e)=>setlanguage(e.target.value)}></input>
          <br></br>
         <input type="text" placeholder="enter your college name"  onChange={(e)=>setcollege(e.target.value)}></input>
         <br></br>
        <input type="text" placeholder="enter your name" onChange={(e)=>setname(e.target.value)}></input>
        <button onClick={()=>(setsubmit({language,college,name}))}>Submit</button>
        <p>lanuage:{submit.language}</p>
        <p>college:{submit.college}</p>
        <p>name:{submit.name}</p>



       
        </>
    )
}
export default Registration;