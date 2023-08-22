import Header from '../../shared/Header'
import React, { useEffect, useState } from 'react'
import {NavLink} from 'react-router-dom'
const OurProducts = () => {
  let [menu, setMenu] = useState(false)
  let [sideMenu, setSideMenu] = useState(false)
  return (
    <>
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
      <div className="header-top">
  <div className="container">
    <div className="row justify-content-center justify-content-md-between align-items-center">
      <div className="col-auto text-center py-2 py-md-0">
        <div className="header-links style-white">
          <ul>
            <li className="d-none d-xxl-inline-block"><i className="far fa-map-marker-alt" />121 King St.
              Melbourne VIC 3000, Australia</li>
            <li><i className="far fa-phone-alt" /><a href="tel:+25632542598">(+256) 3254 2598</a></li>
            <li><i className="far fa-envelope" /><a href="mailto:example@Wellnez.com">example@Wellnez.com</a></li>
          </ul>
        </div>
      </div>
      <div className="col-auto d-none d-md-block">
        <div className="social-style1"><a href="#"><i className="fab fa-facebook-f" /></a> <a href="#"><i className="fab fa-twitter" /></a> <a href="#"><i className="fab fa-instagram" /></a> <a href="#"><i className="fab fa-google" /></a> <a href="#"><i className="fab fa-linkedin-in" /></a></div>
      </div>
    </div>
  </div>
</div>

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
<div>
  {/* <div className="preloader"><button className="vs-btn preloaderCls">Cancel Preloader</button>
    <div className="preloader-inner">
      <div className="loader" />
    </div>
  </div> */}
  <div className="breadcumb-wrapper" data-bg-src="/assets/img/breadcumb/breadcumb-bg-4.jpg">
    <div className="container z-index-common">
      <div className="breadcumb-content">
        <h1 className="breadcumb-title">Our <span className="inner-text">Shop</span></h1>
        <div className="breadcumb-menu-wrap">
          <ul className="breadcumb-menu">
            <li><a href="index.html">Home</a></li>
            <li>Our <span className="inner-text">Shop</span></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <section className="vs-product-wrapper" data-bg-src="/assets/img/bg/body-bg-1.jpg">
    <div className="outer-wrap3">
      <div className="container">
        <div className="row gx-60">
          <div className="col-lg-8 col-xl-9 wow fadeInUp" data-wow-delay="0.2s">
            <div className="vs-sort-bar">
              <div className="row justify-content-between align-items-center">
                <div className="col-md-auto">
                  <p className="woocommerce-result-count">Showing 1–12 of 13 results</p>
                </div>
                <div className="col-md-auto">
                  <form className="woocommerce-ordering" method="get"><select name="orderby" className="orderby" aria-label="Shop order">
                      <option value="menu_order" selected="selected">Default Sorting</option>
                      <option value="popularity">Sort by popularity</option>
                      <option value="rating">Sort by average rating</option>
                      <option value="date">Sort by latest</option>
                      <option value="price">Sort by price: low to high</option>
                      <option value="price-desc">Sort by price: high to low</option>
                    </select></form>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-xl-4">
                <div className="vs-product product-style2">
                  <div className="product-img"><a href="shop-details.html"><img src="/assets/img/product/p-2-1.png" alt="product" className="w-100" /></a>
                    <div className="actions"><a href="#" className="icon-btn"><i className="far fa-heart" /></a> <a href="#" className="icon-btn"><i className="far fa-eye" /></a> <a href="#" className="icon-btn"><i className="far fa-shopping-cart" /></a></div>
                  </div>
                  <div className="product-body">
                    <div className="product-content">
                      <h3 className="product-title"><a className="text-inherit" href="shop-details.html">Safari Max</a></h3>
                      <div className="product-category"><a href="shop.html">Beauty</a></div>
                    </div><span className="product-price"><span className="currency">$</span>12</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="vs-product product-style2">
                  <div className="product-img"><a href="shop-details.html"><img src="/assets/img/product/p-2-2.png" alt="product" className="w-100" /></a>
                    <div className="actions"><a href="#" className="icon-btn"><i className="far fa-heart" /></a> <a href="#" className="icon-btn"><i className="far fa-eye" /></a> <a href="#" className="icon-btn"><i className="far fa-shopping-cart" /></a></div>
                  </div>
                  <div className="product-body">
                    <div className="product-content">
                      <h3 className="product-title"><a className="text-inherit" href="shop-details.html">Face Oil</a></h3>
                      <div className="product-category"><a href="shop.html">Fashion</a></div>
                    </div><span className="product-price"><span className="currency">$</span>20</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="vs-product product-style2">
                  <div className="product-img"><a href="shop-details.html"><img src="/assets/img/product/p-2-3.png" alt="product" className="w-100" /></a>
                    <div className="actions"><a href="#" className="icon-btn"><i className="far fa-heart" /></a> <a href="#" className="icon-btn"><i className="far fa-eye" /></a> <a href="#" className="icon-btn"><i className="far fa-shopping-cart" /></a></div>
                  </div>
                  <div className="product-body">
                    <div className="product-content">
                      <h3 className="product-title"><a className="text-inherit" href="shop-details.html">Hand Creams</a></h3>
                      <div className="product-category"><a href="shop.html">Life Style</a></div>
                    </div><span className="product-price"><span className="currency">$</span>11</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="vs-product product-style2">
                  <div className="product-img"><a href="shop-details.html"><img src="/assets/img/product/p-2-4.png" alt="product" className="w-100" /></a>
                    <div className="actions"><a href="#" className="icon-btn"><i className="far fa-heart" /></a> <a href="#" className="icon-btn"><i className="far fa-eye" /></a> <a href="#" className="icon-btn"><i className="far fa-shopping-cart" /></a></div>
                  </div>
                  <div className="product-body">
                    <div className="product-content">
                      <h3 className="product-title"><a className="text-inherit" href="shop-details.html">Body Sop</a></h3>
                      <div className="product-category"><a href="shop.html">Cosmetics</a></div>
                    </div><span className="product-price"><span className="currency">$</span>78</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="vs-product product-style2">
                  <div className="product-img"><a href="shop-details.html"><img src="/assets/img/product/p-2-5.png" alt="product" className="w-100" /></a>
                    <div className="actions"><a href="#" className="icon-btn"><i className="far fa-heart" /></a> <a href="#" className="icon-btn"><i className="far fa-eye" /></a> <a href="#" className="icon-btn"><i className="far fa-shopping-cart" /></a></div>
                  </div>
                  <div className="product-body">
                    <div className="product-content">
                      <h3 className="product-title"><a className="text-inherit" href="shop-details.html">Nail Polish</a></h3>
                      <div className="product-category"><a href="shop.html">Classic</a></div>
                    </div><span className="product-price"><span className="currency">$</span>11</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="vs-product product-style2">
                  <div className="product-img"><a href="shop-details.html"><img src="/assets/img/product/p-2-6.png" alt="product" className="w-100" /></a>
                    <div className="actions"><a href="#" className="icon-btn"><i className="far fa-heart" /></a> <a href="#" className="icon-btn"><i className="far fa-eye" /></a> <a href="#" className="icon-btn"><i className="far fa-shopping-cart" /></a></div>
                  </div>
                  <div className="product-body">
                    <div className="product-content">
                      <h3 className="product-title"><a className="text-inherit" href="shop-details.html">Lipstick Max</a></h3>
                      <div className="product-category"><a href="shop.html">Beauty</a></div>
                    </div><span className="product-price"><span className="currency">$</span>36</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="vs-product product-style2">
                  <div className="product-img"><a href="shop-details.html"><img src="/assets/img/product/p-2-7.png" alt="product" className="w-100" /></a>
                    <div className="actions"><a href="#" className="icon-btn"><i className="far fa-heart" /></a> <a href="#" className="icon-btn"><i className="far fa-eye" /></a> <a href="#" className="icon-btn"><i className="far fa-shopping-cart" /></a></div>
                  </div>
                  <div className="product-body">
                    <div className="product-content">
                      <h3 className="product-title"><a className="text-inherit" href="shop-details.html">Polish Max</a></h3>
                      <div className="product-category"><a href="shop.html">Spa Fashion</a></div>
                    </div><span className="product-price"><span className="currency">$</span>19</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="vs-product product-style2">
                  <div className="product-img"><a href="shop-details.html"><img src="/assets/img/product/p-2-8.png" alt="product" className="w-100" /></a>
                    <div className="actions"><a href="#" className="icon-btn"><i className="far fa-heart" /></a> <a href="#" className="icon-btn"><i className="far fa-eye" /></a> <a href="#" className="icon-btn"><i className="far fa-shopping-cart" /></a></div>
                  </div>
                  <div className="product-body">
                    <div className="product-content">
                      <h3 className="product-title"><a className="text-inherit" href="shop-details.html">Massage Oil</a></h3>
                      <div className="product-category"><a href="shop.html">Popular</a></div>
                    </div><span className="product-price"><span className="currency">$</span>22</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="vs-product product-style2">
                  <div className="product-img"><a href="shop-details.html"><img src="/assets/img/product/p-2-9.png" alt="product" className="w-100" /></a>
                    <div className="actions"><a href="#" className="icon-btn"><i className="far fa-heart" /></a> <a href="#" className="icon-btn"><i className="far fa-eye" /></a> <a href="#" className="icon-btn"><i className="far fa-shopping-cart" /></a></div>
                  </div>
                  <div className="product-body">
                    <div className="product-content">
                      <h3 className="product-title"><a className="text-inherit" href="shop-details.html">Face Powder</a></h3>
                      <div className="product-category"><a href="shop.html">Recent</a></div>
                    </div><span className="product-price"><span className="currency">$</span>96</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="vs-product product-style2">
                  <div className="product-img"><a href="shop-details.html"><img src="/assets/img/product/p-2-10.png" alt="product" className="w-100" /></a>
                    <div className="actions"><a href="#" className="icon-btn"><i className="far fa-heart" /></a> <a href="#" className="icon-btn"><i className="far fa-eye" /></a> <a href="#" className="icon-btn"><i className="far fa-shopping-cart" /></a></div>
                  </div>
                  <div className="product-body">
                    <div className="product-content">
                      <h3 className="product-title"><a className="text-inherit" href="shop-details.html">Hair Shine</a></h3>
                      <div className="product-category"><a href="shop.html">Fashion</a></div>
                    </div><span className="product-price"><span className="currency">$</span>55</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="vs-product product-style2">
                  <div className="product-img"><a href="shop-details.html"><img src="/assets/img/product/p-2-11.png" alt="product" className="w-100" /></a>
                    <div className="actions"><a href="#" className="icon-btn"><i className="far fa-heart" /></a> <a href="#" className="icon-btn"><i className="far fa-eye" /></a> <a href="#" className="icon-btn"><i className="far fa-shopping-cart" /></a></div>
                  </div>
                  <div className="product-body">
                    <div className="product-content">
                      <h3 className="product-title"><a className="text-inherit" href="shop-details.html">Nail Polish</a></h3>
                      <div className="product-category"><a href="shop.html">Popular</a></div>
                    </div><span className="product-price"><span className="currency">$</span>13</span>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="vs-product product-style2">
                  <div className="product-img"><a href="shop-details.html"><img src="/assets/img/product/p-2-12.png" alt="product" className="w-100" /></a>
                    <div className="actions"><a href="#" className="icon-btn"><i className="far fa-heart" /></a> <a href="#" className="icon-btn"><i className="far fa-eye" /></a> <a href="#" className="icon-btn"><i className="far fa-shopping-cart" /></a></div>
                  </div>
                  <div className="product-body">
                    <div className="product-content">
                      <h3 className="product-title"><a className="text-inherit" href="shop-details.html">Pro Perfume</a></h3>
                      <div className="product-category"><a href="shop.html">Beauty</a></div>
                    </div><span className="product-price"><span className="currency">$</span>11</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="vs-pagination">
              <ul>
                <li><a href="#">Prev</a></li>
                <li><a className="active" href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">...</a></li>
                <li><a href="#">6</a></li>
                <li><a href="#">Next</a></li>
              </ul>
            </div>
          </div>
          <div className="col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
            <aside className="sidebar-area ps-lg-3 ps-xxl-0">
              <div className="widget">
                <h3 className="widget_title">Filter By</h3>
                <div className="range-slider-area">
                  <div className="price-amount"><span className="title">Price:</span><span id="minAmount" /> - <span id="maxAmount" /></div>
                  <div id="slider-range" /><button className="filter-btn">Filter</button> <button className="reset-btn"><i className="far fa-trash-alt" />Clear All</button>
                </div>
              </div>
              <div className="widget">
                <h3 className="widget_title">Category</h3>
                <div className="category-filter">
                  <ul>
                    <li><input type="checkbox" id="babys" name="babys" /> <label htmlFor="babys">babys</label> <span className="total">03</span></li>
                    <li><input type="checkbox" id="mans" name="mans" /> <label htmlFor="mans">mans</label>
                      <span className="total">06</span></li>
                    <li><input type="checkbox" id="womans" name="womans" /> <label htmlFor="womans">womans</label> <span className="total">05</span></li>
                  </ul>
                </div>
              </div>
              <div className="widget">
                <h3 className="widget_title">Latest Products</h3>
                <div className="latest-product-area">
                  <div className="latest-product">
                    <div className="media-img"><a href="shop-details.html"><img src="/assets/img/widget/p-1-1.png" alt="product" /></a></div>
                    <div className="media-body">
                      <h4 className="product-title"><a className="text-inherit" href="shop-details.html">Nail Polish</a></h4>
                      <p className="product-price"><span className="currency">$</span>12.00</p>
                    </div>
                  </div>
                  <div className="latest-product">
                    <div className="media-img"><a href="shop-details.html"><img src="/assets/img/widget/p-1-2.png" alt="product" /></a></div>
                    <div className="media-body">
                      <h4 className="product-title"><a className="text-inherit" href="shop-details.html">Woman Waxing</a></h4>
                      <p className="product-price"><span className="currency">$</span>22.00</p>
                    </div>
                  </div>
                  <div className="latest-product">
                    <div className="media-img"><a href="shop-details.html"><img src="/assets/img/widget/p-1-3.png" alt="product" /></a></div>
                    <div className="media-body">
                      <h4 className="product-title"><a className="text-inherit" href="shop-details.html">Body Soup</a></h4>
                      <p className="product-price"><span className="currency">$</span>18.00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget">
                <h4 className="widget_title">instagram</h4>
                <div className="sidebar-gallery">
                  <div className="gallery-thumb"><img src="/assets/img/widget/gal-1-1.jpg" alt="Gallery Image" className="w-100" /></div>
                  <div className="gallery-thumb"><img src="/assets/img/widget/gal-1-2.jpg" alt="Gallery Image" className="w-100" /></div>
                  <div className="gallery-thumb"><img src="/assets/img/widget/gal-1-3.jpg" alt="Gallery Image" className="w-100" /></div>
                  <div className="gallery-thumb"><img src="/assets/img/widget/gal-1-4.jpg" alt="Gallery Image" className="w-100" /></div>
                </div>
              </div>
              <div className="widget widget_tag_cloud">
                <h3 className="widget_title">Popular Tags</h3>
                <div className="tagcloud"><a href="blog.html">Beauty</a> <a href="blog.html">Oil</a> <a href="blog.html">Organic</a> <a href="blog.html">Antiaging</a> <a href="blog.html">Skin Solution</a> <a href="blog.html">Cosmetic promex</a></div>
              </div>
            </aside>
          </div>
        </div>
      </div>
    </div>
  </section>
  <footer className="footer-wrapper footer-layout1">
    <div className="footer-top">
      <div className="container">
        <div className="row align-items-stretch">
          <div className="col-md-4 d-none d-lg-flex">
            <div className="social-style2"><a href="#"><i className="fab fa-facebook-f" /></a> <a href="#"><i className="fab fa-twitter" /></a> <a href="#"><i className="fab fa-instagram" /></a> <a href="#"><i className="fab fa-linkedin-in" /></a></div>
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
              <h3 className="widget_title">About Wellnez</h3>
              <p className="footer-info"><i className="fal fa-map-marker-alt text-theme me-2" /> Centerl Park
                West La, New York<br /><a href="tel:+01234567890" className="text-inherit"><i className="far fa-phone-alt text-theme me-2" />+0 123 456 7890</a><br /><a className="text-inherit" href="mailto:info@example.com"><i className="fal fa-envelope text-theme me-2" />info@example.com</a></p>
              <h4 className="fs-22 mb-2">Open Hours</h4>
              <p className="footer-time">Sunday to Friday <span className="time">08:00 - 20:00</span></p>
            </div>
          </div>
          <div className="col-md-6 col-xl-auto">
            <div className="widget widget_nav_menu footer-widget">
              <h3 className="widget_title">Important Links</h3>
              <div className="menu-all-pages-container footer-menu">
                <ul className="menu">
                  <li><a href="service.html">Serivces</a></li>
                  <li><a href="about.html">ABOUT US</a></li>
                  <li><a href="price-plan.html">Price Plan</a></li>
                  <li><a href="contact.html">CONTACT</a></li>
                  <li><a href="blog.html">Our Blog</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-xl-auto">
            <div className="widget widget_nav_menu footer-widget">
              <h3 className="widget_title">CATEGORIES</h3>
              <div className="menu-all-pages-container footer-menu">
                <ul className="menu">
                  <li><a href="service.html">SKINCARE</a></li>
                  <li><a href="service.html">MAKEUP</a></li>
                  <li><a href="service.html">FRAGRANCE</a></li>
                  <li><a href="service.html">HAIRCARE</a></li>
                  <li><a href="service.html">BATH &amp; BODY</a></li>
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
            <p className="copyright-text">Copyright <i className="fal fa-copyright" /> 2023 <a href="index.html">Wellnez</a>. All Rights Reserved By <a href="https://themeforest.net/user/vecuro_themes">Vecuro</a></p>
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

export default OurProducts
