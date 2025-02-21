require("dotenv").config();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
    },
});

const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER, // Send a test email to yourself
    subject: "MedAware Test Email",
    text: "This is a test email from MedAware Alerts!",
};

transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log("Error sending email:", error);
    } else {
        console.log("Email sent:", info.response);
    }
});
