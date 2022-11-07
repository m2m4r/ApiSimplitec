const express = require("express");
const morgan = require("morgan");
const helmet = require("helmet");
const cors = require("cors");
const volleyball = require("volleyball");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const db = require("./config/db");
const routes = require("./routes");
const { send } = require("process");
const app = express();
const dotenv = require('dotenv');

dotenv.config();

app.use(volleyball);
app.use(morgan("tiny"));
app.use(helmet());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

process.on("uncaughtException", (error, origin) => {
  console.log("----- Uncaught exception -----");
  console.log(error);
  console.log("----- Exception origin -----");
  console.log(origin);
});

process.on("unhandledRejection", (reason, promise) => {
  console.log("----- Unhandled Rejection at -----");
  console.log(promise);
  console.log("----- Reason -----");
  console.log(reason);
});

app.use(express.static("../src"));
app.use(express.static("public"));

app.use(
  session({
    secret: "simplitec",
    resave: true,
    saveUninitialized: true,
  })
);



app.use("/api", routes);

app.use((err, req, res, next) => {
  res.status(500).send(err.message);
});

app.use((err, req, res, next) => {
  res.status(404).send(err.message);
});



db.sync({ force: false }).then(() => {
  app.listen(process.env.PORT , () => {
    console.log(process.env.PORT)
  });
  
});
