const db = require("../../../Models/Index");

const Product = db.product;
const Review = db.review;

// add product 
const createReview = async (req, res) => {
    let product_info = {
        Review_rating: req.body.Review_rating,
        Review_description: req.body.Review_description,
    }
    try {
        const product = await Review.create(product_info);
        res.status(201).send(product);
        console.log(product)
    } catch (err) {
        res.status(500).send({
            message: res.message || "Error while creating product"
        })
    }

}

// find all product
const getReview = async (req, res) => {
    try {
        const product = await Review.findAll({});
        res.status(200).send(product);
        console.log(product)
    } catch (err) {
        res.status(500).send({
            message: res.message || "Error while Getting product"
        })
    }
}

// find product by id
const get_ReviewById = async (req, res) => {
    try{
     let id = req.params.Review_id;
     const product = await Review.findOne({where:{Review_id:id}})
     res.status(200).send(product);
    }
    catch(err){
        res.status(500).send({
            message:err.message
        })
    }
}

// update product by id
const update_ReviewById = async (req, res) => {
    try {
        let id = req.params.Review_id;
        const product = await Review.update(req.body,{
            where: {
                Review_id: id
            }
        })
        res.status(200).send({
            message:"Product Updated",
            product:product
        });
        //console.log(product)
    } catch (err) {
        res.status(500).send({
            message: res.message || "Error while Updating product By Id"
        })
    }
}

// delete product by id 
const delete_ReviewById = async (req, res) => {
    try {
        let id = req.params.Review_id;
        const product = await Review.destroy({
            where: {
                Review_id: id
            }
        })
        res.status(200).send({
            message:"product deleted",
            product:product
        });
        //console.log(product)
    } catch (err) {
        res.status(500).send({
            message: res.message || "Error while Deleting product By Id"
        })
    }
}

// relation controller manager 

// get all review with product
const getALL_reviewWithProduct = async(req,res)=>{
    try{
        const product = await Review.findAll({
            include:[
                {
                    model:Product,
                    as:"product"
                }
            ]
        })
        res.status(200).send(product);
    }
    catch(err){
        res.status(500).send({
            message: res.message || "Error while Fetching product By Id with product"
        })
    }
}

// get review with product reverse many to one data handle 
const getReviewWithProduct = async (req,res)=>{
    try{
        let id = req.params.Review_id;
        const product = await Review.findOne({
            include:[
                {
                   model:Product,
                   as:"product"
                }
            ],
            where:{Review_id:id}
        });
        res.status(201).send(product);
    }
    catch(err){
        res.status(500).send({
            message: res.message || "Error while Fetching product By Id with product"
        })
    }
}

module.exports = {
   createReview,
   getReview,
   get_ReviewById,
   update_ReviewById,
   delete_ReviewById,
   getALL_reviewWithProduct,
   getReviewWithProduct,
};