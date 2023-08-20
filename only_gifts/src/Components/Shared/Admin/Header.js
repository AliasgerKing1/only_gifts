import React from 'react'
import {NavLink} from "react-router-dom"

const Header = () => {
    let logOut = () => {
        localStorage.clear()
    }
    
  return (
    <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/"><img src="/assets/images/logo.png" alt="Bootstrap" width={120} height={96} /></NavLink>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink className="nav-link active" aria-current="page" to="/auth/admin/product"><b className="main2">Add Product</b></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/auth/admin/category"><b className="blur2">Add Category</b></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/auth/admin/company"><b className="blur2">Add Clients</b></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/admin/signin" onClick={logOut}><b className="blur2">Logout</b></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    </>
  )
}

export default Header
