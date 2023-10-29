const { MongoClient } = require("mongodb");
const { config } = require("dotenv");
config();
const mongo_url = process.env.MONGO_URL;
const client = new MongoClient(mongo_url);

const customers = client.db("quickrents").collection("customers");

async function newApplication(firstname, lastname, state) {
  const response = await customers.insertOne({
    id: Math.floor((Math.random() * 765)),
    firstname: firstname,
    lastname: lastname,
    state: state,
    status: "Pending",
    year: new Date().getFullYear(),
  });
  return response;
}

async function getCustomers() {
  const data = await customers.find({}).toArray();
  return data;
}

async function processApplication(id) {
  const response = await customers.updateOne(
    { id: Number(id) },
    { $set: { status: "Processing" } }
  );
  return response;
}

async function approveApplication(id) {
  const response = await customers.updateOne(
    { id: id },
    { $set: { status: "Approved" } }
  );
  return response;
}

module.exports = {
  getCustomers,
  newApplication,
  processApplication,
  approveApplication,
};
