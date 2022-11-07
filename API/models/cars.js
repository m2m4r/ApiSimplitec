const { Sequelize, DataTypes, Model } = require("sequelize");
const db = require("../config/db");

const tokenMax = 8;
let abecedario = [ "a", "b", "c", "d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];

class Cars extends Model {}

Cars.init(
  {
    
    carId: {
      type: DataTypes.STRING,
      primaryKey: true,
    },

    brand:{
      type:DataTypes.STRING,
      allowNull:false,
    },

  
    model: {
      type: DataTypes.STRING,
      allowNull: false,
    },

    year:{
      type:DataTypes.STRING,
      allowNull:false,
    },

    tag:{

      type:DataTypes.ARRAY(DataTypes.STRING),
     
    },
    similar_to:{

      type:DataTypes.ARRAY(DataTypes.STRING),
      
    },
    price: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stock:{
      type: DataTypes.INTEGER,
      allowNull: false,

    },
    images: {
      type: DataTypes.ARRAY(DataTypes.STRING),
      
    },
  },
  {
    sequelize: db,
    modelName: "cars",
  }
);

/* Cars.addHook("beforeCreate", (car) => {
  let token = "";
  for (let i = 0; i < tokenMax; i++) {
    token +=
      abecedario[
        (Math.random() * (abecedario.length - 1)).toFixed(0).toUpperCase()
      ];
  }
  car.id = id+"_"+car.model;
}); */

/* Cars.addHook("beforeCreate", (car) => {
  const eventDayToString = car.initialDate.toString();
  const sliceToDayBefore = eventDayToString.slice(8, 11) - 1;
  const dayEvent = new Date(car.initialDate);
  car.dayBefore = new Date(dayEvent.setDate(sliceToDayBefore));
});

Cars.addHook("beforeUpdate", (car) => {
  const eventDayToString = car.initialDate.toString();
  const sliceToDayBefore = eventDayToString.slice(8, 11) - 1;
  const dayEvent = new Date(car.initialDate);
  car.dayBefore = new Date(dayEvent.setDate(sliceToDayBefore));
}); */

module.exports = Cars;
