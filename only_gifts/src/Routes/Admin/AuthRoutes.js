import AddProducts from '../../Components/Pages/Admin/AddProducts/AddProducts'
import AddCompany from '../../Components/Pages/Admin/AddCompany/AddCompany'
import AddCategory from '../../Components/Pages/Admin/AddCategory/AddCategory'


let authRoutes = [
    {
        path : 'admin/product',
        element: <AddProducts />
    },
    {
        path : 'admin/company',
        element: <AddCompany />
    },
    {
        path : 'admin/category',
        element: <AddCategory />
    },
]

export default authRoutes