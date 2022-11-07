const { Leads, Role } = require("../models");
const express = require("express");
const router = express.Router();
const tokenControl = require('../config/token')
const passwordControl = require('../config/validate')
const validateCookie = require('../middleware/auth')



exports.register = async (req, res) => {
  const newUser = await Leads.create(req.body);
  res.status(201).send(newUser);
};

router.post("/login", async (req, res) => {
  try{
  const { email, password , name} = req.body;
  const lead=  await Leads.findOne({where: { email }})
  const isValid= passwordControl.validatePassword(password, lead.salt)

  if (!isValid){
    res.send(401)
  }
  else{
    token = tokenControl.generateToken(email,name)
    res.cookie("token", token);

  }
}
catch(err){

  res.send(401)
}
  
  ;
});

exports.update = async (req, res) => {
  try {
    const actualizedUser = await Leads.update(req.body, {
      where: { id: req.user.id },
    });
    res.status(201).send(actualizedUser);
  } catch (err) {
    res.send(err);
  }
};

exports.logOut = async (req, res) => {

  res.clearCookie("token").sendStatus(204)
  
};

exports.findAll = async (req, res) => {
  try{
    const { id } = req.params;
    const data = await Leads.findAll({where:{dealerId:id} });
    res.send(data);

  }
  catch (err) {
    res.sendStatus(404);
  }
};

router.get("/me", validateCookie, (req, res) => {
  res.send(req.user);
});

exports.delete = async (req, res) => {
  try {
    const user = await Leads.destroy({
      where: { id: req.params.id },
      new: true,
    });
    res.status(200).send(`Success DELETING user`);
  } catch (err) {
    res.status(500).send(err);
  }
};
