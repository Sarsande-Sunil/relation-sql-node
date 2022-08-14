const Person_Controllers = require("../../../Controllers/Relation-controller/One-To-One/Person.Controller");

const express = require("express");

const router = express.Router();

// managing base route 
// add person 
router.post("/new",Person_Controllers.createPerson);
// get all person 
router.get("/all",Person_Controllers.getAllPerson);
// get single person by id
router.get("/get/:Person_id",Person_Controllers.get_personById);
// update person by id
router.put("/update/:Person_id",Person_Controllers.update_personById);
// delete person by id
router.delete("/delete/:Person_id",Person_Controllers.delete_personById);

// managing relation router forward Data Manipulation

// get all person with house 
router.get("/get_with_house/:Person_id",Person_Controllers.getALLPersonWith_House);
// get single person with house 
router.get("/get_single/:Person_id",Person_Controllers.getPersonWith_House);
// update person with house 
router.put("/update_with_house/:Person_id",Person_Controllers.update_personWith_houseByID);

module.exports = router;