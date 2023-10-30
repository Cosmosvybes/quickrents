import mongoose from "mongoose";
import { config } from "dotenv";
// const mongoose = require("mongoose");
// const { config } = require("dotenv");
import Customer from "./Model.js";
config();

// const db = mongoose.connection;
// mongoose.connect(process.env.MONGO_URI);
// db.on("error", (err) => {
//   if (err) console.log("Unable to connect to the database");
// });
// db.once("open", (response) => {
//   console.log("connected to mongodb");
// });

const data = new Customer({
  id: Math.floor(Math.random() * 765),
  firstname: "Ayomide",
  lastname: "chris",
  email: "alfredchrisayo@gmail.com",
  status: "Pending",
  state: "California",
  year: 2024,
});

data
  .save()
  .then((data) => {
    console.log(data);
  })
  .catch((err) => {
    console.log(err);
  });

// applyForApartment("Ayomide", "chris", "alfredchrisayo@gmail.com", "California");
