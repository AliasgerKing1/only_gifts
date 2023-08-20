import React, { useEffect } from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Layouts = () => {
    const navigate = useNavigate();

    useEffect(() => {
      const adminToken = localStorage.getItem("admin_token");
  
      if (!adminToken) {
        navigate("/admin/signin");
      }
    }, [localStorage.getItem("admin_token")]);
  return (
    <>
      <Outlet />
    </>
  )
}

export default Layouts
