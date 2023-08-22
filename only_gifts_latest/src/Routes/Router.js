import { useRoutes} from 'react-router-dom'

import Home from '../Components/pages/Home/Home'
import OurProducts from '../Components/pages/OurProducts/OurProducts'

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
])

return (router)
}

export default Router