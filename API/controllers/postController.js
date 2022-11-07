const Accesories = require("../models/accesories");
const Cars = require("../models/cars");
const { Dealers, Leads } = require("../models/index");
const Posts = require("../models/posts");
const PostCar = require("../models/PostCar");

exports.add = async (req, res) => {
  try{
    
    let {carId, ...data} = req.body
    const postCar = await PostCar.create({carCarId:carId,postId:data.postId  })
    const newData = await Posts.create(data);
    res.status(201).send(newData);

  }catch (err) {
  res.status(500);
}

};

exports.modify = async (req, res) => {
  const { idPost } = req.params;
  try {
    const data = await Posts.update(req.body, {where: {id: idPost,}});
    res.status(201).send(data);
  } catch (err) {
    res.status(500).send(err);
  }
};

exports.delete = async (req, res) => {
    const {idPost} = req.params;
    try {
      const data = await Posts.destroy({where: {id:idPost},})
    res.status(201).send(' Delete sucessfully')
    } catch (err) {
      res.sendStatus(404);
    }
}


exports.findAll = async (req, res) => {
  try{
    const { id } = req.params;
    const data = await Posts.findAll({where:{dealerId:id} });
    res.send(data);

  }
  catch (err) {
    res.sendStatus(404);
  }
};

exports.find = async (req, res) => {
  try{
    
    const { idPost } = req.params;
    const data = await Posts.findAll({ where: {id: idPost}});
    res.send(data);
  }
  catch(err){
    console.log(err)
    res.sendStatus(404);
  }
};




