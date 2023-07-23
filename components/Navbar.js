import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-blue-500 p-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-white text-xl font-bold">Logo</div>

      {/* Book an Event Link */}
      <a
        href="/dashboard" // Replace this with the link to your "Book an Event" page or form
        className="text-white font-semibold px-4 py-2 rounded hover:bg-blue-600"
      >
        Book an Event
      </a>
    </nav>
  );
};

export default Navbar;
