function Apicall(){
    const fetchData=()=>{
        try{
            a=10;
        fetch("https://fakestoreapi.com/productss")
    .then(response=>(response.json()))
    .then(response=>console.log(response))
    .catch((err)=>console.log("error"))
           console.log(b);
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