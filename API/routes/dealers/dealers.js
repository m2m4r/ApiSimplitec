const express = require("express");
const router = express.Router();
const dealersController = require("../../controllers/dealers");
const carController = require("../../controllers/carController");
const accesoriesController = require("../../controllers/accesoriesController")
const postController = require("../../controllers/postController")
const leadsController = require("../../controllers/leadsController")

/* Dealers búsqueda*/

router.get("", dealersController.findAll);
router.get("/:id", dealersController.findDealer);
router.post("/:id", dealersController.add);
router.put("/:id", dealersController.modify);
router.delete("/:id", dealersController.delete);

/* Dealers búsqueda vehicle*/

router.route("/:id/vehicules/")
.all(function (req, res, next) {
    next()
  })
.get(carController.findAllDealerCars)


router.route("/:id/vehicules/:carId")
.all(function (req, res, next) {
    next()
  })
.get(carController.findCar)
.put(carController.modifyCar)
.post(carController.addCar)
.delete(carController.deleteCar)

/* Dealers búsqueda accesorios*/

router.route("/:id/accessories/")
.all(function (req, res, next) {
  next()
})
.get(carController.findAllDealerCars)

router.route("/:id/accessories/:idAcc")
.all(function (req, res, next) {
    next()
  })
.get(accesoriesController.find)
.put(accesoriesController.modify)
.post(accesoriesController.add)
.delete(accesoriesController.delete)


/* Dealers búsqueda posts*/

router.route("/:id/posts/:idPost")
.all(function (req, res, next) {
    next()
  })
.get(postController.find)
.put(postController.modify)
.post(postController.add)
.delete(postController.delete)

router.route("/:id/leads/")
.get(leadsController.findAll)
.post(leadsController.register)
.delete(leadsController.delete)






/* Dealers filtro */


/* router.get("/{id}/vehicles/{id}", dealersController.findToken);
router.get("/{id}/accessories/{id}", dealersController.findToken);

router.get("/{id}/posts/{id}", dealersController.findToken);
router.get("/{id}/posts/search?text=”post title | vehicle name | accessory name”", dealersController.findToken); */

/* Leads* revisar este/

router.get("/{id}/leads", dealers.findToken);
router.post("/{id}/leads", dealers.findToken);
*/

module.exports = router;