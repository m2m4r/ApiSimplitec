const Accesories = require("../models/accesories");
const Cars = require("../models/cars");
const { Dealers, Leads } = require("../models/index");
const Posts = require("../models/posts");

exports.add = async (req, res) => {
  try{
    const newDealer = await Dealers.create(req.body);
    res.status(201).send(newDealer);
  }catch (err) {
  res.status(500);
}

};

exports.modify = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const updatedDealer = await Dealers.update(req.body, {
      where: {
        id: id,
      },
    });

    res.status(201).send(updatedDealer);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
    const {id} = req.params;
    try {
      const dealer = await Dealers.destroy({
        where: {id:id},
        include:[{model: Leads}],
        })
    
    res.status(201).send(' Delete sucessfully')
    } catch (err) {
      res.send(404);
    }
}


exports.findAll = async (req, res) => {
  try{
    const dealer = await Dealers.findAll({include:[{model: Leads}, {model: Cars}, {model: Accesories}, {model:Posts}] });
    res.send(dealer);

  }
  catch (err) {
    res.send(404);
  }
};

exports.findDealer = async (req, res) => {
  try{
    console.log(req.params)
    const { id } = req.params;
    const dealer = await Dealers.findAll({ where: {id: id}, include:[{model: Leads}, {model: Cars}, {model: Accesories}, {model:Posts}]});
    res.send(dealer);
  }
  catch(err){
    console.log(err)
    res.send(404);
  }
};

exports.findDealerWithUsers = async (req, res) => {
  try{
    const { title } = req.params;
    const dealer = await Dealers.findOne({ where: { title }, include: Leads });
    res.send(dealer);
  }catch{err}{  
    res.send(404);
  }
};



