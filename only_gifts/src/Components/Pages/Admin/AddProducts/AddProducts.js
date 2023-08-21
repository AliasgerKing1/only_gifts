/* eslint-disable */
import React, {useEffect, useState} from 'react'
import '../../../../assets/signin/css/style.css'
import { NavLink, useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux'
import Header from '../../../Shared/Admin/Header'
import { getCategoryRed, getCompanyRed, getProductByRed } from '../../../../Redux/AdminNavReducer'
import {addProduct, getProduct,deleteProduct} from '../../../../Services/AdminService'

const AddProducts = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let [showAlert, setShowAlert] = useState()
    let [msg, setMsg] = useState()
    let [imageArray, setImageArray] = useState([])
    let [image, setImage] = useState()
    let [title, setTitle] = useState('')

    let getProductFun = async () => {
        try {
            let result = await getProduct(); // Assuming getProduct is an asynchronous function that returns a promise
            setImageArray(result.data);
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };
    
    useEffect(()=> {
        getProductFun()
        dispatch(getCategoryRed(false))
        dispatch(getCompanyRed(false))
        dispatch(getProductByRed(true))
    }, [])
    let handleClick = async () => {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page
        const formData = new FormData()
        formData.append('title', title)
        formData.append('image', image)
        let result = await addProduct(formData)
        let data = result.data.obj
        setImageArray([...imageArray, data])
    }

    let deleteProductFun = async (id) => {
      let result = await deleteProduct(id)
      if(result.data.status === 200) {
      //  Filter out the deleted product from imageArray based on its _id
      setImageArray((prevImageArray) => prevImageArray.filter((product) => product._id !== result.data.deleted._id));
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
      <h3>Add Product</h3>
      <div className="form-holder active">
        <input type="text" placeholder="Title" className="form-control" name='title' onChange={(e) => setTitle(e.target.value.toUpperCase())} value={title}/>
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
<div className='row mb-5 me-5 ms-5 mt-5'>
    {imageArray.map((files, index) => (
        <div className='col-md-4' key={index}>
          <div className="card">
          <img src={files.image} alt={files.title} style={{ width: '100%',
  height: '300px', 
  objectFit: 'cover'}}/>
  <div className="card-body">
    <h5 className="card-title">{files.title}</h5>
    <a className="btn btn-danger me-2 pointer" onClick={()=>deleteProductFun(files._id)}>Delete</a>
    <NavLink to={`/auth/admin/product/update/${files._id}`} className="btn btn-primary">Edit</NavLink>
  </div>
</div>
</div>
    ))}
</div>
    </section>

    </>
  )
}

export default AddProducts
