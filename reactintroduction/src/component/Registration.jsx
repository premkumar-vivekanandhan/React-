import First from "./First"
function Registration(){
    const disclaimer="must be included username and password"
    return(
        <>
         <First warning={disclaimer}></First>
        <label>Name:</label>
        <input type="text" placeholder="Enter your name"></input>
        <label>Age:</label>
        <input type="number" placeholder="Enter ypur age"></input>
         <label>username:</label>
        <input type="text" placeholder="Enter your Username"></input>
         <label>Password:</label>
        <input type="password" placeholder="Enter your password"></input>
       
        </>
    )
}
export default Registration;