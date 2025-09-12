import React, { useEffect, useState } from "react";
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
            Swal.fire(
              "Error",
              "Failed to delete. Check console logs.",
              "error"
            );
          });
      }
    });

  useEffect(() => {
    if (!user?.email) return;

    axios
      .get(`http://localhost:7000/job-application?email=${user?.email}`, {
        withCredentials: true,
      })
      .then((res) => setJobs(res.data))
      .catch((err) => console.error("Axios error:", err));
  }, [user?.email]);
  console.log(jobs)

  //   fetch(`http://localhost:7000/job-application?email=${user.email}`)
  //     .then((res) => res.json())
  //     .then((data) => setJobs(data))
  //     .catch((err) => console.error("Fetch error:", err));
  //  [user?.email]);

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
              <th>Email</th>
              <th>User Contact</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job) => (
              <tr key={job._id}>
                <td></td>
                <td>
                  <div className="flex items-center gap-3">
                    <p>{job.applicant_email}</p>
                  </div>
                </td>
                <td>{job.contact}</td>
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
