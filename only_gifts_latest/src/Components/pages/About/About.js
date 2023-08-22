import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import {getCategory } from '../../../Services/AdminService'

const About = () => {
    let [menu, setMenu] = useState(false)
    let [sideMenu, setSideMenu] = useState(false)
  let [category, setCategory] = useState([])
  let getCategoryFun = async () => {
    let result = await getCategory()
    setCategory(result.data)
    }
  useEffect(()=> {
getCategoryFun()
  }, [])
  return (
    <>
   {/* <div className="preloader"><button className="vs-btn preloaderCls">Cancel Preloader</button>
  <div className="preloader-inner">
    <div className="loader" />
  </div>
</div> */}

    {/* <svg viewBox="0 0 150 150" class="svg-hidden">
        <path id="textPath" d="M 0,75 a 75,75 0 1,1 0,1 z"></path>
    </svg> */}
        <div className={`vs-menu-wrapper ${menu ? "vs-body-visible" : ''}`}>
          <div className="vs-menu-area text-center"><button className="vs-menu-toggle" onClick={() => setMenu(false)}><i className="fal fa-times" /></button>
            <div className="mobile-logo"><a href="index.html"><img src="/assets/img/logo.svg" alt="OnlyGift" /></a></div>
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
        <div className="header-top">
  <div className="container">
    <div className="row justify-content-center justify-content-md-between align-items-center">
      <div className="col-auto text-center py-2 py-md-0">
        <div className="header-links style-white">
          <ul>
            <li className="d-none d-xxl-inline-block"><i className="far fa-map-marker-alt" />Darwaza Abdul Razzak,
Bldg No 47, Sharq - Kuwait</li>
            <li><i className="far fa-phone-alt" /><a href="tel:+96566341165">+965 6634 1165</a></li>
            <li><i className="far fa-envelope" /><a href="mailto:sales@onlygiftskwt.com">sales@onlygiftskwt.com</a></li>
          </ul>
        </div>
      </div>
      <div className="col-auto d-none d-md-block">
        <div className="social-style1"><a href="https://wa.link/vydag0"><i className="fab fa-whatsapp" /></a> <a href="https://www.instagram.com/onlygiftskwt/"><i className="fab fa-instagram" /></a></div>
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
  <div className="breadcumb-wrapper" data-bg-src="/assets/img/breadcumb/breadcumb-bg-2.jpg">
    <div className="container z-index-common">
      <div className="breadcumb-content">
        <h1 className="breadcumb-title">About Us</h1>
        <div className="breadcumb-menu-wrap">
          <ul className="breadcumb-menu">
            <li><NavLink to="/">Home</NavLink></li>
            <li>About Us</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <section className="space-top space-extra-bottom">
    <div className="shape-mockup jump-img d-none d-xl-block" data-left="34%" data-bottom="1%"><img src="/assets/img/shape/leaf-1-6.png" alt="shape" /></div>
    <div className="container">
      <div className="row justify-content-between gx-0">
        <div className="col-md-10"><span className="sec-subtitle">welcome</span>
          <h2 className="h3 pe-xxl-5 me-xxl-5 mb-md-5 pb-xl-3">Giving a heartfelt gift fosters genuine connections, conveying emotions and thoughtfulness. It transcends material value, leaving lasting impressions, and strengthening bonds, making it the ultimate practice of meaningful giving.</h2>
        </div>
        <div className="col-auto mb-5 mb-md-0">
          <div className="pt-1 mt-2">
            <div className="circle-btn style2"><a href="service.html" className="btn-icon"><i className="far fa-arrow-right" /></a>
              <div className="btn-text"><svg viewBox="0 0 150 150"><text>
                    <textPath href="#textPath">to check our OnlyGift top rated services</textPath>
                  </text></svg></div>
            </div>
          </div>
        </div>
      </div>
      <div className="row justify-content-between">
        <div className="col-xl-4 mb-3 mb-xl-0">
          <h3 className="text-uppercase font-body mt-n1">DISCOVER <span className="text-theme">OnlyGifts</span> Service
          </h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto velit, porro doloremque cupiditate
            sint, quam provident fugit facilis soluta eos quos ab laborum.</p>
        </div>
        <div className="col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.2s">
          <div className="row gx-60">
            <div className="col-auto"><span className="about-number">01</span></div>
            <div className="col">
              <h4 className="fw-medium fs-26 font-body mt-n1 mb-lg-3 pb-lg-1">Think to give Gift</h4>
              <div className="list-style1">
                <ul className="list-unstyled">
                  <li>lorem ispum de</li>
                  <li>lorem ispum de</li>
                  <li>lorem ispum de as</li>
                  <li>lorem ispum de sus ny</li>
                  <li>lorem ispum de</li>
                  <li>lorem ispum de ji ge</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-xl-3 wow fadeInUp" data-wow-delay="0.3s">
          <div className="row gx-60">
            <div className="col-auto"><span className="about-number">02</span></div>
            <div className="col">
              <h4 className="fw-medium fs-26 font-body mt-n1 mb-lg-3 pb-lg-1">Give Our Beutiful Gifts</h4>
              <div className="list-style1">
                <ul className="list-unstyled">
                  <li>lorem ispum de</li>
                  <li>lorem ispum de man</li>
                  <li>lorem ispum de on tu</li>
                  <li>lorem ispum de</li>
                  <li>lorem ispum de ji ge</li>
                  <li>lorem ispum de</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section className="space-top space-extra-bottom">
    <div className="parallax" data-parallax-image="/assets/img/bg/testi-bg-2-1.jpg" />
    <div className="shape-mockup jump-reverse d-none d-xxl-block" data-top="12%" data-right="6%"><img src="/assets/img/shape/leaf-1-1.png" alt="shape" /></div>
    <div className="shape-mockup jump d-none d-xxl-block" data-top="35%" data-left="17.5%"><img src="/assets/img/shape/leaf-1-8.png" alt="shape" /></div>
    <div className="container">
      <div className="title-area text-center"><span className="sec-subtitle">client testimonial</span>
        <h2 className="sec-title">OnlyGift Customers</h2>
      </div>
      <div className="pb-1px" />
      <div className="testi-style2"><span className="vs-icon"><img src="/assets/img/icon/quote-1-1.png" alt="icon" /></span>
        <div className="vs-carousel" data-slide-show={1} data-fade="true" data-arrows="true" data-ml-arrows="true" data-xl-arrows="true" data-lg-arrows="true" data-prev-arrow="fal fa-long-arrow-left" data-next-arrow="fal fa-long-arrow-right">
          <div>
            <p className="testi-text">“We think your skin should look and refshed matter Nourish your outer
              inner beauty with our essential oil infused beauty products”</p>
            <div className="arrow-shape"><i className="arrow" /><i className="arrow" /><i className="arrow" /><i className="arrow" /></div>
            <h3 className="testi-name h5">Thomas Muller</h3><span className="testi-degi">CEO, SPATHINK</span>
          </div>
          <div>
            <p className="testi-text">“From its medieval origins to the digital era, learn everything there is
              to know about the ubiquitous lorem ipsum passage known”</p>
            <div className="arrow-shape"><i className="arrow" /><i className="arrow" /><i className="arrow" /><i className="arrow" /></div>
            <h3 className="testi-name h5">William Shak</h3><span className="testi-degi">Manager, LDC</span>
          </div>
          <div>
            <p className="testi-text">“Creation timelines for the standard lorem ipsum passage vary, with some
              citing the 15th century and others the part of Cicero”</p>
            <div className="arrow-shape"><i className="arrow" /><i className="arrow" /><i className="arrow" /><i className="arrow" /></div>
            <h3 className="testi-name h5">Vivi Marian</h3><span className="testi-degi">Customer</span>
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

export default About
