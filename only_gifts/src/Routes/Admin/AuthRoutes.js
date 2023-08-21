import AddProducts from '../../Components/Pages/Admin/AddProducts/AddProducts'
import AddCompany from '../../Components/Pages/Admin/AddCompany/AddCompany'
import AddCategory from '../../Components/Pages/Admin/AddCategory/AddCategory'
import UpdateProducts from '../../Components/Pages/Admin/UpdateProducts/UpdateProducts'
import UpdateCompany from '../../Components/Pages/Admin/UpdateCompany/UpdateCompany'
import UpdateCategory from '../../Components/Pages/Admin/UpdateCategory/UpdateCategory'


let authRoutes = [
    {
        path : 'admin/product',
        element: <AddProducts />
    },
    {
        path : 'admin/product/update/:id',
        element: <UpdateProducts />
    },
    {
        path : 'admin/company/update/:id',
        element: <UpdateCompany />
    },
    {
        path : 'admin/category/update/:id',
        element: <UpdateCategory />
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