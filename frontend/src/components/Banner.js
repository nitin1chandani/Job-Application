import React from "react";
import { Link } from "react-router-dom";
const Banner = () => {
  return (
    <div className="bg-gradient-to-r from-blue-500 to-cyan-400 py-40">
      <div className="container mx-auto px-0">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
          Find Your Dream Job
        </h1>
        <p className="text-xl md:text-2xl text-white mb-8">
          Explore thousands of job opportunities
        </p>
        <button className="bg-blue-700 hover:bg-blue-600 text-white py-3 px-6 rounded-lg font-bold text-lg">
          <Link to="/jobs"> Get Started</Link>
        </button>
      </div>
    </div>
  );
};

export default Banner;
