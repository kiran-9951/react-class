import { Component } from "react"
import ImageComponent from "../image/image"
 class Counter extends Component{
constructor(){
    super()
    this.state={
        counter:0,
        issubscribe:false,
        products:[
            {
                "id": 1,
                "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
                "price": 109.95,
                "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
                "rating": {
                    "rate": 3.9,
                    "count": 120
                }
            },
            {
                "id": 2,
                "title": "Mens Casual Premium Slim Fit T-Shirts ",
                "price": 22.3,
                "description": "Slim-fitting style, contrast raglan long sleeve, three-button henley placket, light weight & soft fabric for breathable and comfortable wearing. And Solid stitched shirts with round neck made for durability and a great fit for casual fashion wear and diehard baseball fans. The Henley style round neckline includes a three-button placket.",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
                "rating": {
                    "rate": 4.1,
                    "count": 259
                }
            },
            {
                "id": 3,
                "title": "Mens Cotton Jacket",
                "price": 55.99,
                "description": "great outerwear jackets for Spring/Autumn/Winter, suitable for many occasions, such as working, hiking, camping, mountain/rock climbing, cycling, traveling or other outdoors. Good gift choice for you or your family member. A warm hearted love to Father, husband or son in this thanksgiving or Christmas Day.",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
                "rating": {
                    "rate": 4.7,
                    "count": 500
                }
            },
            {
                "id": 4,
                "title": "Mens Casual Slim Fit",
                "price": 15.99,
                "description": "The color could be slightly different between on the screen and in practice. / Please note that body builds vary by person, therefore, detailed size information should be reviewed below on the product description.",
                "category": "men's clothing",
                "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
                "rating": {
                    "rate": 2.1,
                    "count": 430
                }
            }]
    }
}
Increment=(value)=>{
    console.log("increment")
    this.setState({
        counter:this.state.counter+1+value
        
    })
}
Decrement=()=>{
    console.log("decrement")
    this.setState({
        counter:this.state.counter-1
    })
}
Reset=()=>{
    console.log("reset")
    this.setState({
        counter:0
    })
}
Handlesubscribe=()=>{
this.setState({
    issubscribe:!this.state.issubscribe
})
}
Productsort=()=>{
const result=this.state.products.sort((a,b)=>a.price-b.price)
    this.setState({
        products:result
    })
}

render(){
return(
<>
<button onClick={this.Handlesubscribe}>{this.state.issubscribe ? "unsubscribe" : "subscribe" }</button>


{
this.state.issubscribe?
<>
<h1 style={{color:"red"}}>{this.state.counter}</h1>
<button onClick={()=>this.Increment(3)}>increment</button>
<button onClick={this.Decrement}>decrement</button>
<button onClick={this.Reset}>reset</button>

<button onClick={this.Productsort}>sort</button>

{
    this.state.products.map(eachobject=>
        <div>
        <h4>{eachobject.title}</h4>
        <h4>{eachobject.price}</h4>
        <ImageComponent data={eachobject}/>
        </div>)
         }
</>
:<h3>plz subscribe</h3>
}
</>
)
}
 }
 export default Counter




