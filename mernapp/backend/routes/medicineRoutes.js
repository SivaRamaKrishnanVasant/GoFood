const express = require("express");
const Medicine = require("../models/Medicine"); // Import model
const router = express.Router();

// Add Medicine API
router.post("/", async (req, res) => {
    try {
        const { name, company, price, quantity, manufactureDate, purchaseDate, expiryDate } = req.body;
        
        // Validate input (ensure required fields are present)
        if (!name || !company || !price || !quantity || !manufactureDate || !purchaseDate || !expiryDate) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Create new medicine entry
        const newMedicine = new Medicine({
            name,
            company,
            price,
            quantity,
            manufactureDate: new Date(manufactureDate),
            purchaseDate: new Date(purchaseDate),
            expiryDate: new Date(expiryDate)
        });

        // Save to database
        await newMedicine.save();
        res.status(201).json({ message: "Medicine added successfully!" });

    } catch (error) {
        console.error("Error adding medicine:", error);
        res.status(500).json({ error: "Failed to add medicine" });
    }
});

// ✅ Get all medicines API
// View Medicines API
router.get("/view", async (req, res) => {
    try {
        const medicines = await Medicine.find(); // Fetch all medicines
        res.status(200).json(medicines); // Send as JSON response
    } catch (error) {
        console.error("Error fetching medicines:", error);
        res.status(500).json({ error: "Failed to fetch medicines" });
    }
});

module.exports = router;
