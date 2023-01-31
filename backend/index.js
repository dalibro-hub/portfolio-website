/* eslint-disable no-console */
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const nodemailer = require("nodemailer");
require("dotenv").config();

const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
const PORT = process.env.PORT ?? 3010;

const transporter = nodemailer.createTransport({
  host: "smtp.office365.com",
  port: 587,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});
app.post("/", (req, res) => {
  const { name, phone, mail, message } = req.body;
  transporter.sendMail(
    {
      from: "locketman5@outlook.com",
      to: "dalibor.n.jaksic@gmail.com",
      subject: "Contact from portfolio website",
      text: `NAME: ${name}\nPHONE: ${phone}\nEMAIL: ${mail}\nMESSAGE: ${message}`,
    },
    (error) => {
      if (error) {
        res.status(500).send("An error occurred while sending the email");
      } else {
        res.status(200).send("Email sent successfully");
      }
    }
  );
});
app.get("/", (req, res) => {
  res.send("Server is running");
});
app.listen(PORT, (error) => {
  if (error) {
    throw new Error("An error occurred while starting the server");
  } else {
    console.log(`Server is listening on port ${PORT}`);
  }
});
