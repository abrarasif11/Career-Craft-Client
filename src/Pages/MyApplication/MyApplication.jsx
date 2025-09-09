import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { MdDelete } from "react-icons/md";
import Swal from "sweetalert2";
import axios from "axios";

const MyApplication = () => {
  const auth = useAuth();
  const user = auth?.user;
  const [jobs, setJobs] = useState([]);

  const handleUserDelete = (id) =>
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:7000/job-application/${id}`, {
          method: "DELETE",
        })
          .then((res) => {
            if (!res.ok) throw new Error("Network response was not ok");
            return res.json();
          })
          .then((data) => {
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your application has been deleted.",
                "success"
              );
              // update state after delete
              setJobs((prevJobs) => prevJobs.filter((job) => job._id !== id));
            } else {
              Swal.fire(
                "Error",
                "Nothing was deleted. Check your collection.",
                "error"
              );
            }
          })
          .catch((err) => {
            console.error("Delete fetch error:", err);
            Swal.fire("Error", "Failed to delete. Check console logs.", "error");
          });
      }
    });

  // useEffect(() => {
  //   if (!user?.email) return;

  //   fetch(`http://localhost:7000/job-application?email=${user.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setJobs(data))
  //     .catch((err) => console.error("Fetch error:", err));
  // }, [user?.email]);
  axios.get(`http://localhost:7000/job-application?email=${user.email}`, { withCredentials: true })
  .then(res => console.log(setJobs(res.data)))

  return (
    <div>
      <h2 className="text-3xl font-semibold text-center mt-10 mb-10">
        Your Jobs Application
      </h2>
      <div className="overflow-x-auto">
        <table className="table mt-10 mb-10">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id}>
                <td></td>
                <td>
                  <div className="flex items-center gap-3">
                    <div className="avatar">
                      <div className="mask mask-squircle h-12 w-12">
                        <img src={job.company_logo} alt={job.company} />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{job.company}</div>
                      <div className="text-sm opacity-50">{job.location}</div>
                    </div>
                  </div>
                </td>
                <td>{job.title}</td>
                <td>
                  <button
                    onClick={() => handleUserDelete(job._id)}
                    className="flex items-center justify-center text-2xl w-12 h-12 rounded-lg bg-[#4167F0] text-white "
                  >
                    <MdDelete />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyApplication;
