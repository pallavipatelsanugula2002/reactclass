// import { Component } from "react";

import { Component } from "react";
import Childprac from "./childprac";

// import { Component } from "react";

// class Myclass extends Component{
//     state={
//         name:"pal",
//         count:0
//     }
//      handler=(()=>{
//         this.setState({count:this.state.count+1})
//     })
//     render(){
//          return(
//             <>
//             <h1>count:{this.state.count}</h1>
//             <button onClick={this.handler}>click me</button>
//             </>
//          )
//     }
// }
// export default Myclass;
/////////////////////////////////////////////////////////////
// const Fetchdata =(()=>{
//     // API request using promises
//     fetch('https://api.example.com/data')
//       .then(response => {
//         // Check if the response is successful
//         return response.json();
//       })
//       .then(data => {
//         // Process data
//         console.log('Data:', data);
//       })
//       .catch(error => {
//         // Handle errors
//         console.error('Error fetching data:', error.message);
//       })
//       .finally(() => {
//         // Cleanup actions, e.g., hide loading spinner
//         console.log('API request completed.');
//       });
//       return null;
//   }
// )
// export default Fetchdata;
////////////////////////////////////////////////////////////////
// class Inline extends Component{
//     render(){
//         return(
//             <h2 className="two">hello</h2>
//         )
//     }
// }
// export default Inline;
////////////////////////////////////////////////////////////////////////
// class Propsclass extends Component{
//     state={
//      name:"pallavi",
//      age:"20"
//     }
//     render(){
        
        
//         return(
//             <Childprac one={this.state.name} two={this.state.age}></Childprac>
//    )
//     }
// }
// export default Propsclass;
import ChildfunProps from "./childfunprops";
const Propsparent = () => {
    const data = [
      { name: "pallavi", age: 20 },
      { name: "pal", age: 21 },
      { name: "priya", age: 22 },
    ];
  
    return <ChildfunProps data={data} />;
  };
  
  export default Propsparent;