import { Component } from "react";
import axios from "axios";
import React from "react";
import DNAspinner from "../spinners/dnaspinner";


class MountingPhase extends Component{
    constructor(){
        super()
        this.state={
            users:[]
        }
    }

    componentDidMount(){
       axios.get("https://dummyjson.com/users")
       .then(response=>{
       console.log(response)
       this.setState({
       users:response.data.users
       })
       
       })
       .catch(error=>{
        console.log("error occured")
       })
    }

render(){
    return(
        <>
        {
            this.state.users.length>0
            ?this.state.users.map(eachobject=>{
                return(
                    <>
                    <h2>{eachobject.firstName}</h2> 
                     </> 
                )
            })
            :
            <>
            <DNAspinner/>
            <h3>data fetching</h3>
            </>
        }
        </>
    )
}
}
export default MountingPhase


