const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { config } = require("dotenv");
config();
const port = process.env.PORT;
const { sendMail, sendApproval, sendProcessing } = require("./Confirmation");
const {
  newApplication,
  getCustomers,
  processApplication,
  approveApplication,
} = require("./renters");

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

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/admin", (req, res) => {});

app.post("/api/apartment/application", async (req, res) => {
  const { firstname, lastname, state, email } = req.body;
  try {
    const response = await newApplication(firstname, lastname, state);
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
    const data = await processApplication(id);
    const emailStatus = await sendProcessing(email);
    res.send({ data, emailStatus });
  } catch (error) {
    res.send(error);
  }
});

app.patch("/api/approve/application", async (req, res) => {
  const { id, email } = req.body;
  try {
    const data = await approveApplication(id);
    const approvalStatus = await sendApproval(email);
    res.send({ data, approvalStatus });
  } catch (error) {
    res.send(error);
  }
});

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
