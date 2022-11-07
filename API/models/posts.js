const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../config/db");



class Posts extends Model {}

Posts.init(
  {
    
    id: {
      type: DataTypes.STRING,
      primaryKey:true
    },
    endDate:{
        type: DataTypes.DATE,
        allowNull: false

    },
    userAlta:{
        type: DataTypes.STRING,
        allowNull:false
    }

  },
  {
    sequelize: db,
    modelName: "posts",
  }
);

module.exports = Posts;
