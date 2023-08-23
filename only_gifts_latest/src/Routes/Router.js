import { useRoutes} from 'react-router-dom'

import Home from '../Components/pages/Home/Home'
import OurProducts from '../Components/pages/OurProducts/OurProducts'
import About from '../Components/pages/About/About'
import Error404 from '../Components/pages/Error404/Error404'

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
        path : '/about',
        element: <About />
    },
    {
        path : '*',
        element: <Error404 />
    },
])

return (router)
}

export default Router