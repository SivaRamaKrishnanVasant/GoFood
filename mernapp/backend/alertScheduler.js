import mongoose from "mongoose";
import dotenv from "dotenv";
import nodemailer from "nodemailer";
import Medicine from "./models/Medicine.js";

dotenv.config();

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("✅ Connected to MongoDB"))
  .catch((err) => console.error("❌ MongoDB connection error:", err));

const checkExpiringMedicines = async () => {
  console.log("🚀 Starting alertScheduler.js...");
  console.log("Fetching medicines from database...");

  try {
    const allMedicines = await Medicine.find();
    console.log("All medicines:", allMedicines);

    const today = new Date();
    const sixMonthsLater = new Date();
    sixMonthsLater.setMonth(today.getMonth() + 6);
    console.log("Checking for expiry before:", sixMonthsLater.toISOString());

    const expiringMedicines = allMedicines.filter((med) => {
      console.log(`Medicine: ${med.name}, Expiry: ${med.expiryDate}`);
      return new Date(med.expiryDate) <= sixMonthsLater;
    });

    console.log("Expiring medicines:", expiringMedicines);

    if (expiringMedicines.length > 0) {
      console.log("📩 Sending email alert...");

      // Email content
      let emailBody = "The following medicines are expiring soon:\n\n";
      expiringMedicines.forEach((med) => {
        emailBody += `- ${med.name} (Expiry: ${new Date(med.expiryDate).toDateString()})\n`;
      });

      // Email configuration
      let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "22eg110b22@anurag.edu.in",  // Your email
          pass:   "cpfz ycjm rrfu hyil" // App password
        }
      });

      let mailOptions = {
        from: process.env.EMAIL_USER,
        to: "22eg110b22@anurag.edu.in",  // Change to your recipient email
        subject: "📢 MedAware Alert: Expiring Medicines",
        text: emailBody
      };

      // Send email
      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.error("❌ Email sending failed:", error);
        } else {
          console.log("✅ Email sent successfully:", info.response);
        }
      });
    } else {
      console.log("✅ No medicines are expiring soon.");
    }
  } catch (error) {
    console.error("❌ Error fetching medicines:", error);
  } finally {
    mongoose.connection.close();
  }
};

checkExpiringMedicines();
