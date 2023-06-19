import React from "react";

const ViewDetail = () => {
  return (
    <div className="border rounded-lg shadow-lg p-6 hover:border-blue-500 transition duration-300 m-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-bold mb-4">Job Title</h1>
        <div className="flex items-center mb-4">
          <p className="text-gray-500 text-sm mr-2">Company Name</p>
          <span className="text-gray-400">•</span>
          <p className="text-gray-500 text-sm ml-2">Job Location</p>
        </div>
        <div className="flex justify-between mb-4">
          <p className="text-gray-500 text-sm">Start Date</p>
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded">
            Apply Now
          </button>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">About Company</h2>
          <p>Company description goes here...</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Job Description</h2>
          <p>Job description goes here...</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Skills Required</h2>
          <ul className="flex space-x-2">
            <li className="hover:text-blue-500 transition duration-300">
              Skill 1
            </li>
            <li className="hover:text-blue-500 transition duration-300">
              Skill 2
            </li>
            <li className="hover:text-blue-500 transition duration-300">
              Skill 3
            </li>
          </ul>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Who Can Apply</h2>
          <p>Eligibility criteria goes here...</p>
        </div>
        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Number of Openings</h2>
          <p>Number of openings: 5</p>
        </div>
      </div>
    </div>
  );
};

export default ViewDetail;
