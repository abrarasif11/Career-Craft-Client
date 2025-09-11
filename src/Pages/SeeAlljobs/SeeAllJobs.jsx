import React, { useState } from "react";
import useJobs from "../../hooks/useJobs";
import ShowLatestJobs from "../Home/ShowLatestJobs/ShowLatestJobs";

const SeeAllJobs = () => {
  const [sort, setSort] = useState(false); // false = default, true = sorted
  const { jobs, loading } = useJobs(sort); // ✅ pass sort state into hook

  if (loading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2 className="text-center text-3xl font-bold p-5">See All Jobs</h2>
      <div className="text-4xl bg-base-200 p-5 flex items-center">
        <button
          onClick={() => setSort(!sort)}
          className={`btn ${sort ? "btn-success" : "btn-info"}`}
        >
          {sort ? "Sorted by salary (low → high)" : "Sort by salary"}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mx-auto">
        {jobs.map((job) => (
          <ShowLatestJobs job={job} key={job._id} />
        ))}
      </div>
    </div>
  );
};

export default SeeAllJobs;
