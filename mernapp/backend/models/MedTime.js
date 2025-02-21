const mongoose = require("mongoose");

const medTimeSchema = new mongoose.Schema({
  userEmail: { type: String, required: true },
  medicineName: { type: String, required: true },
  timesPerDay: { type: Number, required: true },
  intakeTimes: { type: [String], required: true }, // Array of time strings (e.g., ["08:00", "14:00"])
});

const MedTime = mongoose.model("MedTime", medTimeSchema);
module.exports = MedTime;
