import axios from 'axios'

// let apiUrl = 'http://localhost:4005/api/admin/'
let apiUrl = 'https://only-gifts-517r.onrender.com/api/admin/'

let loginAdmin = async (data)=> {
return await axios.post(apiUrl, data)
}

let addProduct = async (data) => {
    return await axios.post(`http://localhost:4005/api/product`, data)
}
let deleteProduct = async (id) => {
    return await axios.delete(`https://only-gifts-517r.onrender.com/api/product/${id}`)
}
let getProduct = async () => {
    return await axios.get(`http://localhost:4005/api/product`)
}
let updateProduct = async (id, data) => {
    return await axios.put(`https://only-gifts-517r.onrender.com/api/product/${id}`, data)
}
let getProductByLimit = async () => {
    return await axios.get(`https://only-gifts-517r.onrender.com/api/product/limit`)
}
let getProductByLimitForInfinite = async () => {
    return await axios.get(`https://only-gifts-517r.onrender.com/api/product/limit/infinite`)
}

let getProductInfinite = async () => {
    return await axios.get("http://localhost:4003/api/product/infinite?limit=8&page=0");
}

let addCompany = async (data) => {
    return await axios.post(`https://only-gifts-517r.onrender.com/api/company`, data)
}
let deleteCompany = async (id) => {
    return await axios.delete(`https://only-gifts-517r.onrender.com/api/company/${id}`)
}

let updateCompany = async (id, data) => {
    return await axios.put(`https://only-gifts-517r.onrender.com/api/company/${id}`, data)
}
let getCompany = async () => {
    return await axios.get(`https://only-gifts-517r.onrender.com/api/company`)
}
let addCategory = async (data) => {
    return await axios.post(`https://only-gifts-517r.onrender.com/api/category`, data)
}
let deleteCategory = async (id) => {
    return await axios.delete(`https://only-gifts-517r.onrender.com/api/category/${id}`)
}
let getCategory = async () => {
    return await axios.get(`https://only-gifts-517r.onrender.com/api/category`)
}
let updateCategory = async (id, data) => {
    return await axios.put(`https://only-gifts-517r.onrender.com/api/category/${id}`, data)
}
export {loginAdmin, addProduct, getProduct, deleteProduct,updateProduct, addCompany, deleteCompany, getCompany,updateCompany, addCategory,deleteCategory, getCategory,updateCategory, getProductByLimit, getProductByLimitForInfinite}