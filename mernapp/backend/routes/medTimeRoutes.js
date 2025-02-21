const express = require("express");
const MedTime = require("../models/MedTime");

const router = express.Router();

router.post("/add", async (req, res) => {
  try {
    const { medicineName, timesPerDay, intakeTimes, userEmail } = req.body;

    // Validate request data
    if (!medicineName || !timesPerDay || !intakeTimes.length || !userEmail) {
      return res.status(400).json({ success: false, error: "All fields are required" });
    }

    // Create a new reminder
    const newReminder = new MedTime({
      medicineName,
      timesPerDay,
      intakeTimes,
      userEmail,
    });

    await newReminder.save();
    res.status(201).json({ success: true, message: "Reminder set successfully!" });

  } catch (error) {
    console.error("Error setting reminder:", error);
    res.status(500).json({ success: false, error: "Server error. Please try again." });
  }
});

module.exports = router;
