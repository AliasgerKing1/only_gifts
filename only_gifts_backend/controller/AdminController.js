
const routes = require("express").Router();
const Admin = require("../models/Admin")
const Product = require("../models/Product")
const jwt = require("jsonwebtoken")
const sha1 = require("sha1")

routes.post("/", async (req, res) => {
let username = req.body.username;
let password = sha1(req.body.password);
let trueUsername = await Admin.find({username : username})
if(trueUsername.length == 1) {
    if(trueUsername[0].password == password) {
        let obj = {_id : trueUsername[0]._id, email : trueUsername[0].email, username : trueUsername[0].username};
        let token = jwt.sign(obj , "Aliasger web");
        res.send({success : true, status : 200, token : token});
    }else {
        res.send({status  : 409, errType : 2})
    }
} else {
    res.send({status  : 409, errType : 1})
}
})

// routes.get("/", async (req,res)=> {
//     if (req.headers.admin_token) {
//         let admin_token = req.headers.admin_token;
//         let obj = jwt.decode(admin_token, "Aliasger web");
//     let result = await Admin.find({_id : obj._id})
//     res.send(result)
//     }
// })
module.exports = routes;

// admin