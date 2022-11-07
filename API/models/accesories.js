const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../config/db");



class Accesories extends Model {}

Accesories.init(
  {
    
    id: {
      type: DataTypes.STRING,
      primaryKey: true
    },

    name:{
      type:DataTypes.STRING,
      allowNull:false,
    },
    categories:{
        type: DataTypes.ARRAY(DataTypes.STRING),

    }

  },
  {
    sequelize: db,
    modelName: "accesories",
  }
);

module.exports = Accesories;
