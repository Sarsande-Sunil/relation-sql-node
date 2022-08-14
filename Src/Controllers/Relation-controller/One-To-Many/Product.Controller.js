const db = require("../../../Models/Index");

const Product = db.product;
const Review = db.review;

// add product 
const createProduct = async (req, res) => {
    let product_info = {
        Product_name: req.body.Product_name,
        Product_price: req.body.Product_price,
        Product_description: req.body.Product_description
    }
    try {
        const product = await Product.create(product_info);
        res.status(201).send(product);
        console.log(product)
    } catch (err) {
        res.status(500).send({
            message: res.message || "Error while creating product"
        })
    }

}

// find all product
const getAllProduct = async (req, res) => {
    try {
        const product = await Product.findAll({});
        res.status(200).send(product);
        console.log(product)
    } catch (err) {
        res.status(500).send({
            message: res.message || "Error while Getting product"
        })
    }
}

// find product by id
const get_productById = async (req, res) => {
    try{
     let id = req.params.Product_id;
     const product = await Product.findOne({where:{Product_id:id}})
     res.status(200).send(product);
    }
    catch(err){
        res.status(500).send({
            message:err.message
        })
    }
}

// update product by id
const update_productById = async (req, res) => {
    try {
        let id = req.params.Product_id;
        const product = await Product.update(req.body,{
            where: {
                Product_id: id
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
const delete_productById = async (req, res) => {
    try {
        let id = req.params.Product_id;
        const product = await Product.destroy({
            where: {
                Product_id: id
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

// managing relation controllers

// get all product with review 
const getALLProductWith_Review = async(req,res)=>{
    try{
        const product = await Product.findAll({
            include:[
                {
                    model:Review,
                    as:"review"
                }
            ]
        })
        res.status(200).send(product);
    }
    catch(err){
        res.status(500).send({
            message: res.message || "Error while Fetching product By Id with review"
        })
    }
}

// get single product with review 
const getProductWith_Review = async(req,res)=>{
    try{
        let id = req.params.Product_id;
        const product = await Product.findOne({
            include:[
                {
                   model:Review,
                   as:"review"
                }
            ],
            where:{Product_id:id}
        });
        res.status(201).send(product);
    }
    catch(err){
        res.status(500).send({
            message: res.message || "Error while Fetching product By Id with review"
        })
    }
}

// update product with review as well 
const update_productWith_reviewByID = async(req,res)=>{
    try{
     let id = req.params.Product_id;
     const product = await Product.update(req.body,{
        include:[
            {
                model:Review,
                as:"review"
            }
        ],
        where:{Product_id:id}
     })

     res.status(201).send(product);
    }
    catch(err){
        res.status(500).send({
            message: res.message || "Error while Fetching product By Id with review"
        })
    }
}

module.exports = {
    createProduct,
    getAllProduct,
    get_productById,
    update_productById,
    delete_productById,
    getALLProductWith_Review,
    getProductWith_Review,
    update_productWith_reviewByID
};