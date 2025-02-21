// routes/dashboardRoutes.js
const express = require("express");
const roleMiddleware = require("../middleware/roleMiddleware");
const authenticateJWT = require("../middleware/auth");

const router = express.Router();

router.get("/pharmacist-dashboard", authenticateJWT, roleMiddleware(["Pharmacist"]), (req, res) => {
    res.json({ message: "Welcome to the Pharmacist Dashboard!" });
});

router.get("/household-dashboard", authenticateJWT, roleMiddleware(["Household"]), (req, res) => {
    res.json({ message: "Welcome to the Household Dashboard!" });
});

router.get("/ngo-dashboard", authenticateJWT, roleMiddleware(["NGO"]), (req, res) => {
    res.json({ message: "Welcome to the NGO Dashboard!" });
});

module.exports = router;
