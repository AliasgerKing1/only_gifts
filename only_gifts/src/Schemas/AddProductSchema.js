import * as Yup from 'yup'

let addProductSchema = Yup.object({
    title : Yup.string().required("Title is Required"),
})

export default addProductSchema