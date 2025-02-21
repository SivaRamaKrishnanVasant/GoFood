import dotenv from "dotenv";
import mongoose from "mongoose";
import nodemailer from "nodemailer";
import MedTime from "./models/MedTime.js";

dotenv.config();

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ MedTime Scheduler Connected to MongoDB"))
  .catch(err => console.error("❌ MongoDB connection error:", err));

// Email Transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS }
});

// Function to Check & Send Email Reminders
const checkAndSendReminders = async () => {
  const now = new Date();
  const nowMinutes = now.getHours() * 60 + now.getMinutes(); // Convert time to minutes
  const fiveMinutesLater = nowMinutes + 5;

  const schedules = await MedTime.find();

  schedules.forEach(({ userEmail, medicineName, intakeTimes }) => {
    intakeTimes.forEach(time => {
      const [hours, minutes] = time.split(":").map(Number);
      const scheduledMinutes = hours * 60 + minutes;

      if (scheduledMinutes === fiveMinutesLater) {
        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: userEmail,
          subject: "MedTime Reminder - Time to take your medicine",
          text: `Reminder: It's time to take your medicine: ${medicineName} at ${time}.`
        };

        transporter.sendMail(mailOptions, (error, info) => {
          if (error) console.error("❌ Email Error:", error);
          else console.log(`📧 Reminder sent to ${userEmail} for ${medicineName} at ${time}`);
        });
      }
    });
  });
};

// Run scheduler every minute
setInterval(checkAndSendReminders, 60 * 1000);
