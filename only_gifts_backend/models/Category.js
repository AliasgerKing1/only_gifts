require("../config/database")
const mongoose = require("mongoose");

const Category = mongoose.Schema({
image : String,
category : String
})
module.exports = mongoose.model("category", Category);