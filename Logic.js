import { MongoClient } from "mongodb";
import { config } from "dotenv";
config();

let client = new MongoClient(process.env.MONGO_URI);

export async function newApplication(firstname, lastname, state) {
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

export async function processApplication(id) {
  return;
  //   const response = await customers.updateOne(
  //     { id: Number(id) },
  //     { $set: { status: "Processing" } }
  //   );
  //   return response;
}

export async function approveApplication(id) {
  return;
  //   const response = await customers.updateOne(
  //     { id: id },
  //     { $set: { status: "Approved" } }
  //   );
  //   return response;
}

// module.exports = {
//   newApplication,
//   processApplication,
//   approveApplication,
// };
