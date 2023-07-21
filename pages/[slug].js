import React from 'react'

const [slug] = () => {
  return (
    <div>
         <form onSubmit={handleSubmit}>
         <label htmlFor="image">Image:</label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
          required
        />
        <label htmlFor="date"> Name:</label>
        <input
          type="date"
          id="date"
          value={selectedDate}
          onChange={handleDateChange}
          required
        />

        <label htmlFor="time">Name:</label>
        <input
          type="text"
          id="time"
          value={selectedTime}
          onChange={handleTimeChange}
          required
        />

        <button type="submit">Book Now</button>
      </form>
        
      
    </div>
  )
}

export default [slug]
