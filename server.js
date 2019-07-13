const express = require("express");
require("dotenv").config();
const apiRoutes = require("./routes/api");
const authRoutes = require("./routes/authRoutes");
const mongoose = require("mongoose");
const nodemailer = require("nodemailer");

const app = express();
const PORT = process.env.PORT || 3001;
const EMAIL_PASS = process.env.EMAIL_PASS;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(apiRoutes);
app.use(authRoutes);

mongoose.connect(
    process.env.MONGODB_URI || "mongodb://localhost/maintenancemanager",
    { useNewUrlParser: true }
  );

app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});

app.post("/sendemail/", (req, res) => {
  console.log("email sent");
  const output = `
    <h3> You have a new request. </h3>
    <ul>
      <li> Name: ${req.body.name} </li>
      <li> Zone: ${req.body.zone} </li>
      <li> Department: ${req.body.department} </li>
      <li> Room: ${req.body.room} </li>
      <li> Severity: ${req.body.severity} </li>
      <li> Notes: ${req.body.note} </li>
    <ul>
  `
  let transporter = nodemailer.createTransport({
    host: "smtp.comcast.net",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: "paigeproctor@comcast.net",
      pass: EMAIL_PASS
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  let mailOptions = {
    from: '"Maintenance Manager" <paigeproctor@comcast.net>',
    to: "paige.lieske@inhealth.us",
    subject: "Maintenance Request",
    text: "You have a new maintenace request",
    html: output
  };

  transporter.sendMail(mailOptions, (err, info) => {
    if (err) {
      return console.log(err);
    }
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info))
  });
});