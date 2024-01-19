function Apicall(){
    const fetchData=()=>{
        try{
        fetch("https://fakestoreapi.com/products")
    .then(response=>(response.json()))
    .then(response=>console.log(response))
    .catch((err)=>console.log("error"))
        }
        catch(err){
            console.log(err);
            alert("something went wrong")

        }
        finally{
            console.log("checking for errors has done and the status is here");
        }
    
   
   
}
return(
    <button onClick={fetchData}>CLick me to fetch data</button>
)
}
export default Apicall;