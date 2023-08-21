/* eslint-disable */
// m.ario.sg.la.de@gmail.com
import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
import {getCategory, getCompany, getProductByLimit } from '../../../Services/AdminService'

import {getProductRed} from '../../../Redux/ProductReducer' 
import { useDispatch, useSelector } from 'react-redux'
import Header from '../../Shared/Header'
import PdfViewer from '../../Shared/PdfViewer'
const Home = () => {
  let dispatch = useDispatch()
let [company, setCompany] = useState()
let [category, setCategory] = useState()
  let state = useSelector(state => state.ProductReducer)
  let getCategoryFun = async () => {
    let result = await getCategory()
    if(result.data.length >= 0) {
    setCategory(result.data)
    }
  }
  let getProductFun = async () => {
    let result = await getProductByLimit()
     dispatch(getProductRed(result.data))
  }
  let getCompanyFun = async () => {
    let result = await getCompany()
    setCompany(result.data)
     
  }
  useEffect(()=> {
    if(state.length === 0) {
      getProductFun()
    }

    getCompanyFun()
    getCategoryFun()
  }, [])

  useEffect(() => {
    const carousel = document.getElementById("customCarousel");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const itemsPerSlide = 4; // Set the number of items to display per slide

    // Function to reset the Carousel to the first item
    const resetCarousel = () => {
      carouselItems.forEach((item, index) => {
        item.classList.remove("active");
        if (index < itemsPerSlide) {
          item.classList.add("active");
        }
      });
    };

    // Listen for the Bootstrap Carousel slid event
    carousel.addEventListener("slid.bs.carousel", () => {
      const activeItems = document.querySelectorAll(".carousel-item.active");
      if (activeItems.length < itemsPerSlide) {
        resetCarousel();
      }
    });

    return () => {
      // Clean up event listeners when the component unmounts
      carousel.removeEventListener("slid.bs.carousel", resetCarousel);
    };
  }, []);
  const pdfUrl = 'https://only-gifts-517r.onrender.com/pdf/borchure.pdf'; // Replace with your PDF URL

  return (
    <>
 <div>
  <section className="first_fold mb-5" id="first">
<Header />
    <div className="second-nav mb-5">
      <div className="row">
        <div className="col-md-6 md-ms-md-5">
          <h5 className="blur">Ready Stocks of 2500+ Gifts, Apparel &amp; Merchandise </h5>
        </div>
        <div className="col-md-3 offset-md-2">
          <PdfViewer pdfUrl={pdfUrl} />
        </div>
      </div>
    </div>

    <div className="row" style={{display : 'none'}}>
  <div className="col-md-12">
    <div
      id="customCarousel"
      className="carousel slide"
      data-bs-ride="carousel"
      data-bs-interval="3000" // Set the interval in milliseconds (e.g., 3000ms = 3 seconds)
    >
      <div className="carousel-inner ms-md-6 ms-5-5">
        {category?.map((cat, index) => (
          <div
            className={`carousel-item ${index === 0 ? "active" : ""}`}
            key={index}
          >
            <div className="d-flex flex-wrap"> {/* Use flex-wrap to allow items to wrap */}
              {category.slice(index, index + 4).map((cat, subIndex) => (
                <div key={subIndex} className="carousel-image me-5 me-md-0 col-12 col-md-6 col-lg-3"> {/* Adjust the column classes */}
                  <img
                    src={cat.image}
                    className="d-block category-img"
                    alt={cat.category}
                  />
                        <div class="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</div>
<div className="row  mt-5 mb-7">
        <div className="col-md-12">
          <div
            id="companyCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-inner ms-md-53 ms-55">
              {category?.map((comp, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="d-flex">
                    {category.slice(index, index + 4).map((comp, subIndex) => (
                      <div key={subIndex} className="carousel-image me-5 me-md-0 col-12 col-md-6 col-lg-3">
                        <img
                          src={comp.image}
                          className="d-block category-img"
                          alt={comp.category}
                        />
                    <h5 className='third_fold_h4 pt-2 me-7'>{comp.category}</h5>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

  </section>
  {/* <hr className="end_ruler" /> */}
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
  {/* <hr className="end_ruler" /> */}
  <section className="third_fold" id="third">
    <div className="row">
      <div className="col-md-4 offset-md-4">
        <h1 className="second_fold__h1 display-5 ps-7 mt-3">Our Clients</h1>
        <hr className="title_ruler" />
      </div>
    </div>
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <h4 className="third_fold_h4">Having association with exquisite brands is the hallmark of a good
          company. We are proud to be associated with a few brands, and growing….</h4>
      </div>
    </div>
   {/* New Company Carousel */}
   <div className="row  mt-5 mb-7">
        <div className="col-md-12">
          <div
            id="companyCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="3000"
          >
            <div className="carousel-inner ms-md-53 ms-55">
              {company?.map((comp, index) => (
                <div
                  className={`carousel-item ${index === 0 ? "active" : ""}`}
                  key={index}
                >
                  <div className="d-flex">
                    {company.slice(index, index + 4).map((comp, subIndex) => (
                      <div key={subIndex} className="carousel-image me-2 me-md-0 col-12 col-md-6 col-lg-3">
                        <img
                          src={comp.image}
                          className="d-block category-img"
                          alt={comp.company}
                        />
                                            <h5 className='third_fold_h4 pt-2 me-7'>{comp.company}</h5>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
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
