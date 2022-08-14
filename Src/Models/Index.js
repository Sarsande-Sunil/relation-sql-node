const dbConfig = require("../Config/Db");

const {Sequelize, DataTypes} = require("sequelize");

const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD, {
        host: dbConfig.HOST,
        dialect: dbConfig.dialect,
        operatorsAliases: false,
        pool: {
            max: dbConfig.pool.max,
            min: dbConfig.pool.min,
            acquire: dbConfig.pool.acquire,
            idle: dbConfig.pool.idle

        }
    }
)

sequelize.authenticate()
.then(() => {
    console.log('Database connected successfully');
})
.catch(err => {
    console.log('Error'+ err)
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;

// get all module here

// customer and house model 
db.person = require("./Relation-Model/One-To-One/Person.Model")
(sequelize,DataTypes);

db.house = require("./Relation-Model/One-To-One/HouseModel")
(sequelize,DataTypes);

// product and review  model
db.product = require("./Relation-Model/One-To-Many/ProductModel")
(sequelize,DataTypes);

db.review = require("./Relation-Model/One-To-Many/Review.Model")
(sequelize,DataTypes);

// employee and project module 
db.employee = require("./Relation-Model/Many-To-Many/Employee.Model")
(sequelize,DataTypes)

db.project = require("./Relation-Model/Many-To-Many/Project.Model")
(sequelize,DataTypes)

// Building Relationship model

// 1 to one 1:1 relationship model 
db.person.hasOne(db.house,{
    foreignKey:"person_id",
    as:"house"
})
db.house.belongsTo(db.person,{
    foreignKey:"person_id",
    as:"house"
})

// 1 to many 1:M
db.product.hasMany(db.review,{
    foreignKey:"product_id",
    as:"review"
})

db.review.belongsTo(db.product,{
    foreignKey:"product_id",
    as:"product"
})

// M:M many to many relation 
db.employee.belongsToMany(db.project,{

})

db.project.belongsToMany(db.employee,{
    
})


db.sequelize.sync({force:false})
.then(()=>{
    console.log("Drop and rsync-DB")
})
.catch((err)=>{
  console.log("database sync error",err)
})


module.exports = db;