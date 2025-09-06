import React, { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import { MdDelete } from "react-icons/md";

const MyApplication = () => {
  const auth = useAuth();
  console.log("useAuth() return:", auth);

  const user = auth?.user;
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    if (!user?.email) {
      console.log("User not ready yet");
      return;
    }

    fetch(`http://localhost:7000/job-application?email=${user.email}`)
      .then((res) => res.json())
      .then((data) => setJobs(data))
      .catch((err) => console.error("Fetch error:", err));
  }, [user?.email]);

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center mt-10 mb-10">
        Your Jobs Application
      </h2>
      <div className="overflow-x-auto">
        <table className="table mt-10 mb-10">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Delete User</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {jobs.map((job) => (
              <tr key={job._id}>
                <th></th>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img
                          src={job.company_logo}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.company}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>{job.title}</td>
                <td> {job.applicant_email}</td>
                <th>
                  <button className="flex items-center justify-center text-2xl  w-12 h-12 rounded-lg bg-[#4167F0] text-white ">
                    <MdDelete />
                  </button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
