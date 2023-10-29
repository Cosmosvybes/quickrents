import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();

let client = new MongoClient(process.env.MONGO_URI);

export function newApplication(firstname, lastname, state) {
  return;
  //   const response = await customers.insertOne({
  //     id: Math.floor(Math.random() * 765),
  //     firstname: firstname,
  //     lastname: lastname,
  //     state: state,
  //     status: "Pending",
  //     year: new Date().getFullYear(),
  //   });
  //   return response;
}

export function processApplication(id) {
  return;
  //   const response = await customers.updateOne(
  //     { id: Number(id) },
  //     { $set: { status: "Processing" } }
  //   );
  //   return response;
}

export function approveApplication(id) {
  return;
  //   const response = await customers.updateOne(
  //     { id: id },
  //     { $set: { status: "Approved" } }
  //   );
  //   return response;
}

export default {
  newApplication,
  processApplication,
  approveApplication,
};
