const express = require("express");
const bcrypt = require("bcryptjs");
const User = require("../models/User");

const router = express.Router();

// Signup Route
router.post("/signup", async (req, res) => {
    const { email, password, role } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) return res.status(400).json({ message: "⚠️ Email already exists!" });

        const hashedPassword = await bcrypt.hash(password, 10);
        user = new User({ email, password: hashedPassword, role });

        await user.save();
        
        res.status(201).json({ userId: user._id, message: "✅ Signup successful!" });
    } catch (error) {
        res.status(500).json({ message: "⚠️ Server error!" });
    }
});

// Login Route
router.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) return res.status(400).json({ message: "⚠️ User not found!" });

        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.status(400).json({ message: "⚠️ Incorrect password!" });

        res.json({ userId: user._id, message: "✅ Login successful!" });
    } catch (error) {
        res.status(500).json({ message: "⚠️ Server error!" });
    }
});

module.exports = router;
