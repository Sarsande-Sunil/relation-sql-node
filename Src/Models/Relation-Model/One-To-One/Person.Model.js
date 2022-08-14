// building Person model 
module.exports = (sequelize,DataTypes)=>{
    const Person = sequelize.define("person",{
        Person_id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        Person_name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        Person_age:{
           type:DataTypes.INTEGER,
           allowNull:false
        },
        Person_email:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        Person_mobile_number:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    },
    {
        timeStamp:true
    });
    return Person;
};