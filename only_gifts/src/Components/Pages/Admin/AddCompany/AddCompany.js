/* eslint-disable */
import React, {useEffect, useState} from 'react'
import '../../../../assets/signin/css/style.css'
import {NavLink, useNavigate} from "react-router-dom"
import { useDispatch } from 'react-redux'
import {addCompany, deleteCompany, getCompany} from '../../../../Services/AdminService'
import Header from '../../../Shared/Admin/Header'
import { getCategoryRed, getCompanyRed, getProductByRed } from '../../../../Redux/AdminNavReducer'

const AddProducts = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let [showAlert, setShowAlert] = useState()
    let [msg, setMsg] = useState()
    let [imageArray, setImageArray] = useState([])
    let [image, setImage] = useState()
    let [company, setCompany] = useState('')

    let getProductFun = async () => {
        try {
            let result = await getCompany(); // Assuming getProduct is an asynchronous function that returns a promise
            setImageArray(result.data);
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };
    
    useEffect(()=> {
        getProductFun()
        dispatch(getCategoryRed(false))
        dispatch(getCompanyRed(true))
        dispatch(getProductByRed(false))
    }, [])

    let handleClick = async () => {
        event.preventDefault(); // Prevent the form from submitting and refreshing the page
        const formData = new FormData()
        formData.append('company', company)
        formData.append('image', image)
        let result = await addCompany(formData)
        let data = result.data.obj
        setImageArray([...imageArray, data])
    }

    let deleteCompanyFun = async (id) => {
      let result = await deleteCompany(id)
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
      <h3>Add Company</h3>
      <div className="form-holder active">
        <input type="text" placeholder="Company name" className="form-control" name='company' onChange={(e) => setCompany(e.target.value)} value={company}/>
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
          <div class="card">
          <img src={files.image} alt={files.company} style={{ width: '100%',
  height: '300px', 
  objectFit: 'cover'}}/>
  <div class="card-body">
    <h5 class="card-title">{files.company}</h5>
    <a class="btn btn-danger me-2 pointer" onClick={()=>deleteCompanyFun(files._id)}>Delete</a>
    <NavLink to={`/auth/admin/company/update/${files._id}`} className="btn btn-primary">Edit</NavLink>
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
