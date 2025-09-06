import React from "react";

const JobApply = () => {
  return (
    <section className="p-6 text-gray-800">
      <form
        noValidate=""
        className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50"
      >
        <p className="text-center bg-">Job Application</p>
        <h2 className="w-full text-3xl text-center font-bold leading-tight">
          Start your career today
        </h2>
        <p className="text-center">
          Please fill in your information and send it to the employer.
        </p>
        <div>
          <label htmlFor="name" className="block mb-1 ml-1">
            Full Name *
          </label>
          <input
            id="name"
            type="text"
            placeholder="John Kabir"
            required=""
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 ml-1">
            Email *
          </label>
          <input
            id="email"
            type="email"
            placeholder="john.kabir@gmail.com"
            required=""
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-1 ml-1">
            Contact Number *
          </label>
          <input
            id="contact"
            type="tel"
            placeholder="+8807176240857"
            required=""
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 ml-1">
            Description
          </label>
          <textarea
            id="message"
            type="text"
            placeholder="Your Description..."
            className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          ></textarea>
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 ml-1">
            Upload Resume
          </label>
          <input type="file" className="file-input w-full file-input-lg" />
        </div>
        <div>
          <fieldset className="fieldset bg-base-100  border-base-300 rounded-box w-full border p-4">
            <label className="label">
              <input type="checkbox" defaultChecked className="checkbox" />
              Agree our terms and policy
            </label>
          </fieldset>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-[#4167F0] focus:ring-violet-600 text-white"
          >
            Apply Job
          </button>
        </div>
      </form>
    </section>
  );
};

export default JobApply;
