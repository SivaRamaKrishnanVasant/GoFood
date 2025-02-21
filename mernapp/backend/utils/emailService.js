const nodemailer = require("nodemailer");
require("dotenv").config();

const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL_USER, // Your Gmail
        pass: process.env.EMAIL_PASS, // App Password (not regular password)
    },
});

const sendEmail = async (to, subject, text) => {
    try {
        await transporter.sendMail({
            from: `"MedAware Alerts" <${process.env.EMAIL_USER}>`,
            to,
            subject,
            text,
        });
        console.log(`Email sent to ${to}`);
    } catch (error) {
        console.error("Error sending email:", error);
    }
};

module.exports = sendEmail;
