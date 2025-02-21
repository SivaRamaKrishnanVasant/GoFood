import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css"; // Import CSS for styling

const Home = () => {
    const [showRoles, setShowRoles] = useState(false);
    const navigate = useNavigate();

    return (
        <div className="home-container">
            <h1>Welcome to MedAware</h1>
            <p>Your trusted platform for medicine management</p>

            {!showRoles ? (
                <button className="start-btn" onClick={() => setShowRoles(true)}>Get Started</button>
            ) : (
                <div className="role-selection">
                    <div className="role-box" onClick={() => navigate("/signup/household")}>
                        <h2>Household</h2>
                    </div>
                    <div className="role-box" onClick={() => navigate("/signup/pharmacist")}>
                        <h2>Pharmacist</h2>
                    </div>
                    <div className="role-box" onClick={() => navigate("/signup/ngo")}>
                        <h2>NGO</h2>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
