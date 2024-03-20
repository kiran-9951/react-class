import { Component, PureComponent } from "react";



class ParentComponent extends Component{
constructor(){
    super()
    this.state={
        counter:0
    }
}

Increment=()=>{
    this.setState({
        counter:this.state.counter+1
    })
}
    render(){
        console.log("parent rendering")
        return(
            <>
            <ChildComponents/>
            <h3>{this.state.counter}</h3>
            <button onClick={this.Increment}>increment</button>
            </>
        )
    }
}
export default ParentComponent


class ChildComponents extends PureComponent{
    render(){
        console.log("child rendering")
        return(
            <>
            <h3>im a child</h3>
            </>
        )
    }
}


