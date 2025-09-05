import React from "react";
import { GrLocation } from "react-icons/gr";
import { IoBriefcaseOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const ShowLatestJobs = ({ job }) => {
  const {
    jobType,
    requirements,
    location,
    salaryRange,
    title,
    company_logo,
    company,
    description,
    _id,
  } = job;
  return (
    <div className="card bg-base-100 m-10 shadow-sm">
      <div className="flex gap-2">
        <figure>
          <img className="w-16" src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <h4 className="text-2xl font-semibold">{company}</h4>

          <p className="flex gap-2 items-center">
            <GrLocation /> {location}
          </p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p className="flex gap-2 items-center">
          <IoBriefcaseOutline />
          {jobType}
        </p>
        <h1>{description}</h1>
        <div className="flex gap-2 flex-wrap">
          {requirements.map((skill) => (
            <p className="p-2 hover:text-[#4167F0] rounded-md text-center bg-[#EFF3FC]">
              {skill}
            </p>
          ))}
        </div>
        <div className="mt-5 card-actions justify-end">
          <p className="text-xl font-semibold">
            Salary: {salaryRange.min} - {salaryRange.max} {salaryRange.currency}
          </p>
          <Link to={`/jobs/${_id}`}>
            <button className="btn bg-[#4167F0] text-white border-none btn-primary">
              Apply Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowLatestJobs;
