const express = require("express");
const Profile = require("../models/Profile");
const router = express.Router();

// Save or Update Profile
router.post("/", async (req, res) => {
    try {
        const { userId, fullName, email, phoneNumber, age, address, pincode, state, country } = req.body;

        const profile = await Profile.findOneAndUpdate(
            { userId }, // Find by userId
            { fullName, email, phoneNumber, age, address, pincode, state, country, userId },
            { new: true, upsert: true } // Create if not exists
        );
        res.status(201).json(profile);
    } catch (error) {
        res.status(500).json({ message: "Error saving profile", error });
    }
});

// Get Profile
router.get("/:userId", async (req, res) => {
    try {
        const profile = await Profile.findOne({ userId: req.params.userId });
        if (!profile) return res.status(404).json({ message: "Profile not found" });

        res.json(profile);
    } catch (error) {
        res.status(500).json({ message: "Error fetching profile", error });
    }
});

module.exports = router;
