const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const PORT = 3000;

app.use(express.json());  // Middleware to parse JSON bodies

const transporter = nodemailer.createTransport({
  service: 'gmail',  // Use Gmail or another service
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
});

app.post('/create-swarm', async (req, res) => {
  const { description, link, startTime, endTime } = req.body;

  // Logic to store the swarm details (you might use a database)

  const mailOptions = {
    from: 'your-email@gmail.com',
    to: 'team-member-email@example.com',
    subject: 'New Swarm Created',
    text: `A new swarm has been created: ${description} - More details: ${link}`
  };

  try {
    await transporter.sendMail(mailOptions);
    res.status(201).send("Swarm created and notification sent");
  } catch (error) {
    res.status(500).send("Failed to send notification");
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
