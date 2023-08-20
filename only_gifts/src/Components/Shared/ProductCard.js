import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
const ProductCard = (props) => {
  let state2 = useSelector(state2=>state2.ProductMaxReducer)
  let state3 = useSelector(state2=>state2.ProductInitialReducer)
  return (
    <>
     {state2.length === 0 ? 
      (state3?.map((product,index)=> (
            <div className="col-md-4" key={index}>
            <div className="card mb-4" style={{width: '21rem', backgroundColor: '#e8ebeb'}}>
              <img src={product.image} className="card-img-top fixed-image-size" alt={product.image} />
              <div className="card-body">
                <h2 className="card_heading">{product.image}</h2>
              </div>
            </div>
          </div>
    )
    )) :
      (props.state?.map((product,index)=> (
            <div className="col-md-4" key={index}>
            <div className="card mb-4" style={{width: '21rem', backgroundColor: '#e8ebeb'}}>
              <img src={product.image} className="card-img-top fixed-image-size" alt={product.title} />
              <div className="card-body">
                <h2 className="card_heading">{product.title}</h2>
              </div>
            </div>
          </div>
    )
    ))
  }
    </>
  )
}

export default ProductCard
