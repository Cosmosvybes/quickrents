import express, { json } from "express";
const app = express();
import pkg from "body-parser";
const { urlencoded } = pkg;
import { config } from "dotenv";
config();
const port = process.env.PORT || 2000;
<<<<<<< HEAD
import { sendMail, sendApproval, sendProcessing } from "./Confirmation.js";
=======
const { sendMail, sendApproval, sendProcessing } = require("./Confirmation.js");
>>>>>>> 7caa1aa70d82ec14ed388b5f45b04d69becb6acc

import {
  newApplication,
  processApplication,
  approveApplication,
<<<<<<< HEAD
} from "./Logic.js";
=======
} = require("./Logic.js").default;
>>>>>>> 7caa1aa70d82ec14ed388b5f45b04d69becb6acc

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:1616");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Authorization",
    "Content-Type"
  );
  res.setHeader("Access-Control-Allow-Credientials", "true");
  next();
});

app.use(urlencoded({ extended: true }));
app.use(json());

// app.get("/api/admin", (req, res) => {});

app.post("/api/apartment/application", async (req, res) => {
  const { firstname, lastname, state, email } = req.body;
  try {
    const response = newApplication(firstname, lastname, state);
    const emailStatus = await sendMail(email);
    res.send({ submitted: true, response, emailStatus });
  } catch (error) {
    res.send(error);
  }
});

app.get("/api/customers", async (req, res) => {
  try {
    const data = await getCustomers();
    res.send(data);
  } catch (error) {
    res.send(error);
  }
});

app.patch("/api/process/application", async (req, res) => {
  const { id, email } = req.body;
  try {
    const data = processApplication(id);
    const emailStatus = await sendProcessing(email);
    res.send({ data, emailStatus });
  } catch (error) {
    res.send(error);
  }
});

app.patch("/api/approve/application", async (req, res) => {
  const { id, email } = req.body;
  try {
    const data = approveApplication(id);
    const approvalStatus = await sendApproval(email);
    res.send({ data, approvalStatus });
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
