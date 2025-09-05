import React from "react";
import { useLoaderData } from "react-router-dom";

const JobDetails = () => {
  const { title, company, responsibilities, status } = useLoaderData();

  return (
    <div className="max-w-2xl card bg-base-100 shadow-sm px-6 py-16 mx-auto space-y-12">
      <article className="space-y-8  text-gray-900">
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
            alt=""
            className="w-4 h-4  rounded-full bg-[#4167F0] border-gray-300"
          />
          <p className="text-xl font font-semibold">Status - {status}</p>
        </div>
      </article>
      <div>
        {/* <div className="flex flex-wrap py-6 gap-2 border-t border-dashed border-gray-600">
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-3 py-1 rounded-sm hover:underline bg-violet-600 text-gray-50"
          >
            
          </a>
        </div> */}
        <div className="space-y-2">
          <h4 className="text-lg font-semibold">Job Responsibilities</h4>
          <ul className="ml-4 space-y-1 list-disc">
            {responsibilities.map((skill) => (
              <li className="p-2 hover:text-[#4167F0]">
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <button
          type="button"
          className="flex items-center mt-5 btn justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-[#4167F0] text-gray-50"
        >
          Apply Here
        </button>
      </div>
    </div>
  );
};

export default JobDetails;
