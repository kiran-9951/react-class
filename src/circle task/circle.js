import { Component } from "react";
import "./style.css"
class Circle extends Component{
constructor(){
    super()
    this.state={
        circles:[true]
    }
}
AddCircles=()=>{
let newState=[...this.state.circles,false]
this.setState({
    circles:newState
})
}


    render(){
        return(
            <>
            <h2>circle task</h2>
            <button onClick={this.AddCircles}>add circles{this.state.circles.length}</button>
          {
            this.state.circles.length>0
            ?
            this.state.circles.map(flag=>  <div className="circle" style={{backgroundColor:flag?"black":"white"}}>
                
            </div> )
            :
            <h3>no circles</h3>
          }
            </>
        )
    }
}

export default Circle


