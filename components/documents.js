import { useState } from 'react';

export default function Home() {
  const [name, setName] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [appointments, setAppointments] = useState([]);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === '' || selectedDate.trim() === '') {
      alert('Please fill in all the fields.');
      return;
    }

    const newAppointment = { name, date: selectedDate };
    setAppointments([...appointments, newAppointment]);
    setName('');
    setSelectedDate('');
  };

  return (
    <div>
      <h1>Appointment Scheduling</h1>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="name">Your Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <label htmlFor="selectedDate">Select a Date:</label>
        <input
          type="date"
          id="selectedDate"
          value={selectedDate}
          onChange={(e) => setSelectedDate(e.target.value)}
          required
        />
        <button type="submit">Schedule Appointment</button>
      </form>

      {appointments.length > 0 && (
        <div>
          <h2>Your Appointments:</h2>
          <ul>
            {appointments.map((appointment, index) => (
              <li key={index}>
                <strong>{appointment.name}</strong> - {appointment.date}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}