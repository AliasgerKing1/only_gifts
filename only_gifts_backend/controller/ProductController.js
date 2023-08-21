const routes = require("express").Router();
const Product = require("../models/Product");
const multer = require('multer')
// const upload = multer({dest : '/assets/products/'})
const str = require('random-string')
const path = require('path')
const fs = require('fs'); // For file system operations

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'assets', 'products')); // Define the destination folder
  },
  filename: function (req, file, cb) {
    const random_string = str({ length: 100 });
    const original_name = file.originalname;
    const array = original_name.split(".");
    const extension = array[array.length - 1];
    const new_name = random_string + "." + extension;
    cb(null, new_name);
  }
});

const upload = multer({ storage: storage });

routes.post('/',upload.single('image'), async (req,res)=> {
    try {
        const title = req.body.title.toUpperCase();
        const new_name = req.file.filename; // Use the filename generated by multer
        const obj = {
          title: title.trim(),
          image: `https://only-gifts-517r.onrender.com/products/${new_name}`
        };
        await Product.create(obj);
        res.status(200).send({ success: true, obj :  obj});
      } catch (error) {
        console.error(error);
        res.status(500).send({ success: false });
      }
    })
    
routes.get('/', async (req,res) => {
let result = await Product.find({})
res.send(result)
})
routes.get('/limit', async (req,res) => {
let result = await Product.find({}).limit(3)
res.send(result)
})
routes.get('/limit/infinite', async (req,res) => {
let result = await Product.find({}).limit(3)
res.send(result)
})

routes.get('/infinite', async (req, res) => {
  let limit = req.query.limit;
  let skip = req.query.page;
const result = await Product.find({}).skip(skip).limit(limit);
res.send(result);
});

module.exports = routes;