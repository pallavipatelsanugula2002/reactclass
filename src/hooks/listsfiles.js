import { useState } from "react";

const NewList=(()=>{

const init=["apple","banana"];
const[value,setList]=useState(init);
const handler=(()=>{
    let newfruit=["mango","milk"];
    setList([...value,...newfruit])
})
return(
<>
<button onClick={handler}>click me</button>
<ol>
   {value.map((val,index)=>{
       return <li>{val}</li>
    })}
</ol>
</>
)
})
export default NewList;