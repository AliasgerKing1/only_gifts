const routes = require("express").Router();

routes.use("/api/product", require("../controller/ProductController"));
routes.use("/api/company", require("../controller/CompanyController"));
routes.use("/api/category", require("../controller/CategoryController"));
routes.use("/api/admin", require("../controller/AdminController"));

module.exports = routes;