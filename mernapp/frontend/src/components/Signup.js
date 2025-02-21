import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Auth.css"; 

const Signup = () => {
    const { role } = useParams();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSignup = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:5000/api/auth/signup", { email, password, role });
            
            if (response.data.userId) {
                localStorage.setItem("userId", response.data.userId); // Store userId
                navigate("/profile"); // Redirect to profile
            }
        } catch (error) {
            console.error("Signup failed", error);
        }
    };

    return (
        <div className="auth-container">
            <h2>Signup as {role.charAt(0).toUpperCase() + role.slice(1)}</h2>
            <form onSubmit={handleSignup}>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Signup</button>
            </form>
            <p>Already have an account? <span onClick={() => navigate(`/login/${role}`)}>Login</span></p>
        </div>
    );
};

export default Signup;
