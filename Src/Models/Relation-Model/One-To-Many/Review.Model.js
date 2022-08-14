module.exports = (sequelize,DataTypes)=>{
    const Review = sequelize.define("review",{
        Review_id:{
            type:DataTypes.INTEGER,
            autoIncrement:true,
            allowNull:false,
            primaryKey:true
        },
        Review_rating:{
            type:DataTypes.INTEGER,
            allowNull:false
        },
        Review_description:{
          type:DataTypes.STRING,
          allowNull:false
        }
    },
    {
        timeStamp:true
    }
    );
    return Review;
};