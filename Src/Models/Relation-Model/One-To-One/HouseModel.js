module.exports = (sequelize,DataTypes)=>{
    const House = sequelize.define("house",{
        House_id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        House_name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        House_price:{
           type:DataTypes.INTEGER,
           allowNull:false
        },
        House_description:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        House_location:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    },
    {
        timeStamp:true
    }
    );
    return House;
};