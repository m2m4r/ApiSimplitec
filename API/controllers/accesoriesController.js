const Accesories = require("../models/accesories");
const Cars = require("../models/cars");
const { Dealers, Leads } = require("../models/index");
const Posts = require("../models/posts");

exports.add = async (req, res) => {
  try{
    req.body['dealerId']= req.params.id
    const newData = await Accesories.create(req.body);
    res.status(201).send(newData);
  }catch (err) {
  res.status(500);
}

};

exports.modify = async (req, res) => {
  const { idAcc } = req.params;
  try {
    const updated = await Accesories.update(req.body, {where: {id: idAcc,}});
    res.status(201).send(updated);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
    const {idAcc} = req.params;
    try {
      const accesories = await Accesories.destroy({where: {id:idAcc},})
    res.status(201).send(' Delete sucessfully')
    } catch (err) {
      res.sendStatus(404);
    }
}


exports.findAll = async (req, res) => {
  try{
    const { id } = req.params;
    const accesories = await Accesories.findAll({where:{dealerId:id}});
    res.send(accesories);

  }
  catch (err) {
    res.sendStatus(404);
  }
};

exports.find = async (req, res) => {
  try{
    
    const { idAcc } = req.params;
    const accesories = await Accesories.findAll({ where: {id: idAcc}});
    res.send(accesories);
  }
  catch(err){
    console.log(err)
    res.sendStatus(404);
  }
};




