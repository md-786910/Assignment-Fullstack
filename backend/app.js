require("dotenv").config();
require("./Config/database").ToDoDataBase();
const express = require("express");
const app = express();
const cors = require("cors");
const todoRouters = require("./Routes/todoRoutes");
const userRoutes = require("./Routes/userRoutes");
const cookieParser = require("cookie-parser");
const auth = require("./middleware/auth");

app.use(
  cors({
    credentials: true,
    origin: true,
  })
);

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  // if (req.method === "OPTIONS") {
  //   return res.sendStatus(200);
  // }
  next();
});


app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", todoRouters);
app.use("/", userRoutes);
// app.use("/", userRoutes);

module.exports = app;
