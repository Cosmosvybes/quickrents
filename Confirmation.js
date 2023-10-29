const nodemailer = require("nodemailer");
const { config } = require("dotenv");
// const { MongoClient } = require("mongodb");

// const client = new MongoClient(
//   "mongodb+srv://cosmos:ayomide22689@cosmoscluster.o6ovlp8.mongodb.net/",
//   {
//     monitorCommands: true,
//   }
// );
// const customers = client.db("quickrents").collection("customers");
config();

// async function getCustomers() {
//   const data = await customers.find({}).toArray();
//   return data;
// }

const mailTransporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: "myquickrents@gmail.com", pass: process.env.GOOGLE_PASS },
});

async function sendMail(email) {
  const data = mailTransporter.sendMail({
    to: email,
    headers: "Application confirmation",
    subject: "Application Recieved",
    sender: " QUICK RENTS",
    html: `<div style='border:1px solid lightgrey; height:200px; border-radius:5px; 
    padding:10px 10px; text-align:center; display:block;'>
 

    <h2 style='color:black; text-align:center'> Apartment Application <h2/>
       <hr style='border-top:1px solid lightgrey'/>
    <p style='color:black'> Dear client, thank you for choosing quickrents, we excited to let you know that you 
    have successfully applied for an apartment, and your application has been recieved,
    you can proceed to pay your application fee, for quck processing, thank you. </p>  </div>
    <footer> <p> You recieved this email to let you know that you have successully initiated an application with quickrents with your email.</p> <br/> Quickrents &copy; 2023 </footer>`,
  });
  return data;
}
async function sendProcessing(email) {
  const data = mailTransporter.sendMail({
    to: email,
    headers: "Application is being process",
    subject: "Application under processing",
    sender: " QUICK RENTS",
    html: `<div style='border:1px solid lightgrey; height:200px; border-radius:5px; 
    padding:10px 10px; text-align:center; display:block;'>
 

    <h2 style='color:black; text-align:center'> Processing <h2/>
       <hr style='border-top:1px solid lightgrey'/>
    <p style='color:black'> Dear client, thank you for choosing quickrents, we excited to let you know that your
   application is being processed, and you will be notified for approval within 24hrs. </p>  </div>
    <footer> <p> You recieved this email to let you know that you have successully initiated an application with quickrents with your email.</p> <br/> Quickrents &copy; 2023 </footer>`,
  });
  return data;
}
async function sendApproval(email) {
  const data = mailTransporter.sendMail({
    to: email,
    headers: "Application confirmation",
    subject: "Application Approval",
    sender: " QUICK RENTS",
    html: `<div style='border:1px solid lightgrey; height:200px; border-radius:5px; 
    padding:10px 10px; text-align:center; display:block;'>
 

    <h2 style='color:black; text-align:center'> Application Approved <h2/>
       <hr style='border-top:1px solid lightgrey'/>
    <p style='color:black'> Dear client, we hope this message finds you in good postion, we excited to let you know that, among many other applicants 
     your application has been approved,you can proceed to pay your security fee, and choose the day of inspection for the apartment, contact the agaent as soon as you get to see this email, Thank you!. </p>  </div>
    <footer> <p> You recieved this email to let you know that you have successully initiated an application with quickrents with your email.</p> <br/> Quickrents &copy; 2023 </footer>`,
  });
  return data;
}

module.exports = { sendMail, sendApproval, sendProcessing};
