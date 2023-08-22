import React from 'react'
import { NavLink } from 'react-router-dom'
const ProductCard = (props) => {
  return (
    <>
    {props?.state?.map((prod, index) => (
                   <div className="col-md-6 col-xl-4" key={index}>
                   <div className="vs-product product-style2">
                     <div className="product-img"><a href="shop-details.html"><img src={prod.image} alt="product" className="w-100" style={{ width: '100%',
  height: '300px', 
  objectFit: 'cover'}} /></a>
                       <div className="actions"> <a href="#" className="icon-btn"><i className="far fa-eye" /></a></div>
                     </div>
                     <div className="product-body">
                       <div className="product-content">
                         <h3 className="product-title"><a className="text-inherit" href="shop-details.html">{prod.title}</a></h3>
                         <div className="product-category"><NavLink to="/all/product">{prod.category}</NavLink></div>
                       </div>
                     </div>
                   </div>
                 </div>
    ))}

    </>
  )
}

export default ProductCard