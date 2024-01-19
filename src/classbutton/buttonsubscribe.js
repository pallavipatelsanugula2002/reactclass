import { Component } from "react";
class Buttoncomponent1 extends Component{
    state={
        text:"subscribe",
        subscribedstate:false,
        text2:"yay subscribed",
        color: false

    }
    handle=()=>{
        this.setState(
            {
           
            subscribedstate:!this.state.subscribedstate
            },
            ()=>{
                console.log(this.state.subscribedstate);
            }
        )
    }
    handler=()=>{
        this.setState(
            {
           
            color:!this.state.color
            },
            ()=>{
                console.log(this.state.color);
            }
        )
    }
    
    
    render(){
        const obj1={
            color:"black"
    
        }
        const obj2={
            backgroundColor:"white"
        }
        return(
            <>
            <button onClick={this.handle}>{this.state.subscribedstate?this.state.text:this.state.text2}</button>
            {
                this.state.subscribedstate?
                <>
                <h2>sorry!!!you need to subscribe to explore the content</h2>
                <>
                <p></p>
                 </>
                </>
               
               :
               <>
               <h2 style={{backgroundColor:"red"}}>thanks for subscribing here is the content below</h2> <br></br>
               <a href="https://react.dev/">click to view content</a>
              
               </>
                
            }
            <h1 onClick={this.handler}>{this.state.color?<><a style={{color:"red"}}>am red in color click me to change color</a></>:<a style={{color:"black"}}>am black in color click me to change color</a>}</h1>
            </>
        )
    }
}
export default Buttoncomponent1;