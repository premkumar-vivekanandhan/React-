
function First({warning,children}){
    return(
        <>
        {children}
       
        <h4>Topics</h4>
        <p>Must Required:{warning.data}</p>
        <p>Subjects</p>
        <ol>
            <li>{warning.courses1}</li>
            <li>{warning.courses2}</li>
            <li>{warning.courses3}</li>
            <li>{warning.courses4}</li>
        </ol>
        <p>Department:{warning.Department}</p>
        
        </>
    )
}
export default First; 