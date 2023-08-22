import React, { useEffect, useState } from 'react'
import { getCategory, getProduct } from '../../../Services/AdminService'
import {NavLink} from 'react-router-dom'
import ClientCarousel from '../../shared/ClientCarousel/ClientCarousel'
import CategoryCarousel from '../../shared/CategoryCarousel/CategoryCarousel'
const Home = () => {
  let [menu, setMenu] = useState(false)
  let [sideMenu, setSideMenu] = useState(false)
  let [category, setCategory] = useState([])
  let [product, setProduct] = useState([])

  let getCategoryFun = async () => {
  let result = await getCategory()
  setCategory(result.data)
  }
  let getProductFun = async () => {
  let result = await getProduct()
  setProduct(result.data)
  }

  useEffect(()=> {
getCategoryFun()
getProductFun()
  }, [])
  return (
    <>
      <div>
        {/* <div className="preloader"><button className="vs-btn preloaderCls">Cancel Preloader</button>
    <div className="preloader-inner">
      <div className="loader" />
    </div>
  </div>
  <svg viewBox="0 0 150 150" className="svg-hidden">
    <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z" />
  </svg> */}
        <div className={`vs-menu-wrapper ${menu ? "vs-body-visible" : ''}`}>
          <div className="vs-menu-area text-center"><button className="vs-menu-toggle" onClick={() => setMenu(false)}><i className="fal fa-times" /></button>
            <div className="mobile-logo"><a href="index.html"><img src="/assets/img/logo.svg" alt="Wellnez" /></a></div>
            <div className="vs-mobile-menu">
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><a href="#products">Our Product</a></li>
                <li><a href="#clients">Our Clients</a></li>
                <li><a href="#about">About Us</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={`sidemenu-wrapper d-none d-lg-block ${sideMenu ? "show" : ''}`}>
          <div className="sidemenu-content"><button className="closeButton sideMenuCls" onClick={() => setSideMenu(false)}><i className="far fa-times" /></button>
            <div className="widget">
              <div className="footer-logo"><img src="/assets/img/logo.svg" alt="logo" /></div>
              <div className="info-media1">
                <div className="media-icon"><i className="fal fa-map-marker-alt" /></div><span className="media-label">Darwaza Abdul Razzak,
Bldg No 47, Sharq - Kuwait</span>
              </div>
              <div className="info-media1">
                <div className="media-icon"><i className="far fa-phone-alt" /></div><span className="media-label"><a href="tel:+96566341165" className="text-inherit">+965 6634 1165</a></span>
              </div>
              <div className="info-media1">
                <div className="media-icon"><i className="fal fa-envelope" /></div><span className="media-label"><a className="text-inherit" href="mailto:sales@onlygiftskwt.com">sales@onlygiftskwt.com</a></span>
              </div>
            </div>
            <div className="widget">
              <h3 className="widget_title">Latest post</h3>
              <div className="recent-post-wrap">
                <div className="recent-post">
                  <div className="media-img"><a href="blog-details.html"><img src="/assets/img/widget/recent-post-1-1.jpg" alt="Blog Image" /></a></div>
                  <div className="media-body">
                    <h4 className="post-title"><a className="text-inherit" href="blog-details.html">Skinscent Experience
                      Oskarsson</a></h4>
                    <div className="recent-post-meta"><a href="blog.html"><i className="fas fa-calendar-alt" />march
                      10, 2023</a></div>
                  </div>
                </div>
                <div className="recent-post">
                  <div className="media-img"><a href="blog-details.html"><img src="/assets/img/widget/recent-post-1-2.jpg" alt="Blog Image" /></a></div>
                  <div className="media-body">
                    <h4 className="post-title"><a className="text-inherit" href="blog-details.html">Lorem ipsum is
                      placeholder recent popular</a></h4>
                    <div className="recent-post-meta"><a href="blog.html"><i className="fas fa-calendar-alt" />Augest
                      10, 2023</a></div>
                  </div>
                </div>
                <div className="recent-post">
                  <div className="media-img"><a href="blog-details.html"><img src="/assets/img/widget/recent-post-1-3.jpg" alt="Blog Image" /></a></div>
                  <div className="media-body">
                    <h4 className="post-title"><a className="text-inherit" href="blog-details.html">From its medieval
                      origins health custom</a></h4>
                    <div className="recent-post-meta"><a href="blog.html"><i className="fas fa-calendar-alt" />July
                      11, 2023</a></div>
                  </div>
                </div>
                <div className="recent-post">
                  <div className="media-img"><a href="blog-details.html"><img src="/assets/img/widget/recent-post-1-4.jpg" alt="Blog Image" /></a></div>
                  <div className="media-body">
                    <h4 className="post-title"><a className="text-inherit" href="blog-details.html">Letraset's
                      dry-transfer sheets later</a></h4>
                    <div className="recent-post-meta"><a href="blog.html"><i className="fas fa-calendar-alt" />March
                      05, 2023</a></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="popup-search-box d-none d-lg-block"><button className="searchClose"><i className="fal fa-times" /></button>
          <form action="#"><input type="text" className="border-theme" placeholder="What are you looking for" /> <button type="submit"><i className="fal fa-search" /></button></form>
        </div>
        <header className="vs-header header-layout2">
          {/* <div className="header-top">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-sm-auto text-center">
            <p className="header-text">receove free shipping on orders over $50</p>
          </div>
          <div className="col-auto d-none d-sm-block">
            <div className="social-style1"><a href="#"><i className="fab fa-facebook-f" /></a> <a href="#"><i className="fab fa-twitter" /></a> <a href="#"><i className="fab fa-instagram" /></a>
            </div>
          </div>
        </div>
      </div>
    </div> */}
          <div className="sticky-wrap">
            <div className="sticky-active">
              <div className="menu-area">
                <div className="menu-inner">
                  <div className="container">
                    <div className="row justify-content-between align-items-center gx-60">
                      <div className="col">
                        <div className="header-logo"><a href="index.html"><img src="/assets/img/logo.svg" alt="logo" /></a></div>
                      </div>
                      <div className="col-auto">
                        <nav className="main-menu menu-style1 d-none d-lg-block">
                          <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><a href="#products">Our Products</a></li>
                            <li><a href="#clients">Our Clients</a></li>
                            <li><a href="#about">About Us</a></li>
                          </ul>
                        </nav>
                      </div>
                      <div className="col-auto">
                        <div className="header-icons">
                          <button className="bar-btn sideMenuToggler d-none d-xl-inline-block" onClick={() => setSideMenu(!sideMenu)}><span className="bar" /> <span className="bar" /> <span className="bar" /></button> 
                          <button className="vs-menu-toggle d-inline-block d-lg-none" type="button" onClick={() => setMenu(!menu)}><i className="fal fa-bars" /></button></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <CategoryCarousel />
        {/* <div className="position-relative space-extra-bottom">
          <div className="gallery-shape1" />
          <div className="container-fluid">
            <div className="row gallery-slider1 vs-carousel" data-slide-show={1} data-center-mode="true" data-xl-center-mode="true" data-ml-center-mode="true" data-lg-center-mode="true" data-md-center-mode="true" data-center-padding="477px" data-xl-center-padding="320px" data-ml-center-padding="200px" data-lg-center-padding="150px" data-md-center-padding="80px">
              <div className="col">
                <div className="gallery-style2">
                  <div className="gallery-img"><img src="/assets/img/gallery/gal-3-1.jpg" alt="gallery" /></div>
                  <div className="circle-btn style2"><a href="gallery-details.html" className="btn-icon"><i className="far fa-arrow-right" /></a>
                    <div className="btn-text"><svg viewBox="0 0 150 150"><text>
                      <textPath href="#textPath">how to make your makeup last all day</textPath>
                    </text></svg></div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="gallery-style2">
                  <div className="gallery-img"><img src="/assets/img/gallery/gal-3-2.jpg" alt="gallery" /></div>
                  <div className="circle-btn style2"><a href="gallery-details.html" className="btn-icon"><i className="far fa-arrow-right" /></a>
                    <div className="btn-text"><svg viewBox="0 0 150 150"><text>
                      <textPath href="#textPath">how to make your makeup last all day</textPath>
                    </text></svg></div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="gallery-style2">
                  <div className="gallery-img"><img src="/assets/img/gallery/gal-3-3.jpg" alt="gallery" /></div>
                  <div className="circle-btn style2"><a href="gallery-details.html" className="btn-icon"><i className="far fa-arrow-right" /></a>
                    <div className="btn-text"><svg viewBox="0 0 150 150"><text>
                      <textPath href="#textPath">how to make your makeup last all day</textPath>
                    </text></svg></div>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="gallery-style2">
                  <div className="gallery-img"><img src="/assets/img/gallery/gal-3-4.jpg" alt="gallery" /></div>
                  <div className="circle-btn style2"><a href="gallery-details.html" className="btn-icon"><i className="far fa-arrow-right" /></a>
                    <div className="btn-text"><svg viewBox="0 0 150 150"><text>
                      <textPath href="#textPath">how to make your makeup last all day</textPath>
                    </text></svg></div>
                  </div>
                </div>
              </div>
            </div>
            <div className="arrows-style1"><button data-slick-prev=".gallery-slider1"><i className="arrow" />Prev</button>
              <button data-slick-next=".gallery-slider1"><i className="arrow" />Next</button></div>
          </div>
        </div> */}
        <section className="space-top" id='products'>
          <div className="container">
            <div className="row mb-5">
              <div className="col-auto">
                <h2 className="sec-title mb-n2">Our Products</h2>
              </div>
              <div className="col align-self-end">
                <div className="sec-line pb-1" />
              </div>
            </div>
            <div className="row vs-carousel" data-slide-show={4} data-ml-slide-show={3} data-lg-slide-show={3} data-md-slide-show={2}>
              {product?.map((prod, index) => (
              <div className="col-xl-3" key={index}>
              <div className="vs-product product-style1">
                <div className="product-img"><a href="shop-details.html"><img src={prod.image} style={{ width: '100%',
  height: '300px', 
  objectFit: 'cover'}} alt="product" className="w-100" /></a>
                  <div className="actions"><a href="#" className="vs-btn style4">Inquire Now</a></div>
                </div>
                <div className="product-body">
                  <div className="product-content">
                    <h3 className="product-title"><a className="text-inherit" href="shop-details.html">{prod.title}</a></h3>
                    <div className="product-category"><a href="shop.html">{prod.category}</a></div>
                  </div>
                </div>
              </div>
            </div>
              ))}
            </div>
          </div>
        </section>
        <div className="container">
        <div className="row mb-5">
              <div className="col-auto">
                <h2 className="sec-title mb-n2">Our Clients</h2>
              </div>
              <div className="col align-self-end">
                <div className="sec-line pb-1" />
              </div>
            </div>
            </div>
 <ClientCarousel />

        <footer className="footer-wrapper footer-layout1" id='about'>
          <div className="footer-top">
            <div className="container">
              <div className="row align-items-stretch">
                <div className="col-md-4 d-none d-lg-flex">
                  <div className="social-style2"><a className='pointer'><NavLink to="https://wa.link/vydag0" target='_blank'><i className="fab fa-whatsapp" /></NavLink></a><NavLink to="https://www.instagram.com/onlygiftskwt/" target='_blank'><i className="fab fa-instagram" /></NavLink></div>
                </div>
                <div className="col-md-5 col-lg-4">
                  <div className="vs-logo"><a href="index.html"><img src="/assets/img/logo-2.svg" alt="logo" /></a></div>
                </div>
                <div className="col-md-7 col-lg-4">
                  <form action="#" className="form-style1">
                    <h3 className="form-title">Our newsletter</h3>
                    <div className="form-group"><input type="email" placeholder="Enter your email..." /> <button className="vs-btn" type="submit">Subscribe</button></div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <div className="widget-area">
            <div className="container">
              <div className="row justify-content-between">
                <div className="col-md-6 col-xl-auto">
                  <div className="widget footer-widget">
                    <h3 className="widget_title">About Onlygiftskwt</h3>
                    <p className="footer-info"><i className="fal fa-map-marker-alt text-theme me-2" /> Darwaza Abdul Razzak,
Bldg No 47, Sharq - Kuwait<br /><a href="tel:+965 6634 1165" className="text-inherit"><i className="far fa-phone-alt text-theme me-2" />+965 6634 1165</a><br /><a className="text-inherit" href="mailto:sales@onlygiftskwt.com"><i className="fal fa-envelope text-theme me-2" />sales@onlygiftskwt.com</a></p>
                    <h4 className="fs-22 mb-2">Open Hours</h4>
                    <p className="footer-time">Monday to Saturday <span className="time">08:00 AM - 08:00 PM</span></p>
                  </div>
                </div>
                <div className="col-md-6 col-xl-auto">
                  <div className="widget widget_nav_menu footer-widget">
                    <h3 className="widget_title">Important Links</h3>
                    <div className="menu-all-pages-container footer-menu">
                      <ul className="menu">
                        <li><a href="#products">Our Products</a></li>
                        <li><a href="blog.html">Our Clients</a></li>
                        <li><a href="about.html">ABOUT US</a></li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-auto">
                  <div className="widget widget_nav_menu footer-widget">
                    <h3 className="widget_title">CATEGORIES</h3>
                    <div className="menu-all-pages-container footer-menu">
                      <ul className="menu">
                        {category.map((cat, index) => (
                        <li key={index}><a className='cursor_default'>{cat.category}</a></li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 col-xl-auto">
                  <div className="widget footer-widget">
                    <h3 className="widget_title">Recent Post</h3>
                    <div className="recent-post-wrap">
                      <div className="recent-post">
                        <div className="media-img"><a href="blog-details.html"><img src="/assets/img/widget/recent-post-2-1.jpg" alt="Blog Image" /></a></div>
                        <div className="media-body">
                          <h4 className="post-title"><a className="text-inherit" href="blog-details.html">Managing
                            Partner along</a></h4>
                          <div className="recent-post-meta"><a href="blog.html"><i className="fas fa-calendar-alt" />05 AUG, 2023</a></div>
                        </div>
                      </div>
                      <div className="recent-post">
                        <div className="media-img"><a href="blog-details.html"><img src="/assets/img/widget/recent-post-2-2.jpg" alt="Blog Image" /></a></div>
                        <div className="media-body">
                          <h4 className="post-title"><a className="text-inherit" href="blog-details.html">Senior
                            Counsels. Partnr along</a></h4>
                          <div className="recent-post-meta"><a href="blog.html"><i className="fas fa-calendar-alt" />11 AUG, 2023</a></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="copyright-wrap">
            <div className="container">
              <div className="row justify-content-between align-items-center">
                <div className="col-md-auto text-center">
                  <p className="copyright-text">Copyright <i className="fal fa-copyright" /> 2023 <a href="index.html">Onlygiftskwt</a>. All Rights Reserved By <a href="https://themeforest.net/user/vecuro_themes">Aliasger</a></p>
                </div>
                <div className="col-auto d-none d-md-block"><img src="/assets/img/widget/cards.png" alt="cards" /></div>
              </div>
            </div>
          </div>
        </footer><a href="#" className="scrollToTop scroll-btn"><i className="far fa-arrow-up" /></a>
      </div>

    </>
  )
}

export default Home
