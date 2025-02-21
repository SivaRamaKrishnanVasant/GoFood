import React, { useState } from "react";
import axios from "axios";
import "./MedTime.css";

const MedTime = () => {
  const [medicineName, setMedicineName] = useState("");
  const [timesPerDay, setTimesPerDay] = useState(1);
  const [intakeTimes, setIntakeTimes] = useState([]);
  const [message, setMessage] = useState("");

  const handleTimesChange = (e) => {
    const count = Number(e.target.value);
    setTimesPerDay(count);
    setIntakeTimes(Array(count).fill(""));
  };

  const handleTimeChange = (index, value) => {
    const newTimes = [...intakeTimes];
    newTimes[index] = value;
    setIntakeTimes(newTimes);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const userEmail = "22eg110b22@anurag.edu.in"; // Replace with logged-in user's email

    try {
      const response = await axios.post("http://localhost:5000/api/medtime/add", {
        userEmail,
        medicineName,
        timesPerDay,
        intakeTimes,
      });

      if (response.status === 201) {
        setMessage("Medicine schedule added successfully!");
        setMedicineName("");
        setTimesPerDay(1);
        setIntakeTimes([]);
      } else {
        setMessage("Error adding schedule.");
      }
    } catch (error) {
      console.error("Error:", error);
      setMessage("Server error.");
    }
  };

  return (
    <div className="medtime-container">
      <h2>MedTime - Schedule Your Medicine</h2>
      <form onSubmit={handleSubmit}>
        <label>Medicine Name:</label>
        <input type="text" value={medicineName} onChange={(e) => setMedicineName(e.target.value)} required />

        <label>Number of Times Per Day:</label>
        <select value={timesPerDay} onChange={handleTimesChange}>
          {[1, 2, 3, 4].map((num) => (
            <option key={num} value={num}>{num}</option>
          ))}
        </select>

        {intakeTimes.map((_, index) => (
          <div key={index}>
            <label>Time {index + 1}:</label>
            <input type="time" value={intakeTimes[index]} onChange={(e) => handleTimeChange(index, e.target.value)} required />
          </div>
        ))}

        <button type="submit">Set Reminder</button>
      </form>
      {message && <p className="message">{message}</p>}
    </div>
  );
};

export default MedTime;
