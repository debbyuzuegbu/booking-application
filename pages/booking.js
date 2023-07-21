import React, { useState } from "react";

const Booking = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setSelectedTime(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Booking submitted:", {
      date: selectedDate,
      time: selectedTime,
    });
  };

  return (
    <div>
      <h1>Booking System</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="date">Select Date:</label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
          required
        />

        <label htmlFor="time">Select Time:</label>
        <input
          type="time"
          id="time"
          value={selectedTime}
          onChange={handleTimeChange}
          required
        />

        <button type="submit">Book Now</button>
      </form>
    </div>
  );
};

export default Booking;
