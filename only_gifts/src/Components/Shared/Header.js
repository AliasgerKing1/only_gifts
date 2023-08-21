import React from 'react'
import {NavLink} from 'react-router-dom'
const Header = () => {
  return (
    <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary me-4">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/"><img src="/assets/images/logo.png" alt="Bootstrap" width={120} height={120} /></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active main fs20" aria-current="page" href="#first"><b className="main">Home</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs20" href="#second"><b className="blur">Our Product</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs20" href="#third"><b className="blur">Our Clients</b></a>
            </li>
            <li className="nav-item">
              <a className="nav-link fs20" href="#fourth"><b className="blur">About us</b></a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header
