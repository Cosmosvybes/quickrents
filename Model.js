const mongoose = require("mongoose");
// import mongoose from "mongoose";
const Schema = mongoose.Schema;
const CustomerSchema = new Schema(
  {
    id: Number,
    firstname: String,
    lastname: String,
    email: String,
    state: String,
    status: String,
    year: Number,
  },
  { collection: "customer" }
);
const Customer = mongoose.model("Customer", CustomerSchema);
module.exports = { Customer };
