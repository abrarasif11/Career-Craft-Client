import React, { useState } from "react";
import useJobs from "../../hooks/useJobs";
import ShowLatestJobs from "../Home/ShowLatestJobs/ShowLatestJobs";

const SeeAllJobs = () => {
  const [sort, setSort] = useState(false);
  const [search, setSearch] = useState("");
  const { jobs, loading } = useJobs(sort, search);
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
        <form
          onKeyUp={(e) => e.preventDefault()} 
          className="w-full max-w-2xl mx-auto"
        >
          <label className="input w-full flex items-center px-3 py-2 border rounded-lg shadow-sm">
            <svg
              className="h-5 w-5 opacity-50 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="text"
              placeholder="Search Jobs By Location"
              value={search} // ✅ controlled input
              onChange={(e) => setSearch(e.target.value)}
              className="w-full outline-none text-sm sm:text-base"
            />
          </label>
        </form>
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
