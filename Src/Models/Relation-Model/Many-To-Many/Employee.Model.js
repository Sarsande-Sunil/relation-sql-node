module.exports = (sequelize,DataTypes)=>{
    const Employee = sequelize.define("employee",{
        Employee_id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        Employee_name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        Employee_salary:{
           type:DataTypes.INTEGER,
           allowNull:false
        },
        Employee_Department:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    },
    {
        timeStamp:true
    }
    );
    return Employee;
};