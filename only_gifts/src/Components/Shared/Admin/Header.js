import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import {NavLink} from "react-router-dom"

const Header = () => {
  let state = useSelector(state => state.AdminNavReducer)
  let [navbar, setNavbar] = useState(false)
    let logOut = () => {
        localStorage.clear()
    }
    
  return (
    <>
                <nav className="navbar navbar-expand-lg bg-body-tertiary me-4">
      <div className="container-fluid">
        <NavLink className="navbar-brand" to="/"><img src="/assets/images/logo.png" alt="Bootstrap" width={120} height={120} /></NavLink>
        <button className={`navbar-toggler ${ navbar ? "" : "collapsed"}`} type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded={navbar ? true : false} aria-label="Toggle navigation" onClick={()=>setNavbar(!navbar)}>
          <span className="navbar-toggler-icon" />
        </button>
        <div className={`collapse navbar-collapse  ${ navbar ? "show" : ""}`} id="navbarSupportedContent">
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
            <li className="nav-item">
            <NavLink className="nav-link fs20" aria-current="page" to="/auth/admin/product"><b className={state.product ? "main2" : "blur2" }>Add Product</b></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs20" to="/auth/admin/category"><b className={state.category ? "main2" : "blur2" }>Add Category</b></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs20" to="/auth/admin/company"><b className={state.company ? "main2" : "blur2" }>Add Clients</b></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link fs20" to="/admin/signin" onClick={logOut}><b className="blur2">Logout</b></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    
    </>
  )
}

export default Header
