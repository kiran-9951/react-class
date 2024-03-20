
// const Card = ({prop}) => {
//   return (

//             <div className="card" style={{ width: 400 }}>
//       <img className="card-img-top" src="../logo192.png" alt="Card image" />
//       <div className="card-body">

//         <h4 className="card-title">
//           {
//             prop.data.title
//           }
//         </h4>
//         <p className="card-text">Some example text.</p>
//         <a href="#" className="btn btn-primary">
//           See Profile
//         </a>
//       </div>
//     </div>
//   )
// }
// export default Card

import React from 'react';

function ProductCard({product }) {
  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <img src={product.image} className="card-img-top" alt={product.title} style={{width:200,height:200}} />
        <div className="card-body">
          <h5 className="card-title">{product.title}</h5>
          {/* <p className="card-text">{product.description}</p> */}
          <p className="card-text">Price: ${product.price}</p>
          <p className="card-text">Category: {product.category}</p>
          {/* <p className="card-text">Rating: {product.rating.rate} ({product.rating.count} reviews)</p> */}
        </div>
      </div>
    // </div>
    // <div className="col-md-4 mb-3" style={{display:"inline-flex"}}>
    //   <div className="card"  >
    //     <img src={product.list.image} className="card-img-top" alt={product.list.image} style={{width:200,height:200}} />
    //     <div className="card-body">
    //       {/* <h5 className="card-title">{product.title}</h5> */}
    //       {/* <p className="card-text">{product.description}</p> */}
    //       <p className="card-text">Age: {product.list.age}</p>
    //       <p className="card-text">firstName: {product.list.firstName}</p>
    //       {/* <p className="card-text">Rating: {product.rating.rate} ({product.rating.count} reviews)</p> */}
    //     </div>
    //   </div>
    // </div>










  );
}

export default ProductCard;

