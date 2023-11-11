"use client"
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "@/components/navbar";

const JobForm = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [company, setCompany] = useState("");
  const [vacancyNumber, setVacancyNumber] = useState("");
  const [skills, setSkills] = useState("");
  const [qualifications, setQualifications] = useState("");
  const [mode, setMode] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch("/api/jobpost", {
        method: "POST",
        body: JSON.stringify({
          title,
          description,
          location,
          salary,
          company,
          vacancyNumber,
          skills,
          qualifications,
          mode,
        }),
      });
      const data = await res.json();
      alert("Job Posted!!");
      router.push("/jobs");
    } catch (error) {
      alert("Something Went Wrong in client", data);
    }
  };

  return (
    <>
    <Navbar/>
    <div className="container mx-auto mt-8 max-w-md p-8 bg-primary shadow-md rounded-lg">
      <h1 className="text-3xl font-medium text-gray-800 mb-6">Post A Job</h1>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title" className="block text-sm font-bold text-gray-600">
            Title
          </label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Add your post title"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="description" className="block text-sm font-bold text-gray-600">
            Description
          </label>
          <textarea
            id="description"
            value={description}
            rows={5}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full input input-bordered p-2.5"
            placeholder="Write your Description here..."
          ></textarea>
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-bold text-gray-600">
            Location
          </label>
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            name="location"
            placeholder="Type your location"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="salary" className="block text-sm font-bold text-gray-600">
            Salary
          </label>
          <input
            type="number"
            value={salary}
            onChange={(e) => setSalary(e.target.value)}
            name="salary"
            placeholder="Enter the salary"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="company" className="block text-sm font-bold text-gray-600">
            Company
          </label>
          <input
            type="text"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
            name="company"
            placeholder="Type your company name"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="vacancyNumber" className="block text-sm font-bold text-gray-600">
            Vacancy Number
          </label>
          <input
            type="number"
            value={vacancyNumber}
            onChange={(e) => setVacancyNumber(e.target.value)}
            name="vacancyNumber"
            placeholder="Enter the vacancy number"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="skills" className="block text-sm font-bold text-gray-600">
            Skills
          </label>
          <input
            type="text"
            value={skills}
            onChange={(e) => setSkills(e.target.value)}
            name="skills"
            placeholder="Type your skills"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="qualifications" className="block text-sm font-bold text-gray-600">
            Qualifications
          </label>
          <input
            type="text"
            value={qualifications}
            onChange={(e) => setQualifications(e.target.value)}
            name="qualifications"
            placeholder="Type your qualifications"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <label htmlFor="mode" className="block text-sm font-bold text-gray-600">
            Mode
          </label>
          <input
            type="text"
            value={mode}
            onChange={(e) => setMode(e.target.value)}
            name="mode"
            placeholder="Type your mode"
            className="input input-bordered w-full"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full bg-blue-700 hover:bg-blue-800 text-white font-medium py-2.5 rounded-lg text-sm"
          >
            Post Your Job
          </button>
        </div>
      </form>
    </div>
    </>
  );
};

export default JobForm;
