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
          <Link to="/login">
            <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded">
              Register
            </button>
          </Link>
          <div className="relative">
            <button
              className="text-lg text-white px-4 py-2 rounded hover:text-gray-300 cursor-pointer"
              onClick={handleDropdownToggle}
            >
              For Employers
            </button>
            {showDropdown && (
              <ul className="absolute mt-2 bg-white text-gray-800 py-2 px-4 rounded shadow">
                <Link to="/recruit/post">
                  <li className="hover:bg-gray-200 py-1 cursor-pointer transition-colors duration-200">
                    Post a Job
                  </li>
                </Link>
                <Link to="/recruit/register">
                  <li className="hover:bg-gray-200 py-1 cursor-pointer transition-colors duration-200">
                    Register as Employer
                  </li>
                </Link>
                <Link to="/recruit/login">
                  <li className="hover:bg-gray-200 py-1 cursor-pointer transition-colors duration-200">
                    Employer Login
                  </li>
                </Link>
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
