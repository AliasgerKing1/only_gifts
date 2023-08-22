const routes = require("express").Router();
const Product = require("../models/Product");
const multer = require('multer')
// const upload = multer({dest : '/assets/products/'})
const str = require('random-string')
const path = require('path')
const fs = require('fs'); // For file system operations
const mongoose = require('mongoose');

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
      // console.log('hiii',28)
        const category = req.body.category;
        const title = req.body.title;
        const new_name = req.file.filename; // Use the filename generated by multer
        const obj = {
          category: category.trim(),
          title: title.trim(),
          image: `http://localhost:4005/products/${new_name}`
        };
        await Product.create(obj);
        res.status(200).send({ success: true, obj :  obj});
      } catch (error) {
        console.error(error);
        res.status(500).send({ success: false });
      }
    })
    
    routes.delete('/:id', async (req, res) => {
      try {
        const id = req.params.id;
        // console.log(id,45)

        const result = await Product.findByIdAndDelete(id);
    
        if (!result) {
          return res.status(404).json({ success: false, message: 'Product not found.' });
        }
    
        res.status(200).json({ success: true, status: 200, deleted: result });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error.' });
      }
    });
    

    routes.put('/:id',upload.single('image'), async (req, res) => {
      try {
        // console.log('hiii',63)
        const id = req.params.id;
        let new_name = ''
        if(req.file) {
           new_name = req.file.filename; // Use the filename generated by multer
        }
        // Check if 'id' is a valid ObjectId
        if (!mongoose.Types.ObjectId.isValid(id)) {
          return res.status(400).json({ success: false, message: 'Invalid product ID.' });
        }
    
        const updateFields = {}; // Initialize an empty object to store the fields to update
    
        // Check if the 'category' field is present in the request body
        if (req.body.category) {
          updateFields.category = req.body.category.trim(); // Update the 'category' field
        }
        // Check if the 'title' field is present in the request body
        if (req.body.title) {
          updateFields.title = req.body.title.trim(); // Update the 'title' field
        }
    
        // Check if the 'image' field is present in the request body
        if (req.file) {
          updateFields.image = `http://localhost:4005/products/${new_name}`; // Update the 'image' field
        }
    
        // Use the updateFields object to update only the specified fields in the database
        const result = await Product.updateMany({ _id: id }, { $set: updateFields });
    // console.log(result)
        if (!result) {
          return res.status(404).json({ success: false, message: 'Product not found.' });
        }
    
        // res.status(200).json({ success: true, status: 200, updated: result });
      } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: 'Internal server error.' });
      }
    });
    
    
routes.get('/', async (req,res) => {
  // console.log('hiii',102)
let result = await Product.find({})
res.send(result)
})
routes.get('/limit', async (req,res) => {
  // console.log('hiii',107)
let result = await Product.find({}).limit(12)
res.send(result)
})
routes.get('/limit/infinite', async (req,res) => {
  // console.log('hiii',112)
let result = await Product.find({}).limit(4)
res.send(result)
})

routes.get('/infinite', async (req, res) => {
  // console.log('hiii',118)
  let limit = req.query.limit;
  let skip = req.query.page;
const result = await Product.find({}).skip(skip).limit(limit);
res.send(result);
});

module.exports = routes;