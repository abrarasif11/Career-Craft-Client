import React from "react";

const ShowLatestJobs = ({ job }) => {
  const { jobType, location, title, company_logo, company } = job;
  return (
    <div className="card bg-base-100 m-10 shadow-sm">
      <div className="flex gap-2">
        <figure>
          <img className="w-16" src={company_logo} alt="Shoes" />
        </figure>
        <div>
          <h4 className="text-2xl font-semibold">{company}</h4>
          <p>{location}</p>
        </div>
      </div>
      <div className="card-body">
        <h2 className="card-title">Card Title</h2>
        <p>
          A card component has a figure, a body part, and inside body there are
          title and actions parts
        </p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ShowLatestJobs;
