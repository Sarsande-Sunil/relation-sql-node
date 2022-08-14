const db = require("../../../Models/Index");

const Person = db.person;
const House = db.house;

// add person
const createPerson = async (req, res) => {
    let person_info = {
        Person_name: req.body.Person_name,
        Person_age: req.body.Person_age,
        Person_email: req.body.Person_email,
        Person_mobile_number:req.body.Person_mobile_number
    }
    try {
        const person = await Person.create(person_info);
        res.status(201).send(person);
        console.log(person)
    } catch (err) {
        res.status(500).send({
            message: res.message //|| "Error while creating person"
        })
    }

}

// find all person
const getAllPerson = async (req, res) => {
    try {
        const person = await Person.findAll({});
        res.status(200).send(person);
        console.log(person)
    } catch (err) {
        res.status(500).send({
            message: res.message || "Error while Getting person"
        })
    }
}

// find product by id
const get_personById = async (req, res) => {
    try{
     let id = req.params.Person_id;
     const person = await Person.findOne({where:{Person_id:id}})
     res.status(200).send(person);
    }
    catch(err){
        res.status(500).send({
            message:err.message || "Error while Getting person by id"
        })
    }
}

// update product by id
const update_personById = async (req, res) => {
    try {
        let id = req.params.Person_id;
        const person = await Person.update(req.body,{
            where: {
                Person_id: id
            }
        })
        res.status(200).send({
            message:"Person Updated",
            person:person
        });
        //console.log(product)
    } catch (err) {
        res.status(500).send({
            message: res.message || "Error while Updating person By Id"
        })
    }
}

// delete product by id 
const delete_personById = async (req, res) => {
    try {
        let id = req.params.Person_id;
        const person = await Person.destroy({
            where: {
                Person_id: id
            }
        })
        res.status(200).send({
            message:"person deleted",
            person:person
        });
        //console.log(product)
    } catch (err) {
        res.status(500).send({
            message: res.message || "Error while Deleting person By Id"
        })
    }
}

// managing relation controllers

// get all person with review 
const getALLPersonWith_House = async(req,res)=>{
    try{
        const person = await Person.findAll({
            include:[
                {
                    model:House,
                    as:"house"
                }
            ]
        })
        res.status(200).send(person);
    }
    catch(err){
        res.status(500).send({
            message: res.message || "Error while Fetching person By Id with house"
        })
    }
}

// get single product with review 
const getPersonWith_House = async(req,res)=>{
    try{
        let id = req.params.Person_id;
        const person = await Person.findOne({
            include:[
                {
                   model:House,
                   as:"house"
                }
            ],
            where:{Person_id:id}
        });
        res.status(201).send(person);
    }
    catch(err){
        res.status(500).send({
            message: res.message || "Error while Fetching person By Id with house"
        })
    }
}

// update product with review as well 
const update_personWith_houseByID = async(req,res)=>{
    try{
     let id = req.params.Person_id;
     const person = await Person.update(req.body,{
        include:[
            {
                model:House,
                as:"house"
            }
        ],
        where:{Person_id:id}
     })

     res.status(201).send(person);
    }
    catch(err){
        res.status(500).send({
            message: res.message || "Error while Updating person By Id with house"
        })
    }
}

module.exports = {
   createPerson,
   getAllPerson,
   get_personById,
   update_personById,
   delete_personById,
   getALLPersonWith_House,
   getPersonWith_House,
   update_personWith_houseByID
};