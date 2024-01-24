import Profilecard1 from "./profilecard"
const Bootcomponent=(()=>{
    const obj=[{
        name:"pallavi",
        class:"btech",
        interest:"studies"
    },{
        name:"priya",
        class:"mtech",
        interest:"sing"
    },
    {
        name:"pallavi",
        class:"btech",
        interest:"studies"
    }]
    return(
        
        <>
       
        
  
<div class="container mt-5">
  <div class="row">
    <div class="col-sm-4">
      
      <Profilecard1 profile={obj[0]}/>
    </div>
    <div class="col-sm-4">
      
      <Profilecard1 profile={obj[1]}/>
    </div>
    <div class="col-sm-4">
      
      <Profilecard1 profile={obj[2]}/>
    </div>
  </div>
</div>
</>
    )
})
export default Bootcomponent;