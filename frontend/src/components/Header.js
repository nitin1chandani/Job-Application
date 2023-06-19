import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdownToggle = () => {
    setShowDropdown(!showDropdown);
  };

  return (
    <div className="bg-indigo-900 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        <div className="text-3xl font-bold">
          <Link to="/">FindIt</Link>
        </div>
        <div className="flex items-center space-x-4 relative">
          <ul className="flex space-x-4 ">
            <li className="text-lg hover:text-gray-300 cursor-pointer">
              <Link to="/jobs">Jobs</Link>{" "}
            </li>
            <li className="text-lg hover:text-gray-300 cursor-pointer">
              Companies
            </li>
            <li className="text-lg hover:text-gray-300 cursor-pointer">
              Services
            </li>
          </ul>
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
            <Link to="/login">Login</Link>
          </button>
          <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
            <Link to="/register">Register</Link>
          </button>
          <div className="relative">
            <button
              className="text-lg text-white px-4 py-2 rounded"
              onClick={handleDropdownToggle}
            >
              For Employers
            </button>
            {showDropdown && (
              <ul className="absolute mt-2 bg-white text-gray-800 py-2 px-4 rounded shadow">
                <li className="hover:bg-gray-200 py-1 cursor-pointer transition-colors duration-200">
                  Post a Job
                </li>
                <li className="hover:bg-gray-200 py-1 cursor-pointer transition-colors duration-200">
                  <Link to="/recruit/register">Register as Employer</Link>
                </li>
                <li className="hover:bg-gray-200 py-1 cursor-pointer transition-colors duration-200">
                  <Link to="/recruit/login">Employer Login</Link>
                </li>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
