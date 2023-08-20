require("../config/database")
const mongoose = require("mongoose");

const Product = mongoose.Schema({
image : String,
title : String
})
module.exports = mongoose.model("product", Product);