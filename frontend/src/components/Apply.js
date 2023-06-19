import React, { useState } from "react";

const Apply = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  const [skills, setSkills] = useState("");
  const [coverLetter, setCoverLetter] = useState("");
  const [whyHire, setWhyHire] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Logic to submit the application
    // You can use the state values to send the data to your backend or perform any other actions
    console.log({
      fullName,
      email,
      resume,
      skills,
      coverLetter,
      whyHire,
    });
    // Reset the form after submission
    setFullName("");
    setEmail("");
    setResume(null);
    setSkills("");
    setCoverLetter("");
    setWhyHire("");
  };

  const handleResumeChange = (e) => {
    const file = e.target.files[0];
    setResume(file);
  };

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-6 mt-3">Apply for Job</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="fullName"
          >
            Full Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="fullName"
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Enter your full name"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="resume"
          >
            Resume
          </label>
          <input
            className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="resume"
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeChange}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="skills"
          >
            Skills
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="skills"
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            placeholder="Enter your skills"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="coverLetter"
          >
            Cover Letter
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="coverLetter"
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            placeholder="Write your cover letter"
            rows="5"
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="whyHire"
          >
            Why Should We Hire You?
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="whyHire"
            value={whyHire}
            onChange={(e) => setWhyHire(e.target.value)}
            placeholder="Explain why you should be hired"
            rows="5"
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Apply
          </button>
        </div>
      </form>
    </div>
  );
};

export default Apply;
