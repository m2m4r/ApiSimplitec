const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../config/db");



class PostsCar extends Model {}

PostsCar.init(
  {
    
    id: {
      type: DataTypes.STRING,
      primaryKey:true
    },
  },
  {
    sequelize: db,
    modelName: "postCar",
  }
);

module.exports = PostsCar;
