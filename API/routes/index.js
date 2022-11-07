const express = require("express");
const router = express.Router();
const dealers = require("./dealers/dealers")


router.use("/dealer", dealers);



module.exports = router;
