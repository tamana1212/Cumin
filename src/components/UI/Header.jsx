import React, { useEffect, useState } from "react";

const Header = ({ employeeData, setUser }) => {
  const [role, setRole] = useState(null);
  useEffect(() => {
    if (!employeeData) {
      setRole("Admin");
    } else {
      setRole(employeeData.name);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setUser(null);
  };
  return (
    <header className="bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-white">Hello, {role}! 👋</h1>
        <button
          onClick={() => handleLogout()}
          className="px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition duration-200"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default Header;
