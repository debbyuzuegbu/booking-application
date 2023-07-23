import React from 'react';
import { useRouter } from 'next/router';

const ShowEvent = () => {
  const router = useRouter();
  const { name, location, date, time, description, eventLink } = router.query;

  return (
    <div className="container min-h-screen justify-items-center bg-gray-700 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full md:w-1/2 lg:w-1/3">
        <h1 className="text-3xl font-bold mb-4">Event Details</h1>
        <div>
          <p><strong>Name:</strong> {name}</p>
          <p><strong>Location:</strong> {location}</p>
          <p><strong>Date:</strong> {date}</p>
          <p><strong>Time:</strong> {time}</p>
          <p><strong>Description:</strong> {description}</p>
          <p><strong>Event Link:</strong> {eventLink}</p>
        </div>
      </div>
    </div>
  );
};

export default ShowEvent;
