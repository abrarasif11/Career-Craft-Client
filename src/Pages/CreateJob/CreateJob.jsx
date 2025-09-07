import React from "react";

const CreateJob = () => {
  return (
    <section className="p-6 text-gray-800">
      <form
        noValidate=""
        className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50"
      >
        <h2 className="w-full text-3xl text-center font-bold leading-tight">Create a job</h2>
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
            placeholder="Your email"
            required=""
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 ml-1">
            Message
          </label>
          <textarea
            id="message"
            type="text"
            placeholder="Message..."
            className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          ></textarea>
        </div>
        <div>
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
