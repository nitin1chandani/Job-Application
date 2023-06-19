import React from "react";
import { Link } from "react-router-dom";

const JobCard = () => {
  return (
    <div className="flex justify-center mt-4">
      <div className="bg-white rounded-lg shadow-lg p-6 w-9/12">
        <h2 className="text-xl font-bold mb-2">Job Title</h2>
        <div className="flex items-center mb-4">
          <p className="text-gray-500 text-sm mr-2">Company Name</p>
          <span className="text-gray-400">•</span>
          <p className="text-gray-500 text-sm ml-2">Job Location</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-gray-500 text-sm">Start Date</p>
          <Link
            to="/detail/:id"
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-full focus:outline-none"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
