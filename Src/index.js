const express = require("express");

const cors = require("cors");
const helmet = require("helmet");

// adding extra security for app by vulnerable attack done by server side application 
// ex click jacking http security policy tsl security etc  

// get router 1:1 relation 
const personRouter = require("./Routes/Relation-Router/One-To-One/Person_Routes");
const houseRouter = require("./Routes/Relation-Router/One-To-One/House_Router")
// get router 1:M relation 
const productRouter = require("./Routes/Relation-Router/One-To-many/Product.router");
const reviewRouter = require("./Routes/Relation-Router/One-To-many/Review.Router");


const app = express();

require("dotenv").config();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({extended:false}))
app.use(helmet())

// call router here 1:1 relation 
app.use("/api/v3/person",personRouter);
app.use("/api/v4/house",houseRouter);

// call router here 1:M relation 
app.use("/api/v1/products",productRouter);
app.use("/api/v2/reviews",reviewRouter);


const PORT = process.env.PORT || 3000;


app.listen(PORT,()=>{
    console.log(`app is running on ${PORT}`)
});
