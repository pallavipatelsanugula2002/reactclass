import { Component } from "react";

class Updatemount extends Component{
    constructor(){
        super()
        {
            this.state={
                counter:0,
                color:"green",
                single:{}
            }
        }
    }
    handle=(()=>{
        this.setState({counter:this.state.counter+1})
    })

    static getDerivedStateFromProps(prop){
       
          return({color:prop.favcolor})
    }
    getSnapshotBeforeUpdate(props,state){
        console.log(state);
        return null;
    }
    componentDidUpdate(){
        document.title= `count ${this.state.counter}`;
        fetch(`https://jsonplaceholder.typicode.com/posts/${this.state.counter}`)
        .then(response => response.json())
        .then((response) => {
            // console.log(response);
            this.setState({single:response})
        });
    }
    
    componentDidMount(){
        document.title= `count ${this.state.counter}`
    }
    render(){
        console.log("render");
        return(
        <>
        <h1 style={{color:this.state.color}}>updated content</h1>
        {this.state.counter}
        <button onClick={this.handle}>Increment</button>
        <h2>{this.state.single?.title}</h2>
        
        </>)
    }
}
export default Updatemount;