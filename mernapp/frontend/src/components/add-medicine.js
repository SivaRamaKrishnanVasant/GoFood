import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./AddMedicine.css"; // Ensure the CSS is attractive

const AddMedicine = () => {
    const navigate = useNavigate();
    const [medicine, setMedicine] = useState({
        name: "",
        company: "",
        price: "",
        quantity: "",
        manufactureDate: "",
        purchaseDate: "",
        expiryDate: ""
    });

    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        setMedicine({ ...medicine, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post("http://localhost:5000/api/medicine", medicine);
            setMessage("✅ Medicine details added successfully!");
            setMedicine({ name: "", company: "", price: "", quantity: "", manufactureDate: "", purchaseDate: "", expiryDate: "" });
        } catch (error) {
            console.error("Error adding medicine:", error);
            setMessage("❌ Failed to add medicine. Try again.");
        }
    };

    return (
        <div className="add-medicine-container">
            <header className="header">🩺 MedAware - Add Medicine</header>
            <div className="form-container">
                <h2>📌 Add Medicine Details</h2>
                {message && <p className="message">{message}</p>}
                <form onSubmit={handleSubmit}>
                    <label>Medicine Name:</label>
                    <input type="text" name="name" value={medicine.name} onChange={handleChange} required />

                    <label>Company Name:</label>
                    <input type="text" name="company" value={medicine.company} onChange={handleChange} required />

                    <label>Price:</label>
                    <input type="number" name="price" value={medicine.price} onChange={handleChange} required />

                    <label>Quantity:</label>
                    <input type="number" name="quantity" value={medicine.quantity} onChange={handleChange} required />

                    <label>Manufacture Date:</label>
                    <input type="date" name="manufactureDate" value={medicine.manufactureDate} onChange={handleChange} required />

                    <label>Purchase Date:</label>
                    <input type="date" name="purchaseDate" value={medicine.purchaseDate} onChange={handleChange} required />

                    <label>Expiry Date:</label>
                    <input type="date" name="expiryDate" value={medicine.expiryDate} onChange={handleChange} required />

                    <button type="submit" className="add-button">➕ Add Medicine</button>
                </form>

                <button className="view-details" onClick={() => navigate("/ViewMedicines")}>📄 View Medicines</button>
            </div>
            <footer className="footer">© 2025 MedAware | Ensuring Safe Medicine Usage</footer>
        </div>
    );
};

export default AddMedicine;
