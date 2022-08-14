const House_Controllers = require("../../../Controllers/Relation-controller/One-To-One/House.Controller");

const express = require("express");

const router = express.Router();

// managing base route 

// add house
router.post("/new",House_Controllers.createHouse);
// get all house 
router.get("/all",House_Controllers.getAllHouse);
// get single house by id
router.get("/get/:House_id",House_Controllers.get_HouseById);
// update house by id
router.put("/update/:House_id",House_Controllers.update_HouseById);
// delete house by id
router.delete("/delete/:House_id",House_Controllers.delete_HouseById);

// managing relation router with reverse data manipulation

// get all house with person 
router.get("/get_with_person/:House_id",House_Controllers.getALLHouseWith_Person);
// get single person with house 
router.get("/get_single/:House_id",House_Controllers.getHouseWith_Person);
// update person with house 
router.put("/update_with_person/:House_id",House_Controllers.update_HouseWith_Person_ByID);



module.exports = router;