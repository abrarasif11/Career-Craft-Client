import React from "react";
import useJobs from "../../hooks/useJobs";
import ShowLatestJobs from "../Home/ShowLatestJobs/ShowLatestJobs";

const SeeAllJobs = () => {
  const { jobs, loading } = useJobs();
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <div>
      <h2 className="text-center text-3xl font-bold p-5">See All Jobs </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
        {jobs.map((job) => (
          <ShowLatestJobs job={job} key={job._id}></ShowLatestJobs>
        ))}
      </div>
    </div>
  );
};

export default SeeAllJobs;
