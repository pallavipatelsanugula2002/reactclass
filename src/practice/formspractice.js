import { useRef, useState } from "react"

const Formval=(()=>{
       
 const names=useRef();
 const  pw=useRef();
   
const[error,setError]=useState("")
 const handler=((event)=>{
    
         event.preventDefault();
         if(names.current.value.trim()==""&&pw.current.value.trim()==""){
            alert("please enter the input values")
         }
         else{
            const obj={
                username:names.current.value,
                password:pw.current.value
            }
            login(obj)
           
         }
  })
const login=((data)=>{
    fetch('https://dummyjson.com/auth/login', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(data)
})
.then(res => res.json())
.then(res=>{
    if(res.message){
        alert("invalid credentials")
        setError(res.message)
    }
    else{
        alert("success")
        setError("")
    }
});
            

})
 return(
        <>
        <form onSubmit={handler}>
        <label>enter name:</label>
        <input type="text" ref={names}></input>
        <label>enter pwd:</label>
        <input type="text" ref={pw}></input>
        <button type="submit">submit</button>
        </form>
        <h4 >
        {error?error:null}</h4>
        </>
    )
})
export default Formval;