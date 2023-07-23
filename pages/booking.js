import React, { useState } from "react";

const Appointment = () => {
  const [name, setName] = useState("");
  const [date, setDate] = useState("");

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <>
      <nav>
        <div className="logo">
          <a href="/logo">Logo</a>
        </div>
        <div className="spacer"></div>
        <div className="links">
          <a href="/">Home</a>
          <a href="/integration">Integration</a>
        </div>
      </nav>
      <div className="appointment-page">
        <h1>Book an Appointment</h1>
        <form onSubmit={handleFormSubmit}>
          <label htmlFor="name">Your Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <label htmlFor="date">Select a Date:</label>
          <input
            type="date"
            id="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
          />
          <button type="submit">Book Appointment</button>
        </form>
      </div>
    </>
  );
};

export default Appointment;
