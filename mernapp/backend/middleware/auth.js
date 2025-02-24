// middleware/auth.js
const jwt = require("jsonwebtoken");

const authenticateJWT = (req, res, next) => {
    const token = req.header("x-auth-token");
    
    if (!token) {
        return res.status(401).json({ msg: "No token, authorization denied" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET || "your_jwt_secret");
        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({ msg: "Token is not valid" });
    }
};

module.exports = authenticateJWT;
