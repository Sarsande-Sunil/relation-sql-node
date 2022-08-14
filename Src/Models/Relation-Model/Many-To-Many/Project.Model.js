module.exports = (sequelize,DataTypes)=>{
    const Project = sequelize.define("project",{
        Project_id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        Project_name:{
            type:DataTypes.STRING,
            allowNull:false,
        },
        Project_cost:{
           type:DataTypes.INTEGER,
           allowNull:false
        },
        Project_description:{
            type:DataTypes.STRING,
            allowNull:false,
        },
    },
    {
        timeStamp:true
    }
    );
    return Project;
};