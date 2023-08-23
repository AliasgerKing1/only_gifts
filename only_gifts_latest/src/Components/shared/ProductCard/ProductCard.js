import React from 'react'
import { NavLink } from 'react-router-dom'
const ProductImages = [
  {
    image : "/assets/img/product/p-9-1.jpg",
    title : 'Premium Backpack',
    category : 'Lugadge & Bags',
  },
  {
    image : "/assets/img/product/p-9-2.jpg",
    title : 'Premium Giftset',
    category : 'Gifts',
  },
  {
    image : "/assets/img/product/p-9-3.jpg",
    title : 'NoteBook',
    category : 'Stationary',
  },
  {
    image : "/assets/img/product/p-9-4.jpg",
    title : 'Vip Pen',
    category : 'Stationary',
  },
  {
    image : "/assets/img/product/p-9-5.jpg",
    title : 'Water Bottle',
    category : 'Stationary',
  },
  {
    image : "/assets/img/product/p-9-6.jpg",
    title : 'Gadget Set',
    category : 'Gadgets',
  },
  // Add more image paths as needed
];
const ProductCard = (props) => {
  return (
    <>
    {ProductImages.map((prod, index) => (
                   <div className="col-md-6 col-xl-4" key={index}>
                   <div className="vs-product product-style2">
                     <div className="product-img"><a href="shop-details.html"><img src={prod.image} alt={prod.title} className="w-100" style={{ width: '100%',
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
