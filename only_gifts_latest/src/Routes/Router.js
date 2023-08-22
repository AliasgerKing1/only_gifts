import { useRoutes} from 'react-router-dom'

import Home from '../Components/pages/Home/Home'
import OurProducts from '../Components/pages/OurProducts/OurProducts'
import About from '../Components/pages/About/About'

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
])

return (router)
}

export default Router