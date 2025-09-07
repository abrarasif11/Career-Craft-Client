import React from "react";

const CreateJob = () => {
  const handleCreateJob = e => {
    e.prevent.Default();
  }
  return (
    <section className="p-6 text-gray-800">
      <form 
      onSubmit={handleCreateJob}
        noValidate=""
        className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50"
      >
        <h2 className="w-full text-3xl text-center font-bold leading-tight">
          Create a job
        </h2>
        {/* Job Title */}
        <div>
          <label htmlFor="name" className="block mb-1 ml-1">
            Job Title
          </label>
          <input
            id="name"
            type="text"
            placeholder="Job Title"
            required=""
            name="title"
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          />
        </div>
        {/* Company Name */}
        <div>
          <label htmlFor="name" className="block mb-1 ml-1">
            Company Name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Company Name"
            required=""
            name="name"
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          />
        </div>
        {/* Location */}
        <div>
          <label htmlFor="email" className="block mb-1 ml-1">
            Job Location
          </label>
          <input
            id="email"
            type="text"
            placeholder="Job Location"
            required=""
            name="location"
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          />
        </div>
        {/* HR Name */}
        <div>
          <label htmlFor="email" className="block mb-1 ml-1">
          HR Name
          </label>
          <input
            id="email"
            type="text"
            placeholder="HR Name"
            required=""
            name="hr_name"
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          />
        </div>
        {/* HR Email */}
        <div>
          <label htmlFor="email" className="block mb-1 ml-1">
          HR Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="HR Email"
            required=""
            name="hr_email"
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          />
        </div>
        {/* logo */}
        <div>
          <label htmlFor="email" className="block mb-1 ml-1">
            Company Logo
          </label>
          <input
            id="email"
            type="url"
            placeholder="Company logo"
            required=""
            name="logo"
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          />
        </div>
        {/* Type */}
        <div>
          <label htmlFor="email" className="block  mb-1 ml-1">
            Job Location
          </label>
          <select
            defaultValue="Pick a color"
            className="w-full select select-ghost"
            name="location"
          >
            <option>Select a Job Type</option>
            <option>Select a Job Type</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div>
        {/* Job Field */}
        <div>
          <label htmlFor="email" className="block  mb-1 ml-1">
            Job Field
          </label>
          <select
            defaultValue="Pick a color"
            className="w-full select select-ghost"
            name="field"
          >
            <option>Select Job Field</option>
            <option>Select Job Field</option>
            <option>Amber</option>
            <option>Velvet</option>
          </select>
        </div>
        {/* Salary */}
        <p className="mt-4">Salary Range</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
          <div className="">
            <label htmlFor="email" className="block mb-1 ml-1"></label>
            <input
              id="email"
              type="text"
              placeholder="Min"
              required=""
              name="min"
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 ml-1"></label>
            <input
              id="email"
              type="text"
              placeholder="Max"
              required=""
              name="max"
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
            />
          </div>
          {/* Currency */}

          <div>
            <label htmlFor="email" className="block  ml-1"></label>
            <select
              defaultValue="Pick a color"
              className="w-full select select-ghost"
              name="currency"
            >
              <option disabled={false}>Select Currency</option>
              <option>Select Currency</option>
              <option>Amber</option>
              <option>Velvet</option>
            </select>
          </div>
        </div>
        {/* Description */}
        <div>
          <label htmlFor="message" className="block mb-1 ml-1">
            Job Description
          </label>
          <textarea
            id="message"
            type="text"
            placeholder="Write Job description here..."
            name="description"
            className="block w-full p-2 rounded  focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          ></textarea>
        </div>
        {/* Job Requirements */}
        <div>
          <label htmlFor="message" className="block mb-1 ml-1">
          Job Requirements
          </label>
          <textarea
            id="message"
            type="text"
            name="requirement"
            placeholder="Write job requirement in a new line..."
            className="block w-full p-2 rounded  focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          ></textarea>
        </div>
        {/* Job Responsibility */}
        <div>
          <label htmlFor="message" className="block mb-1 ml-1">
          Job Responsibility
          </label>
          <textarea
            id="message"
            type="text"
            name="responsibility"
            placeholder="Write job responsibility in a new line..."
            className="block w-full p-2 rounded  focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          ></textarea>
        </div>
        <div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-[#4167F0] focus:ring-violet-600 hover:ring-violet-600 text-gray-50"
          >
            Submit Job
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreateJob;
