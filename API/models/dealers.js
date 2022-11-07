const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../config/db");



class Dealers extends Model {}

Dealers.init(
  {
    
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },

    name:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    zona: {
      type: DataTypes.STRING,
      allowNull: false,
    },

  },
  {
    sequelize: db,
    modelName: "dealers",
  }
);

module.exports= Dealers
