const mongoose = require("mongoose");

const pharmacistSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  licenseId: { type: String, required: true, unique: true }, // Unique Pharmacy License ID
  role: { type: String, default: "pharmacist" }
});

module.exports = mongoose.model("Pharmacist", pharmacistSchema);
