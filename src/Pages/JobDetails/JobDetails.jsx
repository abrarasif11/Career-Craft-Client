import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { title, _id, company, responsibilities, status } = useLoaderData();

  // ✅ Ensure responsibilities is always an array
  const formattedResponsibilities = Array.isArray(responsibilities)
    ? responsibilities
    : responsibilities
    ? [responsibilities]
    : [];

  return (
    <div className="max-w-2xl card bg-base-100 shadow-sm px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8 text-gray-900">
        <div className="space-y-6">
          <h1 className="text-4xl font-bold md:tracking-tight md:text-5xl">
            Job Details For - {title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full md:flex-row md:items-center">
            <div className="text-gray-800">
              <p className="text-2xl font-semibold">Company - {company}</p>
            </div>
          </div>
        </div>
        <div className="flex items-center md:space-x-2">
          <img
            src="https://source.unsplash.com/75x75/?portrait"
            alt="Company Logo"
            className="w-4 h-4 rounded-full bg-[#4167F0] border-gray-300"
          />
          <p className="text-xl font-semibold">Status - {status}</p>
        </div>
      </article>

      <div>
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Job Responsibilities</h4>
          <ul className="ml-4 space-y-1 list-disc">
            {formattedResponsibilities.map((skill, index) => (
              <li key={index} className="p-2 hover:text-[#4167F0]">
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <Link to={`/jobApply/${_id}`}>
          <button
            type="button"
            className="flex items-center mt-5 btn justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#4167F0] text-gray-50"
          >
            Apply Here
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
