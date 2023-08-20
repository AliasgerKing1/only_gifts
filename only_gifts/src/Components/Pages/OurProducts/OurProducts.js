
/* eslint-disable */
import React, {useState, useEffect} from 'react'
import { NavLink } from 'react-router-dom'
import ProductCard from '../../Shared/ProductCard';
import { useDispatch, useSelector } from 'react-redux'
import {getProductMaxRed} from "../../../Redux/ProductMaxReducer"
import { getProductByLimitForInfinite } from '../../../Services/AdminService';
import { getProductInitialRed } from '../../../Redux/ProductInitialReducer';

const OurProducts = () => {
  let dispatch = useDispatch();
  let state2 = useSelector(state2=>state2.ProductMaxReducer)
    const [isScrolledToFixedHeight, setIsScrolledToFixedHeight] = useState(false);
    const [pages, setPages] = useState(0);
    const [infheight, setInfHeight] = useState(300)
    const fixedHeight = infheight; // the fixed height to check against
  
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
      fetch(`http://localhost:4005/api/product/infinite?limit=6&page=${pages}`)
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
              <NavLink className="nav-link active main" aria-current="page" to="/"><b className="main">Home</b></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/"><b className="blur">Our Product</b></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/"><b className="blur">Our Clients</b></NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/"><b className="blur">About us</b></NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </section>
  <hr className="end_ruler" />
  <section className="second_fold" id="second">
    <div className="row mb-4">
      <div className="col-md-4 offset-md-4">
        <h1 className="second_fold__h1 display-5 ps-3">Our Products</h1>
        <hr className="title_ruler" />
      </div>
    </div>
    <div className="row ms-5">
        <ProductCard state={state2} />
    </div>
  </section>
</div>

    </>
  )
}

export default OurProducts
