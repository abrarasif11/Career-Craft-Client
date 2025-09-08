import React from "react";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";

const CreateJob = () => {
  const { user } = useAuth
  const handleCreateJob = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log("Raw form data:", data);
    const { min, max, currency, ...newJob } = data;
    newJob.salaryRange = { min, max, currency };
    newJob.requirement = newJob.requirement.split('\n');
    newJob.responsibility = newJob.responsibility.split('\n');
    console.log("New Job object:", newJob);
    // e.target.reset();
     
   fetch('http://localhost:7000/jobs', {
    method: "POST",
    headers: {
      'content-type' : 'application/json'
    },
    body: JSON.stringify(newJob)
   })
   .then(res => res.json())
   .then(data =>{
    if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Job Created Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              
            }
   })
  };

  return (
    <section className="p-6 text-gray-800">
      <form
        onSubmit={handleCreateJob}
        noValidate
        className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50"
      >
        <h2 className="w-full text-3xl text-center font-bold leading-tight">
          Create a job
        </h2>

        {/* Job Title */}
        <div>
          <label htmlFor="title" className="block mb-1 ml-1">
            Job Title
          </label>
          <input
            id="title"
            type="text"
            placeholder="Job Title"
            required
            name="title"
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          />
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="company_name" className="block mb-1 ml-1">
            Company Name
          </label>
          <input
            id="company_name"
            type="text"
            placeholder="Company Name"
            required
            name="company_name"
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          />
        </div>

        {/* Location */}
        <div>
          <label htmlFor="location" className="block mb-1 ml-1">
            Job Location
          </label>
          <input
            id="location"
            type="text"
            placeholder="Job Location"
            required
            name="location"
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          />
        </div>

        {/* HR Name */}
        <div>
          <label htmlFor="hr_name" className="block mb-1 ml-1">
            HR Name
          </label>
          <input
            id="hr_name"
            type="text"
            placeholder="HR Name"
            required
            name="hr_name"
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          />
        </div>

        {/* HR Email */}
        <div>
          <label htmlFor="hr_email" className="block mb-1 ml-1">
            HR Email
          </label>
          <input
            id="hr_email"
            type="email"
            placeholder="HR Email"
            required
            defaultValue={user?.email}
            name="hr_email"
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          />
        </div>

        {/* Logo */}
        <div>
          <label htmlFor="logo" className="block mb-1 ml-1">
            Company Logo
          </label>
          <input
            id="logo"
            type="url"
            placeholder="Company Logo URL"
            required
            name="logo"
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          />
        </div>

        {/* Job Type */}
        <div>
          <label htmlFor="job_type" className="block mb-1 ml-1">
            Job Type
          </label>
          <select
            id="job_type"
            className="w-full select select-ghost"
            name="job_type"
            required
            defaultValue="Select a Job Type"
          >
            <option value="" disabled>Select a Job Type</option>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Internship</option>
            <option>Remote</option>
          </select>
        </div>

        {/* Job Field */}
        <div>
          <label htmlFor="field" className="block mb-1 ml-1">
            Job Field
          </label>
          <select
            id="field"
            className="w-full select select-ghost"
            name="field"
            required
             defaultValue="Select Job Field"
          >
            <option disabled value="">Select Job Field</option>
            <option>Engineering</option>
            <option>Marketing</option>
            <option>Finance</option>
            <option>Design</option>
          </select>
        </div>

        {/* Salary */}
        <p className="mt-4">Salary Range</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <input
            type="number"
            placeholder="Min"
            required
            name="min"
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          />
          <input
            type="number"
            placeholder="Max"
            required
            name="max"
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          />
          <select
            name="currency"
            className="w-full select select-ghost"
            required
             defaultValue="Select Currency"
          >
            <option disabled value="">Select Currency</option>
            <option>USD</option>
            <option>EUR</option>
            <option>BDT</option>
          </select>
        </div>

        {/* Description */}
        <div>
          <label htmlFor="description" className="block mb-1 ml-1">
            Job Description
          </label>
          <textarea
            id="description"
            placeholder="Write job description..."
            name="description"
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          ></textarea>
        </div>

        {/* Job Requirements */}
        <div>
          <label htmlFor="requirement" className="block mb-1 ml-1">
            Job Requirements
          </label>
          <textarea
            id="requirement"
            name="requirement"
            placeholder="Write job requirements..."
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          ></textarea>
        </div>

        {/* Job Responsibility */}
        <div>
          <label htmlFor="responsibility" className="block mb-1 ml-1">
            Job Responsibility
          </label>
          <textarea
            id="responsibility"
            name="responsibility"
            placeholder="Write job responsibilities..."
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          ></textarea>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-[#4167F0] focus:ring-violet-600 hover:ring-violet-600 text-gray-50"
        >
          Submit Job
        </button>
      </form>
    </section>
  );
};

export default CreateJob;
