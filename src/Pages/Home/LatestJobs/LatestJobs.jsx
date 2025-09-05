import React, { useEffect, useState } from "react";
import ShowLatestJobs from "../ShowLatestJobs/ShowLatestJobs";

const LatestJobs = () => {
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch("http://localhost:7000/jobs")
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-3xl font-bold mt-10">Jobs of the day</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
        {jobs.map((job) => (
          <ShowLatestJobs job={job} key={job._id}></ShowLatestJobs>
        ))}
      </div>
    </div>
  );
};

export default LatestJobs;
