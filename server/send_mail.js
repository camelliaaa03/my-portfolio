// Backend (Node.js dengan Express)
const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.json());

app.post("/send-email", (req, res) => {
  const { name, email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "camelliaalfina@gmail.com",
      pass: "Camelliaaa123",
    },
  });

  const mailOptions = {
    from: "your-email@gmail.com",
    to: "recipient-email@example.com",
    subject: "New Contact Form Submission",
    text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error(error);
      res.status(500).json({ success: false, message: "Error sending email" });
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).json({ success: true, message: "Email sent successfully" });
    }
  });
});

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
