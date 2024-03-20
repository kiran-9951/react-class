import { Component } from "react";



class UpdatePhase extends Component{
state={
    counter:0
}

Increment=()=>{
    console.log("increment")
    this.setState({
        counter:this.state.counter+1
    })
    
}

componentDidMount(){
    console.log("didmount")
    document.title=`current count ${this.state.counter }`
     
}

shouldComponentUpdate(){
    console.log("shouldupdate")
    return true
}
getSnapshotBeforeUpdate(prevProps,prevState){
    console.log(prevstate,"previous state")
    return null
}



componentDidUpdate(){
    console.log("didupdate")
    document.title=`current count${this.state.counter}`
}
    render()
    {
        return(
            <>
            <h3>counter change {this.state.counter}</h3>
            <button onClick={this.Increment}>Increment</button>
            </>
        )
    }
}
export default UpdatePhase







