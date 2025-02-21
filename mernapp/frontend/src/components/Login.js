import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import "./Auth.css"; 
const Login = () => {
    const { role } = useParams();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(""); 
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(""); 
        try {
            const response = await axios.post("http://localhost:5000/api/auth/login", { email, password });
            alert(response.data.message); // ✅ Show success message
            
            localStorage.setItem("userId", response.data.userId); // Store userId
            navigate(`/dashboard/${role}`);
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message); // ✅ Show backend error messages
            } else {
                setError("⚠️ Login failed. Try again!");
            }
        }
    };

    return (
        <div className="auth-container">
            <h2>Login as {role.charAt(0).toUpperCase() + role.slice(1)}</h2>
            {error && <p className="error-message">{error}</p>} {/* Show error messages */}
            <form onSubmit={handleLogin}>
                <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} required />
                <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} required />
                <button type="submit">Login</button>
            </form>
            <p>Don't have an account? <span onClick={() => navigate(`/signup/${role}`)}>Signup</span></p>
        </div>
    );
};

export default Login;
