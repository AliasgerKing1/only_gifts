/* eslint-disable */
import React, {useEffect, useState} from 'react'
import '../../../../assets/signin/css/style.css'
import { NavLink, useNavigate, useParams} from "react-router-dom"
import { useDispatch } from 'react-redux'
import Header from '../../../Shared/Admin/Header'

import {addProduct, updateCompany, updateProduct} from '../../../../Services/AdminService'

const UpdateProducts = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let params = useParams()
    let [showAlert, setShowAlert] = useState()
    let [msg, setMsg] = useState()
    let [imageArray, setImageArray] = useState([])
    let [image, setImage] = useState()
    let [title, setTitle] = useState('')
    let [category, setCategory] = useState('')


let handleClick = async () => {
  event.preventDefault(); // Prevent the form from submitting and refreshing the page
  // Create an object to hold the data you want to send to the backend

    // Create a FormData object to hold the data
    const formData = new FormData();
  
    // Check if the title has changed and add it to the FormData object
    if (category.trim() !== '') {
      formData.append('category', category.trim());
    }
    // Check if the title has changed and add it to the FormData object
    if (title.trim() !== '') {
      formData.append('title', title.trim());
    }
    // Check if an image has been selected and add it to the FormData object
    if (image) {
      formData.append('image', image);
    }
  
    // Make the API request using the FormData object
    let result = await updateProduct(params.id, formData);
    if (result.data.status === 200) {
      navigate('/auth/admin/product');
    }

}
  return (
    <>
<Header />

    <section class="add_product">
    <div className="wrapper">
  <div className="inner">
    <div className="image-holder">
      <img src="/assets/signin/images/registration-form-4.jpg" alt />
    </div>
    <form>
      <h3>Update Product</h3>
      <div className="form-holder active">
        <input type="text" placeholder="Title" className="form-control" name='title' onChange={(e) => setTitle(e.target.value.toUpperCase())} value={title}/>
      </div>
      <div className="form-holder">
        <input type="text" placeholder="Category" className="form-control" name='category' onChange={(e) => setCategory(e.target.value.toUpperCase())} value={category}/>
      </div>
     
      <div class="form-holder">
  <input type="file" multiple class="form-control" id="inputGroupFile01" style={{paddingTop : '12px', color : ' #FF9A9C'}} onChange={(e)=> setImage(e.target.files[0])} />
</div>

      <div className="form-login">
        <button type='submit' style={{borderRadius : '20px'}} onClick={handleClick}>Add</button>
      </div>
      {/* {showAlert ? (<h6 className='text-danger mt-3'>{msg}</h6>) : null} */}
    </form>
  </div>
</div>
    </section>

    </>
  )
}

export default UpdateProducts
