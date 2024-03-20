import axios from "axios"
import { Component } from "react"
import ImageComponent from "../image/image"
import ProductCard from "../styles/bootstarp/card"
class UsersData extends Component{

    constructor(){
        super()
        this.state={
            userCollection:[]

        }
    }

    fetchData=()=>{
    // fetch('https://dummyjson.com/users')
    // .then(res => res.json())
    // .then(response =>
    //     this.setState({
    //         userCollection: response.users
    //     }))  
axios.get("https://dummyjson.com/users")
.then(response=>{
    console.log(response)
    if(response.status===200){
        this.setState({
            userCollection:response.data.users
        })
       
    }
     else{
        alert("something went wrong")
    }
})
    
}

Sorting=()=>{
    const result=this.state.userCollection.sort((a,b)=>a.age-b.age)
this.setState({
    userCollection:result
})
}
 
    render(){
        return (
            <>
            <h1>user collection</h1>
            <button onClick={this.fetchData}>click to fetch data</button>
            <button onClick={this.Sorting}>sort</button><br></br>
            {
                this.state.userCollection.map(eachobject=>{
                    return(
                        <>
                          {/* <h3>full name:{eachobject.firstName+eachobject.lastName}</h3> 
                          <h3>age:{eachobject.age}</h3> */}
                          {/* <ImageComponent item={eachobject}/> */}
                          <ProductCard list={eachobject}/>
                          {/* <h3>_______________________________________</h3> */}
                        </>
                    )
                })
            }
            </>
        )
    }
}
export default UsersData







