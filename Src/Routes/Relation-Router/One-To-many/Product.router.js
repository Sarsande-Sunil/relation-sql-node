const ProductController = require("../../../Controllers/Relation-controller/One-To-Many/Product.Controller");

const express = require("express");

const router = express.Router();

// add product route 
router.post("/new",ProductController.createProduct);

// get all product 
router.get("/all",ProductController.getAllProduct);

// get all product by id
router.get("/:Product_id",ProductController.get_productById);

// update product by id 
router.put("/update/:Product_id",ProductController.update_productById);

// delete product by id 
router.delete("/delete/:Product_id",ProductController.delete_productById);


// relation base routing 

// get product review
router.get("/get_review/:Product_id",ProductController.getProductWith_Review);
router.get("/getall_review/:Product_id",ProductController.getALLProductWith_Review);
router.put("/update_review/:Product_id",ProductController.update_productWith_reviewByID)

module.exports = router;



