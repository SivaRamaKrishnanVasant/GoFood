import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import PharmacistDashboard from "./components/PharmacistDashboard";
import HouseholdDashboard from "./components/HouseholdDashboard";
import NGODashboard from "./components/NGODashboard";

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/pharmacist-dashboard" element={<PharmacistDashboard />} />
                <Route path="/household-dashboard" element={<HouseholdDashboard />} />
                <Route path="/ngo-dashboard" element={<NGODashboard />} />
            </Routes>
        </Router>
    );
};

export default App;
