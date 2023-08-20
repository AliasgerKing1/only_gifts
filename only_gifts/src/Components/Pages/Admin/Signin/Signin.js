/* eslint-disable */
import React, {useEffect, useState} from 'react'
import '../../../../assets/signin/css/style.css'
import {NavLink, useNavigate} from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import {useFormik} from 'formik'
import SigninSchema from '../../../../Schemas/SigninSchema'
import {loginAdmin} from '../../../../Services/AdminService'

let initialValues = {
    username : "",
    password : "",
  
  }
const Signin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    let [showAlert, setShowAlert] = useState()
    let [msg, setMsg] = useState()
    let {values, handleSubmit, handleBlur, handleChange, errors, touched} = useFormik({
      initialValues : initialValues,
      validationSchema : SigninSchema,
      onSubmit : async () => {
        let result = await loginAdmin(values)
        if(result.data.errType === 1 || result.data.errType === 2) {
         setShowAlert(true)
         setMsg('Invalid Username/Password')
        } else {
         setShowAlert(false)
          localStorage.setItem('admin_token', result.data.token)
          navigate('/auth/admin/product')
        }
      }
    })
  return (
    <>
<div className="wrapper">
  <div className="inner">
    <div className="image-holder">
      <img src="/assets/signin/images/registration-form-4.jpg" alt />
    </div>
    <form onSubmit={handleSubmit}>
      <h3>Sign In</h3>
      <div className="form-holder active">
        <input type="text" placeholder="Username" className={`form-control ${errors.username && touched.username ? "is-invlaid" : null}`} name='username' onChange={handleChange} onBlur={handleBlur} value={values.username} />
      </div>
      <div>{errors.username && touched.username ? (<small className='text-danger'>{errors.username}</small>) : null}</div>
      <div className="form-holder">
        <input type="password" placeholder="Password" className={`form-control ${errors.username && touched.username ? "is-invlaid" : null}`} style={{fontSize: 15}} name='password' onChange={handleChange} onBlur={handleBlur} value={values.password} />
      </div>
      <div>{errors.password && touched.password ? (<small className='text-danger'>{errors.password}</small>) : null}</div>
      <div className="form-login">
        <button style={{borderRadius : '20px'}}>Sign In</button>
      </div>
      {showAlert ? (<h6 className='text-danger mt-3'>{msg}</h6>) : null}
    </form>
  </div>
</div>

    </>
  )
}

export default Signin
