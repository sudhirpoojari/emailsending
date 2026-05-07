const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const dotenv = require("dotenv");
dotenv.config();
const app = express()


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true })); // Good practice if you are also receiving form data


// Nodemailer Transporter Configuration
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS, // Use Gmail App Password here
  },
});



app.post('/send-email/', async (req, res) => {

const { sendtext,toemail,Subject } = req.body;

console.log("Received data:", sendtext); // Debugging log
console.log("Received data:toemail", toemail); // Debugging log

const name= 'Sudhir';
const email = 'Test mail';
const sendsubject = Subject
const message = sendtext;
const toaddrss = toemail;

// Basic Validation
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }


  const mailOptions = {
    from: email,
    to: toaddrss,
    subject: `Contact Form: ${sendsubject}`,
    text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
    html: `
      <div style="font-family: sans-serif; padding: 20px; border: 1px solid #eee;">
        <h2 style="color: #333;">New Message from ${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <hr />
        <p style="white-space: pre-wrap;">${message}</p>
      </div>
    `,
  };


  try {
    await transporter.sendMail(mailOptions);
    res.status(200).json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    console.error("Email Error:", error);
    res.status(500).json({ success: false, message: "Failed to send email." });
  }

});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}); 
