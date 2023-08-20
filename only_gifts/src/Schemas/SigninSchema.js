import * as Yup from 'yup'

let SigninSchema = Yup.object({
    username : Yup.string().required("Username is Required"),
    password : Yup.string().required('password is Required'),
})

export default SigninSchema