const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const twilio = require('twilio');
require("dotenv").config();

// Use environment variables
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

// Mock database (For Lambda, use DynamoDB instead)
let users = [];

// Register API
router.post('/register', async (req, res) => {
  const { email, password } = req.body;

  const existingUser = users.find(u => u.email === email);
  if (existingUser) return res.status(400).send("Email already registered.");

  const hashedPassword = await bcrypt.hash(password, 10);
  users.push({ email, password: hashedPassword });

  res.status(201).send("User registered successfully.");
});

// Login API
router.post('/login', async (req, res) => {
  const { email, password } = req.body;

  const user = users.find(u => u.email === email);
  if (user && await bcrypt.compare(password, user.password)) {
    res.send("User logged in successfully.");
  } else {
    res.status(401).send("Invalid credentials.");
  }
});

// Contact Form API
router.post('/contact', (req, res) => {
  const { name, email, phone, comments } = req.body;
  const messageBody = `New contact form submission:\nName: ${name}\nEmail: ${email}\nPhone: ${phone}\nMessage: ${comments}`;

  client.messages.create({
    body: messageBody,
    to: process.env.RECEIVER_PHONE,  
    from: process.env.TWILIO_PHONE 
  })
  .then(() => res.status(200).send("Message sent successfully."))
  .catch((error) => res.status(500).send("Failed to send message."));
});

// Careers Notification API
router.post('/notify-careers', (req, res) => {
  const { email } = req.body;
  const messageBody = `New career update notification for: ${email}`;

  client.messages.create({
    body: messageBody,
    to: process.env.RECEIVER_PHONE,
    from: process.env.TWILIO_PHONE
  })
  .then(() => res.status(200).json({ message: "Notification sent successfully." }))
  .catch((error) => res.status(500).json({ message: "Failed to send notification." }));
});

module.exports = router;
