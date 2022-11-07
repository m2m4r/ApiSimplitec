const Accesories = require("../models/accesories");
const Cars = require("../models/cars");
const { Dealers, Leads } = require("../models/index");
const Posts = require("../models/posts");

exports.addCar = async (req, res) => {
  try{
    req.body['dealerId']= req.params.id
    const newCar = await Cars.create(req.body);
    res.status(201).send(newCar);
  }catch (err) {
  res.status(500);
}

};

exports.modifyCar = async (req, res) => {
  const { carId } = req.params;
  try {
    const updatedCar = await Cars.update(req.body, {where: {carId: carId,}});
    res.status(201).send(updatedCar);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.deleteCar = async (req, res) => {
    const {carId} = req.params;
    try {
      const cars = await Cars.destroy({where: {carId:carId},})
    res.status(201).send(' Delete sucessfully')
    } catch (err) {
      res.sendStatus(404);
    }
}


exports.findAllDealerCars = async (req, res) => {
  try{
    const { id } = req.params;
    const cars = await Cars.findAll({where:{dealerId:id},include:[{model: Accesories}, {model:Posts}] });
    res.send(cars);

  }
  catch (err) {
    res.sendStatus(404);
  }
};

exports.findCar = async (req, res) => {
  try{
    
    const { carId } = req.params;
    const car = await Cars.findAll({ where: {carId: carId}});
    res.send(car);
  }
  catch(err){
    console.log(err)
    res.sendStatus(404);
  }
};




