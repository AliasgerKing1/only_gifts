/* eslint-disable */
import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import {getCategory, getCompany, getProductByLimit } from '../../../Services/AdminService'

import {getProductRed} from '../../../Redux/ProductReducer' 
import { useDispatch, useSelector } from 'react-redux'
const Home = () => {
  let dispatch = useDispatch()
let [company, setCompany] = useState()
let [category, setCategory] = useState()
  let state = useSelector(state => state.ProductReducer)
  let getCompanyFun = async () => {
    let result = await getCompany()
    setCompany(result.data)
     
  }
  let getCategoryFun = async () => {
    let result = await getCategory()
    setCategory(result.data)
     
  }
  let getProductFun = async () => {
    let result = await getProductByLimit()
     dispatch(getProductRed(result.data))
  }
  useEffect(()=> {
    if(state.length === 0) {
      getProductFun()
    }

    getCompanyFun()
    getCategoryFun()
  }, [])
  return (
    <>
 <div>
  <section className="first_fold mb-5" id="first">
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/"><img src="/assets/images/logo.png" alt="Bootstrap" width={120} height={96} /></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active main" aria-current="page" href="#first"><b className="main">Home</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#second"><b className="blur">Our Product</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#third"><b className="blur">Our Clients</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#fourth"><b className="blur">About us</b></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div className="second-nav mb-5">
      <div className="row">
        <div className="col-md-6 md-ms-md-5">
          <h5 className="blur">Ready Stocks of 2500+ Gifts, Apparel &amp; Merchandise </h5>
        </div>
        <div className="col-md-3 offset-md-2">
          <h5 className="blur"><a className='pointer blur'>Click to Download Brochure </a> </h5>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-md-12">

        <div className="wrapper2 ms-5">
          <i id="left" className="fa-solid fa-angle-left" />
          <ul className="carousel">
            {category?.map((cat, index) => (
                          <li>
                          <div className="img"><img src={cat.image} alt={cat.category} draggable="false" className="category-img" /></div>
            <h4 className="third_fold_h4 b mt-3">{cat.category}</h4>
            </li>
            ))}
          </ul>
          <i id="right" className="fa-solid fa-angle-right" />
        </div>
      </div>
    </div>
  </section>
  <hr className="end_ruler" />
  <section className="second_fold" id="second">
    <div className="row mb-4">
      <div className="col-md-4 offset-md-4">
        <h1 className="second_fold__h1 display-5 ps-6">Our Products</h1>
        <hr className="title_ruler" />
      </div>
    </div>
    <div className="row ms-md-5 ms-4 me-sm-4 ms-sm-5">
      {state?.map((product,index)=> (
      <div className="col-md-4 col-sm-6" key={index}>
      <div className="card mb-4" style={{width: '21rem', backgroundColor: '#e8ebeb'}}>
        <img src={product.image} className="card-img-top fixed-image-size" alt={product.title} />
        <div className="card-body">
          <h2 className="card_heading">{product.title}</h2>
        </div>
      </div>
    </div>
      ))}

    </div>
    <div className="row">
      <div className="col-md-2 offset-md-5">
        <NavLink to="/all/product" className="btn btn-primary btn-lg">View All</NavLink>
      </div>
    </div>
  </section>
  <hr className="end_ruler" />
  <section className="third_fold" id="third">
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <h1 className="second_fold__h1 display-5 ps-7">Our Clients</h1>
        <hr className="title_ruler" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <h4 className="third_fold_h4">Having association with exquisite brands is the hallmark of a good
          company. We are proud to be associated with a few brands, and growing….</h4>
      </div>
    </div>
    <div className="row mt-5 mb-7">
      <div className="col-md-12">
        <div className="wrapper2 ms-5">
          <i id="left" className="fa-solid fa-angle-left" />
          <ul className="carousel">
            {company?.map((comp,index) => (
            <li key={index}>
            <div className="img"><img src={comp.image} alt={comp.company} draggable="false" className="category-img" /></div>
            <h4 className="third_fold_h4 b mt-3">{comp.company}</h4>
            </li>
            ))}
          </ul>
          <i id="right" className="fa-solid fa-angle-right" />
        </div>
      </div>
    </div>
    <hr className="end_ruler 
m-0" />
  </section>
  <section className="fourth_fold pb-7" id="fourth">
    <div className="row ms-3">
      <div className="col-md-6">
        <h2 className="c-fff mt-4 ms-5" style={{textAlign : 'start'}}>Onlygiftskwt</h2>
        <h5 className="c-fff">
          At OnlyGiftsKWT, we believe that every gesture counts,
          and every moment is an opportunity to express appreciation,
          gratitude, and warmth. Our journey began with a simple yet
          profound idea – to create meaningful connections throug
          thoughtfully curated corporate gifts.
        </h5>
      </div>
      <div className="col-md-5 offset-md-1">
        <h6 className="c-fff mt-4 mb-3" style={{textAlign : 'start'}}>CONTACT DETAILS</h6>
        <div className="row">
          <div className="col-md-5">
            <h6 className="c-fff mb-3">
              Darwaza Abdul Razzak,
              Bldg No 47, Sharq - Kuwait
            </h6></div>
        </div>
        <div className="row">
          <div className="col-md-5">
            <h6 className="c-fff">
              Tel: +965 6634 1165
              <br/>
              Email: sales@onlygiftskwt.com
            </h6>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>

    </>
  )
}

export default Home
