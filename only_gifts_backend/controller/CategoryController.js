const routes = require("express").Router();
const Category = require("../models/Category");
const multer = require('multer')
const str = require('random-string')
const path = require('path')
const fs = require('fs'); // For file system operations

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'assets', 'category')); // Define the destination folder
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
        const category = req.body.category;
        const new_name = req.file.filename; // Use the filename generated by multer
        const obj = {
          category: category.trim(),
          image: `http://localhost:4005/category/${new_name}`
        };
        await Category.create(obj);
        res.status(200).send({ success: true, obj :  obj});
      } catch (error) {
        console.error(error);
        res.status(500).send({ success: false });
      }
    })
    
routes.get('/', async (req,res) => {
let result = await Category.find({})
res.send(result)
})

module.exports = routes;