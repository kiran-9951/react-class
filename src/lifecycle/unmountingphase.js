import { Component } from "react";

class Parent extends Component{
constructor(){
    super()
    this.state={
        ischildvisible:true
    }
}

ToggleChild=()=>{
    this.setState({
        ischildvisible:!this.state.ischildvisible 
    })
}

    render(){
        return(
            <>
            <h3>im a parent</h3>
            <button onClick={this.ToggleChild}>toggle the child</button>
            {
             this.state.ischildvisible
             ?
             <Children/>
             :
             <h3>children is hidden</h3>
            }
            </>
        )
    }
}

export default Parent

class Children extends Component{
    render(){
        return(
            <>
            <h3>children is visible</h3>
            </>
        )
    }
}