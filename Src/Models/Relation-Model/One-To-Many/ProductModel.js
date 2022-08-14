module.exports = (sequelize,DataTypes)=>{
    const Product = sequelize.define("product",{
        Product_id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        Product_name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        Product_price:{
           type:DataTypes.INTEGER,
           allowNull:false
        },
        Product_description:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    },
    {
        timeStamp:true
    }
    );
    return Product;
};