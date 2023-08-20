require("../config/database")
const mongoose = require("mongoose");

const Company = mongoose.Schema({
image : String,
company : String
})
module.exports = mongoose.model("company", Company);