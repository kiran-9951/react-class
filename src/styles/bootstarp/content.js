
import  ProductCard from "./card"


const Content=()=>{
    return(
<>
  <div className="jumbotron text-center">
    <h1>My First Bootstrap Page</h1>
    <p>Resize this responsive page to see the effect!</p>
  </div>
  <div className="container">
    <div className="row">
      <div className="col-sm-4">
     <ProductCard/>
      </div>
      <div className="col-sm-4">
        <ProductCard/>
        
      </div>
      <div className="col-sm-4">
        <ProductCard/>
      </div>
    </div>
  </div>
</>
    )
}
export default Content






