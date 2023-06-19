import React, { useState } from "react";

const Post = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [startDate, setStartDate] = useState("");
  const [aboutCompany, setAboutCompany] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [skillsRequired, setSkillsRequired] = useState("");
  const [whoCanApply, setWhoCanApply] = useState("");
  const [numberOfOpenings, setNumberOfOpenings] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit the job posting
    // You can use the state values to send the data to your backend or perform any other actions
    console.log({
      jobTitle,
      companyName,
      startDate,
      aboutCompany,
      jobDescription,
      skillsRequired,
      whoCanApply,
      numberOfOpenings,
    });
    // Reset the form after submission
    setJobTitle("");
    setCompanyName("");
    setStartDate("");
    setAboutCompany("");
    setJobDescription("");
    setSkillsRequired("");
    setWhoCanApply("");
    setNumberOfOpenings(0);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6">Post a Job</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="jobTitle"
          >
            Job Title
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="jobTitle"
            type="text"
            value={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
            placeholder="Enter job title"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="companyName"
          >
            Company Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="companyName"
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Enter company name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="startDate"
          >
            Start Date
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="startDate"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="aboutCompany"
          >
            About Company
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="aboutCompany"
            rows={4}
            value={aboutCompany}
            onChange={(e) => setAboutCompany(e.target.value)}
            placeholder="Enter about the company"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="jobDescription"
          >
            Job Description
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="jobDescription"
            rows={4}
            value={jobDescription}
            onChange={(e) => setJobDescription(e.target.value)}
            placeholder="Enter job description"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="skillsRequired"
          >
            Skills Required
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="skillsRequired"
            type="text"
            value={skillsRequired}
            onChange={(e) => setSkillsRequired(e.target.value)}
            placeholder="Enter skills required"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="whoCanApply"
          >
            Who Can Apply
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="whoCanApply"
            type="text"
            value={whoCanApply}
            onChange={(e) => setWhoCanApply(e.target.value)}
            placeholder="Enter who can apply"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="numberOfOpenings"
          >
            Number of Openings
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="numberOfOpenings"
            type="number"
            value={numberOfOpenings}
            onChange={(e) => setNumberOfOpenings(Number(e.target.value))}
            placeholder="Enter number of openings"
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default Post;
