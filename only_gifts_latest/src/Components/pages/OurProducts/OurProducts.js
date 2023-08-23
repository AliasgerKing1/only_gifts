import React, { useEffect, useState } from 'react'
import { getCategory } from '../../../Services/AdminService'
import { NavLink } from 'react-router-dom'
import ProductCard from '../../shared/ProductCard/ProductCard';
import { useDispatch, useSelector } from 'react-redux'
import {getProductMaxRed} from "../../../Redux/ProductMaxReducer"
import { getProductByLimitForInfinite } from '../../../Services/AdminService';
import { getProductInitialRed } from '../../../Redux/ProductInitialReducer';
const OurProducts = () => {
  let [menu, setMenu] = useState(false)
  let [category, setCategory] = useState([])

  let [sideMenu, setSideMenu] = useState(false)
  let dispatch = useDispatch();
  let state2 = useSelector(state2=>state2.ProductMaxReducer)
    const [isScrolledToFixedHeight, setIsScrolledToFixedHeight] = useState(false);
    const [pages, setPages] = useState(0);
    const [infheight, setInfHeight] = useState(300)
    const fixedHeight = infheight; // the fixed height to check against
    let getCategoryFun = async () => {
      let result = await getCategory()
      setCategory(result.data)
      }
      useEffect(()=> {
        getCategoryFun()
          }, [])
    let getInitialDataFun = async () => {
let result = await getProductByLimitForInfinite()
dispatch(getProductInitialRed(result.data))
    }
    useEffect(() => {
      getInitialDataFun()
      if(state2.length == 0) {
        // setShowSpinner(true);
        function handleScroll() {
          const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
          const isFixedHeightReached = scrollTop >= fixedHeight;
          setIsScrolledToFixedHeight(isFixedHeightReached);
        }
    
        window.addEventListener("scroll", handleScroll);
    
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }
    }, []);
  
      useEffect(() => {
    if (isScrolledToFixedHeight) {
        // setShowSpinner(true);
      // Calling API
      fetch(`https://only-gifts-517r.onrender.com/api/product/infinite?limit=6&page=${pages}`)
        .then((response) => response.json())
        .then((newData) => {
// let uniqueArr = [...new Set(arr.map(obj => JSON.stringify(obj)))].map(str => JSON.parse(str));
dispatch(getProductMaxRed(newData));
// setShowSpinner(false);
setPages(pages + 6);
setInfHeight(infheight + 250);
          });
    }
  }, [isScrolledToFixedHeight]);

  return (
    <>
               <div className={`vs-menu-wrapper ${menu ? "vs-body-visible" : ''}`}>
          <div className="vs-menu-area text-center"><button className="vs-menu-toggle" onClick={() => setMenu(false)}><i className="fal fa-times" /></button>
            <div className="mobile-logo"><a href="index.html"><img src="/assets/img/logo.svg" alt="Wellnez" /></a></div>
            <div className="vs-mobile-menu">
              <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/all/product">Our Product</NavLink></li>
                <li><NavLink to="/">Our Clients</NavLink></li>
                <li><NavLink to="/about">About Us</NavLink></li>
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
                  <div className="media-img"><a href="blog-details.html"><img src="/assets/img/widget/p-9-6.jpg" alt="Blog Image" /></a></div>
                  <div className="media-body">
                    <h4 className="post-title"><a className="text-inherit" href="blog-details.html">Skinscent Experience
                      Oskarsson</a></h4>
                    <div className="recent-post-meta"><a href="blog.html"><i className="fas fa-calendar-alt" />march
                      10, 2023</a></div>
                  </div>
                </div>
                <div className="recent-post">
                  <div className="media-img"><a href="blog-details.html"><img src="/assets/img/widget/p-9-5.jpg" alt="Blog Image" /></a></div>
                  <div className="media-body">
                    <h4 className="post-title"><a className="text-inherit" href="blog-details.html">Lorem ipsum is
                      placeholder recent popular</a></h4>
                    <div className="recent-post-meta"><a href="blog.html"><i className="fas fa-calendar-alt" />Augest
                      10, 2023</a></div>
                  </div>
                </div>
                <div className="recent-post">
                  <div className="media-img"><a href="blog-details.html"><img src="/assets/img/widget/p-9-4.jpg" alt="Blog Image" /></a></div>
                  <div className="media-body">
                    <h4 className="post-title"><a className="text-inherit" href="blog-details.html">From its medieval
                      origins health custom</a></h4>
                    <div className="recent-post-meta"><a href="blog.html"><i className="fas fa-calendar-alt" />July
                      11, 2023</a></div>
                  </div>
                </div>
                <div className="recent-post">
                  <div className="media-img"><a href="blog-details.html"><img src="/assets/img/widget/p-9-3.jpg" alt="Blog Image" /></a></div>
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

          <div className="sticky-wrap">
            <div className="sticky-active">
              <div className="menu-area">
                <div className="menu-inner">
                  <div className="container">
                    <div className="row justify-content-between align-items-center gx-60">
                      <div className="col">
                        <div className="header-logo"><a href="index.html"><img src="/assets/img/logo.svg" alt="logo" style={{float: 'left'}} /></a></div>
                      </div>
                      <div className="col-auto">
                        <nav className="main-menu menu-style1 d-none d-lg-block">
                          <ul>
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/all/product">Our Products</NavLink></li>
                            <li><NavLink to="/">Our Clients</NavLink></li>
                            <li><NavLink to="/about">About Us</NavLink></li>
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
        <h1 className="breadcumb-title">Our <span className="inner-text">Products</span></h1>
        <div className="breadcumb-menu-wrap">
          <ul className="breadcumb-menu">
            <li><NavLink to="/">Home</NavLink></li>
            <li>Our <span className="inner-text">Products</span></li>
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
            <ProductCard state={state2} />


            </div>
            {/* <div className="vs-pagination">
              <ul>
                <li><a href="#">Prev</a></li>
                <li><a className="active" href="#">1</a></li>
                <li><a href="#">2</a></li>
                <li><a href="#">...</a></li>
                <li><a href="#">6</a></li>
                <li><a href="#">Next</a></li>
              </ul>
            </div> */}
          </div>
          <div className="col-lg-4 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
            <aside className="sidebar-area ps-lg-3 ps-xxl-0">
              {/* <div className="widget">
                <h3 className="widget_title">Filter By</h3>
                <div className="range-slider-area">
                  <div className="price-amount"><span className="title">Price:</span><span id="minAmount" /> - <span id="maxAmount" /></div>
                  <div id="slider-range" /><button className="filter-btn">Filter</button> <button className="reset-btn"><i className="far fa-trash-alt" />Clear All</button>
                </div>
              </div> */}
              <div className="widget">
                <h3 className="widget_title">Category</h3>
                <div className="category-filter">
                  <ul>
                    {category?.map((cat, index) => (
                    <li key={index}><input type="checkbox" id={cat.category} name={cat.category} /> <label htmlFor={cat.category}>{cat.category}</label> <span className="total">{index}</span></li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="widget">
                <h3 className="widget_title">Latest Products</h3>
                <div className="latest-product-area">
                  <div className="latest-product">
                    <div className="media-img"><NavLink to="/all/product"><img src="/assets/img/widget/p-9-1.jpg" alt="product" /></NavLink></div>
                    <div className="media-body">
                      <h4 className="product-title"><NavLink className="text-inherit" to="/all/product"> Premium Backpack</NavLink></h4>
                      <p className="product-price"><span className="currency">$</span>5.00</p>
                    </div>
                  </div>
                  <div className="latest-product">
                    <div className="media-img"><NavLink to="/all/product"><img src="/assets/img/widget/p-9-2.jpg" alt="product" /></NavLink></div>
                    <div className="media-body">
                      <h4 className="product-title"><NavLink className="text-inherit" to="/all/product">Premium Giftset</NavLink></h4>
                      <p className="product-price"><span className="currency">$</span>22.00</p>
                    </div>
                  </div>
                  <div className="latest-product">
                    <div className="media-img"><NavLink to="/all/product"><img src="/assets/img/widget/p-9-3.jpg" alt="product" /></NavLink></div>
                    <div className="media-body">
                      <h4 className="product-title"><NavLink className="text-inherit" to="/all/product">NoteBook</NavLink></h4>
                      <p className="product-price"><span className="currency">$</span>8.00</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="widget">
                <h4 className="widget_title">instagram</h4>
                <div className="sidebar-gallery">
                  <div className="gallery-thumb"><img src="/assets/img/widget/p-9-3.jpg" alt="Gallery Image" className="w-100" style={{ width: '100%',
  height: '120px', 
  objectFit: 'cover', border: '2px solid gray'}} /></div>
                  <div className="gallery-thumb"><img src="/assets/img/widget/p-9-5.jpg" alt="Gallery Image" className="w-100" style={{ width: '100%',
  height: '120px', 
  objectFit: 'cover', border: '2px solid gray'}} /></div>
                  <div className="gallery-thumb"><img src="/assets/img/widget/p-9-6.jpg" alt="Gallery Image" className="w-100" style={{ width: '100%',
  height: '120px', 
  objectFit: 'cover', border: '2px solid gray'}} /></div>
                  <div className="gallery-thumb"><img src="/assets/img/widget/p-9-1.jpg" alt="Gallery Image" className="w-100" style={{ width: '100%',
  height: '120px', 
  objectFit: 'cover', border: '2px solid gray'}} /></div>
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
                        <li><NavLink to="/all/product">Our Products</NavLink></li>
                        <li><NavLink to="/">Our Clients</NavLink></li>
                        <li><NavLink to="/about">ABOUT US</NavLink></li>
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
                        <div className="media-img"><a href="blog-details.html"><img src="/assets/img/widget/p-9-5.jpg" alt="Blog Image" /></a></div>
                        <div className="media-body">
                          <h4 className="post-title"><a className="text-inherit" href="blog-details.html">Managing
                            Partner along</a></h4>
                          <div className="recent-post-meta"><a href="blog.html"><i className="fas fa-calendar-alt" />05 AUG, 2023</a></div>
                        </div>
                      </div>
                      <div className="recent-post">
                        <div className="media-img"><a href="blog-details.html"><img src="/assets/img/widget/p-9-6.jpg" alt="Blog Image" /></a></div>
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

export default OurProducts
