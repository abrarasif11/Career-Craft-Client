import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

const MyPostedJobs = () => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:7000/jobs?email=${user?.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data));
  }, [user?.email]);
  return (
    <div>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Job Title</th>
                <th>Job Deadline</th>
                <th>HR Name</th>
              </tr>
            </thead>
            <tbody>
              {jobs.map((job, index) => (
                <tr job={job} key={job._id} className="hover:bg-base-300">
                  <th>{index + 1}</th>
                  <td>{job.title}</td>
                  <td>{job.applicationDeadline}</td>
                  <td>{job.hr_name}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyPostedJobs;
