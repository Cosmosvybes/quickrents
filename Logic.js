// import mongoose from "mongoose";
// import { config } from "dotenv";
const mongoose = require("mongoose");
const { config } = require("dotenv");
const { Customer } = require("./Model.js");
config();

mongoose.connection;
mongoose.connect(process.env.MONGO_URI);

const applicationForm = async (firstname, lastname, email, state) => {
  const data = new Customer({
    id: Math.floor(Math.random() * 765),
    firstname: firstname,
    lastname: lastname,
    email: email,
    status: "pending",
    state: state,
    year: new Date().getFullYear(),
  });

  const response = await data.save();
  return response;
};

async function getCustomers() {
  const customer = Customer.find({});
  return customer;
}

async function processApplication(id) {
  const status = Customer.findByIdAndUpdate(id, { status: "processing" });
  return status;
}
const approveApplication = (id) => {
  const status = Customer.findByIdAndUpdate(id, { status: "approved" });
  return status;
};

module.exports = {
  applicationForm,
  approveApplication,
  processApplication,
  getCustomers,
};
