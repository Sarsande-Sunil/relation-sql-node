const db = require("../../../Models/Index");

const Person = db.person;
const House = db.house;

// add House
const createHouse = async (req, res) => {
    let House_info = {
        House_name: req.body.House_name,
        House_price: req.body.House_price,
        House_description: req.body.House_description,
        House_location:req.body.House_location
    }
    try {
        const house = await House.create(House_info);
        res.status(201).send(house);
        console.log(house)
    } catch (err) {
        res.status(500).send({
            message: res.message || "Error while creating house"
        })
    }

}

// find all house
const getAllHouse = async (req, res) => {
    try {
        const house = await House.findAll({});
        res.status(200).send(house);
        console.log(house)
    } catch (err) {
        res.status(500).send({
            message: res.message || "Error while Getting house"
        })
    }
}

// find house by id
const get_HouseById = async (req, res) => {
    try{
     let id = req.params.House_id;
     const house = await House.findOne({where:{House_id:id}})
     res.status(200).send(house);
    }
    catch(err){
        res.status(500).send({
            message:err.message || "Error while Getting house by id"
        })
    }
}

// update House by id
const update_HouseById = async (req, res) => {
    try {
        let id = req.params.House_id;
        const house = await House.update(req.body,{
            where: {
                House_id: id
            }
        })
        res.status(200).send({
            message:"House Updated",
            house:house
        });
        //console.log(product)
    } catch (err) {
        res.status(500).send({
            message: res.message || "Error while Updating house By Id"
        })
    }
}

// delete house by id 
const delete_HouseById = async (req, res) => {
    try {
        let id = req.params.House_id;
        const house = await House.destroy({
            where: {
                House_id: id
            }
        })
        res.status(200).send({
            message:"house deleted",
            house:house
        });
        //console.log(product)
    } catch (err) {
        res.status(500).send({
            message: res.message || "Error while Deleting house By Id"
        })
    }
}

// managing relation controllers with reverse data manipulation

// get all house with review 
const getALLHouseWith_Person = async(req,res)=>{
    try{
        const house = await House.findAll({
            include:[
                {
                    model:Person,
                    as:"person"
                }
            ]
        })
        res.status(200).send(house);
    }
    catch(err){
        res.status(500).send({
            message: res.message //|| "Error while Fetching house By Id with Person"
        })
    }
}

// get single product with review 
const getHouseWith_Person = async(req,res)=>{
    try{
        let id = req.params.House_id;
        const house = await House.findOne({
            include:[
                {
                   model:Person,
                   as:"person"
                }
            ],
            where:{House_id:id}
        });
        res.status(201).send(house);
    }
    catch(err){
        res.status(500).send({
            message: res.message || "Error while Fetching house By Id with person"
        })
    }
}

// update product with review as well 
const update_HouseWith_Person_ByID = async(req,res)=>{
    try{
     let id = req.params.House_id;
     const house = await House.update(req.body,{
        include:[
            {
                model:Person,
                as:"person"
            }
        ],
        where:{House_id:id}
     })

     res.status(201).send(house);
    }
    catch(err){
        res.status(500).send({
            message: res.message || "Error while Updating house By Id with person"
        })
    }
}

module.exports = {
  createHouse,
  getAllHouse,
  get_HouseById,
  update_HouseById,
  delete_HouseById,
  getALLHouseWith_Person,
  getHouseWith_Person,
  update_HouseWith_Person_ByID
};