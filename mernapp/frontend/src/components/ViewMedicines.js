import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ViewMedicines.css"; // Ensure the CSS is attractive

const ViewMedicines = () => {
    const [medicines, setMedicines] = useState([]);

    useEffect(() => {
        const fetchMedicines = async () => {
            try {
                const response = await axios.get("http://localhost:5000/api/medicine/view");
                setMedicines(response.data);
            } catch (error) {
                console.error("Error fetching medicines:", error);
            }
        };
        fetchMedicines();
    }, []);

    return (
        <div className="medicines-container">
            <header className="header">📋 MedAware - Medicine Inventory</header>
            <h2>💊 Available Medicines</h2>

            {medicines.length === 0 ? (
                <p className="no-medicine">🚫 No medicines available.</p>
            ) : (
                <div className="medicine-grid">
                    {medicines.map((medicine) => (
                        <div key={medicine._id} className="medicine-card">
                            <h3>{medicine.name}</h3>
                            <p><strong>🧪 Company:</strong> {medicine.company}</p>
                            <p><strong>💰 Price:</strong> ₹{medicine.price}</p>
                            <p><strong>📦 Quantity:</strong> {medicine.quantity}</p>
                            <p><strong>🏭 Manufactured:</strong> {new Date(medicine.manufactureDate).toLocaleDateString()}</p>
                            <p><strong>🛒 Purchased:</strong> {new Date(medicine.purchaseDate).toLocaleDateString()}</p>
                            <p><strong>⏳ Expiry Date:</strong> {new Date(medicine.expiryDate).toLocaleDateString()}</p>
                        </div>
                    ))}
                </div>
            )}

            <footer className="footer">© 2025 MedAware | Ensuring Safe Medicine Usage</footer>
        </div>
    );
};

export default ViewMedicines;
