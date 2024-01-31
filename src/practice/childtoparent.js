import { Component } from "react";
import Childrentype from "./childrenprop";

class Counter extends Component{
    constructor(){
        super()
        this.state={
            counter:0
        }
    }
        handles=((data)=>{
            this.setState({
            counter:this.state.counter+data
        });
        })
    
    render(){
        return(
            <>
            <h3>{this.state.counter}</h3>
            <Childrentype one={this.handles}/>
            </>
        )
    }
}
export default Counter;
