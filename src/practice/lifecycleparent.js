
// import React, { Component } from "react";

import { Component } from "react";
import Childlife from "./lifecyclechild";

// class Parentlife extends Component {
//   constructor() {
//     super();
//     this.state = {
//       count: 0,
//       toggle: true,
//     };
//   }

//   handle = () => {
//     this.setState ({
//       count: this.state.count + 10,
//       toggle: !this.state.toggle,
//     });
//   };

//   handler = () => {
//     // Assuming you want to reset the count to 0 and set toggle to true
//     this.setState({
//       count: 0,
//       toggle: true,
//     });

//     // Using console.log instead of document.write for better practice
//     console.log("it is currently off");
//   };

//   render() {
//     return (
//       <>
//         <h1>count: {this.state.count}</h1>
//         <button onClick={this.state.toggle ? this.handle : this.handler}>
//           Click
//         </button>
//       </>
//     );
//   }
// }

// export default Parentlife;
////////////////////////////////////////////////////////////////////////////////////////////////////////
// class Parentlife extends Component{
//     constructor(){
//         super()
//             this.state={
//                count:0,
//                obj:[1,2,3]
//             }
//         }
//         render(){
//             return(
//                 <>
                
//                 <Childlife one={this.state.count} two={this.state.obj}/>
//                 </>
//             )
//         }
//     }
//     export default Parentlife;
//////////////////////////////////////////////////////////get derived//////////////////////////////////////
class Parentlife extends Component{
    constructor(){
        super()
            this.state={
               count:0,
            }
        }
        handler=(()=>{
            this.setState({
                count:this.state.count+10
    
                     }
            )
        })
        render(){
            return(
                <>
                <h4>{this.state.count}</h4>
                <button onClick={this.handler}>clickme</button>
                <Childlife one={this.state.count}/>
                </>
            )
        }
    }
    export default Parentlife;

