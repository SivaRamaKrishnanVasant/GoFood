const mongoose = require("mongoose");

const medicineSchema = new mongoose.Schema({
    name: { type: String, required: true },
    company: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    manufactureDate: { type: Date, required: true },
    purchaseDate: { type: Date, required: true },
    expiryDate: { type: Date, required: true }
});

module.exports = mongoose.model("Medicine", medicineSchema);
