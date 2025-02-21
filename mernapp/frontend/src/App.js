import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Profile from "./components/Profile";
import HouseholdDashboard from "./components/HouseholdDashboard";
import AddMedicine from "./components/add-medicine";  
import ViewMedicines from "./components/ViewMedicines";  
import MedTime from "./components/MedTime";  // ✅ Import MedTime

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/signup/:role" element={<Signup />} />
                <Route path="/login/:role" element={<Login />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/dashboard/household" element={<HouseholdDashboard />} />
                <Route path="/add-medicine" element={<AddMedicine />} />
                <Route path="/view-medicines" element={<ViewMedicines />} />  
                <Route path="/MedTime" element={<MedTime />} />  {/* ✅ Add MedTime route */}
            </Routes>
        </Router>
    );
}

export default App;
