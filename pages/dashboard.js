import React, { useState } from 'react';

const Dashboard = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    date: '',
    time: '',
    description: '',
    eventLink: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle form submission here, e.g., send data to the server or perform any necessary actions.
    console.log(formData);
    // Reset the form fields after submission
    setFormData({
      name: '',
      location: '',
      date: '',
      time: '',
      description: '',
      eventLink: '',
    });
  };

  return (
    <div class="container" className="min-h-screen justify-items-center bg-gray-700 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-3xl font-bold mb-4">Book an Event</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-bold">Name:</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full border rounded py-2 px-3"
              required
            />
          </div>
        <div>
          <label>Location:</label>
          <input type="text" name="location" value={formData.location} onChange={handleChange} required />
        </div>
        <div>
          <label>Date:</label>
          <input type="date" name="date" value={formData.date} onChange={handleChange} required />
        </div>
        <div>
          <label>Time:</label>
          <input type="time" name="time" value={formData.time} onChange={handleChange} required />
        </div>
        <div>
          <label>Description:</label>
          <textarea name="description" value={formData.description} onChange={handleChange} required />
        </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Dashboard;
