require("../config/database")
const mongoose = require("mongoose");

const Product = mongoose.Schema({
image : String,
title : String,
category : String,
})
module.exports = mongoose.model("product", Product);