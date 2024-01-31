import { useRef } from "react"

const Login=(()=>{
const nameref=useRef();
const passref=useRef();

const handle=((event)=>{
    event.preventeventdefault();
if(gjk){
//validations-trim
}
else{
    //create an obj with getted values and pass it to newly fetched api function
}

})
// const formuse=((data

// ))
return(
    <>
<form onSubmit={handle}>
  <div className="mb-3 mt-3">
    <label for="email" className="form-label">Email:</label>
    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email" ref={nameref}/>
  </div>
  <div className="mb-3">
    <label for="pwd" className="form-label">Password:</label>
    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="pswd" ref={passref}/>
  </div>
  <div className="form-check mb-3">
    <label className="form-check-label">
      <input className="form-check-input" type="checkbox" name="remember"/> Remember me
    </label>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </>
)

})
export default Login;