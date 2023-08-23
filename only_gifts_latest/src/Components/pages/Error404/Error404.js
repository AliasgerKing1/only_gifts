import React from 'react'
import { NavLink } from 'react-router-dom'
const Error404 = () => {
  return (
    <>
    {/* <div class="preloader"><button class="vs-btn preloaderCls">Cancel Preloader</button>
        <div class="preloader-inner">
            <div class="loader"></div>
        </div>
    </div> */}
<section className="vs-error-wrapper space" data-bg-src="/assets/img/bg/bg-error.jpg">
  <div className="container">
    <div className="error-content">
      <h1 className="error-number">4<span className="zero">0</span>4</h1>
      <h2 className="error-title">OOOPS, PAGE NOT FOUND</h2>
      <p className="error-text">We Can't Seem to find the page you're looking for.</p>
      <form action="#" className="search-inline"><input type="text" className="form-control" placeholder="Enter Your Keyword...." /> <button><i className="far fa-search" /></button></form><NavLink to="/" className="vs-btn style5">Back To Homepage</NavLink>
    </div>
  </div>
</section>

    </>
  )
}

export default Error404
