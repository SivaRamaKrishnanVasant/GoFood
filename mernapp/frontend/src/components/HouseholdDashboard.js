import React from "react";
import { useNavigate } from "react-router-dom";
import "./HouseholdDashboard.css"; 

const HouseholdDashboard = () => {
    const navigate = useNavigate();

    return (
        <div className="household-dashboard">
            <header className="dashboard-header">
                <h1>Welcome to MedAware – A Smarter Way to Manage Medicines</h1>
            </header>

            <section className="description">
                <p>
                    MedAware is an innovative platform designed to help households manage their medicines efficiently. 
                    With a user-friendly interface, you can easily track medicine expiration dates, donate unused medicines, 
                    and purchase essential medicines online.
                </p>
                <p>
                    Our goal is to reduce medicine wastage, ensure safe disposal, and provide a platform where surplus medicines 
                    reach those in need. By using MedAware, you contribute to a healthier community and a cleaner environment.
                </p>
                <p>
                    Whether you need to **add new medicines**, **purchase essential drugs**, or **dispose of expired medicines responsibly**, 
                    MedAware is your all-in-one solution. With just a few clicks, you can manage your medicines effectively and prevent 
                    unnecessary wastage.
                </p>
                <p>
                    Take control of your medicine management today. Let’s work together to **minimize waste**, **maximize impact**, 
                    and **improve healthcare accessibility** for all!
                </p>
            </section>

            <section className="action-boxes">
                <div className="action-box" onClick={() => navigate("/add-medicine")}>
                    <h2>➕ Add Medicine Details</h2>
                    <p>Log your medicines, set expiry alerts, and manage your inventory.</p>
                </div>
                <div className="action-box" onClick={() => navigate("/buy-medicine")}>
                    <h2>🛒 Buy Medicines</h2>
                    <p>Find and purchase essential medicines from verified pharmacies.</p>
                </div>
                <div className="action-box" onClick={() => navigate("/dispose-medicine")}>
                    <h2>♻️ Dispose Medicines</h2>
                    <p>Learn proper medicine disposal methods to protect the environment.</p>
                </div>
            </section>

            <section className="action-boxes additional-boxes">
                <div className="action-box" onClick={() => navigate("/knowmedicines")}>
                    <h2>📖 Know Medicines</h2>
                    <p>Learn about medicines, their uses, and precautions.</p>
                </div>
                <div className="action-box" onClick={() => navigate("/MedTime")}>
                    <h2>⏰ Med Time</h2>
                    <p>Get reminders to take your medicines on time.</p>
                </div>
            </section>

            <footer className="dashboard-footer">
                <p>© 2025 MedAware | Ensuring Medicine Safety & Accessibility</p>
            </footer>
        </div>
    );
};

export default HouseholdDashboard;
