import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Profile = () => {
    const navigate = useNavigate();
    const userId = localStorage.getItem("userId"); 
    // Profile state
    const [profile, setProfile] = useState({
        fullName: "",
        email: "",
        phoneNumber: "",
        age: "",
        address: "",
        pincode: "",
        state: "",
        country: "",
    });

    // Fetch profile data from the backend
    const fetchProfile = useCallback(async () => {
        if (!userId) {
            navigate("/login"); // Redirect if not logged in
            return;
        }
        try {
            const response = await axios.get(`http://localhost:5000/api/profile/${userId}`);
            if (response.data) {
                setProfile(response.data);
            }
        } catch (error) {
            console.log("Profile not found. Please enter details.");
        }
    }, [userId, navigate]);

    // Fetch profile on page load
    useEffect(() => {
        fetchProfile();
    }, [fetchProfile]);

    // Handle input changes
    const handleChange = (e) => {
        setProfile({ ...profile, [e.target.name]: e.target.value });
    };

    // Save profile details to the database
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/profile", { ...profile, userId });
            alert("✅ Profile saved successfully!");
            navigate("/dashboard"); // Redirect after saving
        } catch (error) {
            console.log("Error saving profile", error);
        }
    };
    const handleProfile=() =>{
        alert("✅ Profile saved successfully!");
        navigate("/login/household");
    }
    // Logout function
    const handleLogout = () => {
        localStorage.removeItem("userId"); // Remove user session
        navigate("/login"); // Redirect to login
    };

    return (
        <div className="profile-container">
            <h2>Complete Your Profile</h2>
            <form onSubmit={handleSubmit} className="profile-form">
                <input type="text" name="fullName" placeholder="Full Name" value={profile.fullName} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email" value={profile.email} onChange={handleChange} required />
                <input type="text" name="phoneNumber" placeholder="Phone Number" value={profile.phoneNumber} onChange={handleChange} required />
                <input type="number" name="age" placeholder="Age" value={profile.age} onChange={handleChange} required />
                <input type="text" name="address" placeholder="Address" value={profile.address} onChange={handleChange} required />
                <input type="text" name="pincode" placeholder="Pincode" value={profile.pincode} onChange={handleChange} required />
                <input type="text" name="state" placeholder="State" value={profile.state} onChange={handleChange} required />
                <input type="text" name="country" placeholder="Country" value={profile.country} onChange={handleChange} required />
                
                <button type="submit" onClick={handleProfile} className="save-btn">Save Profile</button>
            </form>
            <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
    );
};

export default Profile;
