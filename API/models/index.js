const { Sequelize, DataTypes, Model } = require("sequelize");
const Role = require("./role");
const Leads = require("./leads");
const Cars = require("./cars");
const Dealers = require("./dealers");
const Accesories = require ("./accesories")
const Posts = require ("./posts")
const PostCar = require("./PostCar")


// Accesories->Cars
Cars.hasMany(Accesories);
//Dealers->Cars
Dealers.hasMany(Accesories);
// Dealers->Cars
Dealers.hasMany(Cars);
// Dealer -> posts
Dealers.hasMany(Posts);
// Dealer -> leads
Dealers.hasMany(Leads);
// many to many Posts <-> Cars

Posts.belongsToMany(Cars, { through: PostCar });
Cars.belongsToMany(Posts, { through: PostCar });
PostCar.belongsTo(Posts);
PostCar.belongsTo(Cars);
Cars.hasMany(PostCar,  {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
  });
Posts.hasMany(PostCar,  {
    onDelete: 'RESTRICT',
    onUpdate: 'RESTRICT'
  });





module.exports = { Leads, Role , Dealers, Cars, Accesories, PostCar, Posts};
