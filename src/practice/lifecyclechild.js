// import { Component } from "react";

import { Component } from "react";

// class Childlife extends Component{
//     constructor(props){
//         super(props)
//         this.state={
//             count:props.one+10,
//             obj1:props.two[1],
//             three:props.one
//         }
//     }
//     handler=(()=>{
//         this.setState({
//             count:this.state.count+10,
//             three:this.state.three+10

//                  }
//         )
//     })
//     render(){
//         return(
//             <>
//             <h4>parent component:{this.state.three}</h4>
//             <h4>{this.state.count}</h4>
//             <h4>{this.state.obj1}</h4>
//             <button onClick={this.handler}>clickme</button>
//             </>
//         )
//     }

// }
// export default Childlife 
//////////////////////////////////////////////////////////////////////////////
class Childlife extends Component{
    constructor(props){
        super(props)
        this.state={
            two:props.one+10,
            product_title:""
        }
    }
    static getDerivedStateFromProps(props,state){
       return{
       ...state, two:props.one+10
    }
    }
    componentDidMount(){
        fetch('https://fakestoreapi.com/products/1')
            .then(res=>res.json())
            .then(json=>{
                this.setState({...this.state,product_title:json.title})
            })
    }
    shouldComponentUpdate(){
        return true;
    }
    render(){
        return(
            <>
            <h4>count:{this.state.two}</h4>
            <h4>product:{this.state.product_title}</h4>
            </>
        )
    }
}
export default Childlife;