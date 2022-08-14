const ReviewController = require("../../../Controllers/Relation-controller/One-To-Many/Review.controllers");

const express = require("express");

const router = express.Router();

// add product route 
router.post("/new",ReviewController.createReview);

// get all product 
router.get("/all",ReviewController.getReview);

// get all product by id
router.get("/get/:Review_id",ReviewController.get_ReviewById);

// update product by id 
router.put("/update/:Review_id",ReviewController.update_ReviewById);

// delete product by id 
router.delete("/delete/:Review_id",ReviewController.delete_ReviewById);

// relation , manager routes

// get review with product
router.get("/get_product/:Review_id",ReviewController.getReviewWithProduct);

router.get("/getall_product/:Review_id",ReviewController.getALL_reviewWithProduct);
module.exports = router;