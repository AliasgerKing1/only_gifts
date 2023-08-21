import axios from 'axios'

let apiUrl = 'http://localhost:4005/api/admin/'
// let apiUrl = 'https://only-gifts-517r.onrender.com/api/admin/'

let loginAdmin = async (data)=> {
return await axios.post(apiUrl, data)
}

let addProduct = async (data) => {
    return await axios.post(`http://localhost:4005/api/product`, data)
}
let getProduct = async () => {
    return await axios.get(`http://localhost:4005/api/product`)
}
let getProductByLimit = async () => {
    return await axios.get(`http://localhost:4005/api/product/limit`)
}
let getProductByLimitForInfinite = async () => {
    return await axios.get(`http://localhost:4005/api/product/limit/infinite`)
}

let getProductInfinite = async () => {
    return await axios.get("http://localhost:4003/api/product/infinite?limit=8&page=0");
}

let addCompany = async (data) => {
    return await axios.post(`http://localhost:4005/api/company`, data)
}
let getCompany = async () => {
    return await axios.get(`http://localhost:4005/api/company`)
}
let addCategory = async (data) => {
    return await axios.post(`http://localhost:4005/api/category`, data)
}
let getCategory = async () => {
    return await axios.get(`http://localhost:4005/api/category`)
}
export {loginAdmin, addProduct, getProduct, addCompany, getCompany, addCategory, getCategory, getProductByLimit, getProductByLimitForInfinite}