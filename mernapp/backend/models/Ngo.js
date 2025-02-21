const mongoose = require("mongoose");

const ngoSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  registrationNumber: { type: String, required: true, unique: true }, // Unique NGO Registration Number
  role: { type: String, default: "ngo" }
});

module.exports = mongoose.model("Ngo", ngoSchema);
