const { DataTypes, Model } = require("sequelize");
const db = require("../config/db");
const bcrypt = require("bcrypt");

class Leads extends Model {
  setHash(password, salt) {
    return bcrypt.hash(password, salt);
  }
}

Leads.init(
  {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        isEmail: true,
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    salt: {
      type: DataTypes.STRING,
    },

    favorites:{
      type:DataTypes.ARRAY(DataTypes.STRING),
    },


  },
  {
    sequelize: db,
    modelName: "leads",
  }
);



Leads.addHook("beforeCreate", async(lead) => {
  return bcrypt
    .genSalt(16)
    .then((salt) => {
      user.salt = salt;
      return user.setHash(user.password, lead.salt);
    })
    .then((hashedPassword) => (user.password = hashedPassword));
});

module.exports = Leads;
