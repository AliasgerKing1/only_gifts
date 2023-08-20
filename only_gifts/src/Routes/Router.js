import { useRoutes, Navigate} from 'react-router-dom'

import Home from '../Components/Pages/Home/Home'
import OurProducts from '../Components/Pages/OurProducts/OurProducts'
import Signin from '../Components/Pages/Admin/Signin/Signin'
import Layouts from '../Layouts/Layouts'
import authRoutes from './Admin/AuthRoutes'

let isTokenPresent = () => {
    const token = localStorage.getItem('admin_token');
    if(token) {
        return true
    } else {
        return false
    }
}

let Router = ()=> {

const router = useRoutes([
    {
        path : '/',
        element: <Home />
    },
    {
        path : '/all/product',
        element: <OurProducts />
    },
  {
    path : '/admin/signin',
    element :  isTokenPresent() ? (
        <Navigate to="/auth/admin/product" replace />
    ) : (<Signin />)
  },
    {
        path : '/auth',
        element: <Layouts />,
        children : authRoutes
    },
])

return (router)
}

export default Router