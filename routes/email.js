const emailRoute = require("express").Router();
const nodemailer = require("nodemailer");
const EMAIL_PASS = process.env.EMAIL_PASS;

emailRoute.route("/sendemail")
    .post((req, res) => {
        console.log("back end email sent");
        const output = `
      <h3> You have a new maintenance request. </h3>
      <ul>
        <li> Zone: ${req.body.zone} </li>
        <li> Department: ${req.body.department} </li>
        <li> Room: ${req.body.room} </li>
        <li> Problem: ${req.body.problem} </li>
        <li> Severity: ${req.body.severity} </li>
        <li> Notes: ${req.body.note} </li>
      <ul>
    `
        let transporter = nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: "gtmaintenanceman@gmail.com",
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
            res.sendStatus(200);
        });
    });

module.exports = emailRoute;