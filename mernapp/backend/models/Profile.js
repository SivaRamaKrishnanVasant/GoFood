const mongoose = require("mongoose");

const ProfileSchema = new mongoose.Schema({
    userId: { type: String, required: true, unique: true },
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    phoneNumber: { type: String, required: true },
    age: { type: Number, required: true },
    address: { type: String, required: true },
    pincode: { type: String, required: true },
    state: { type: String, required: true },
    country: { type: String, required: true }
});

module.exports = mongoose.model("Profile", ProfileSchema);
