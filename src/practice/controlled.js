import { useState } from "react"

const Controlled=(()=>{
    const[username,setUsername]=useState('')
    const[error,setError]=useState('')
    const[password,setPass]=useState('')
    const[errorpass,setpassError]=useState('')
    const handleuser=((event)=>{
       
        setUsername(event.target.value)
        if(event.target.value.length>10){
            setError(true)
        }
           else{
            setError(false)
           }
        
    })
    const handlepass=((event)=>{
        setPass(event.target.value)
        let message=event.target.value
       if(isValidPassword(message)==true)
        {
            setpassError(false)
        }
         else
        {
            setpassError(true)
        }
          })
    const isValidPassword = (message) => {
        // At least 8 characters, one lowercase letter, one uppercase letter, and one digit
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
       return passwordRegex.test(message);
      };
      
    const handler=((event)=>{
        event.preventDefault();
    })
    return(
        <>
        <form onSubmit={handler}>
        <label>enter name:</label>
        <input type="text" value={username} onChange={handleuser}></input><br/><br/>
        <h4 style={{color:"red"}}>{error?"must enter less than 10 characters":null}</h4>
        <label>enter pwd:</label>
        <input type="text" value={password} onChange={handlepass}></input><br/><br/>
        <h4 style={{color:"red"}}>{errorpass?"invalid password":null}</h4>
        <button type="submit">submit</button>
        </form>
       </>
    )

})
export default Controlled;