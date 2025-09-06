import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";

const JobApply = () => {
  const id = useParams();
  const { user } = useAuth();
  const navigate = useNavigate()
  // console.log(id, user)

  const handleJobApply = (e) => {
    e.preventDefault();
    const form = e.target;
    const contact = form.contact.value;
    const linkedin = form.linkedin.value;
    const github = form.github.value;
    // const resume = form.resume.value;
    // console.log(contact, linkedin, github)

    const jobApply = {
      job_id: id,
      applicant_email: user.email,
      contact,
      linkedin,
      github,
    };
    fetch("http://localhost:7000/job-application", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(jobApply),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your Job Apply Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          navigate('/myApplication')
        }
      });
  };
  return (
    <section className="p-6 text-gray-800">
      <form
        onSubmit={handleJobApply}
        noValidate=""
        className="container w-full mt-10 mb-10 max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-50"
      >
        <p className="text-center bg-">Job Application</p>
        <h2 className="w-full text-3xl text-center font-bold leading-tight">
          Start your career today
        </h2>
        <p className="text-center">
          Please fill in your information and send it to the employer.
        </p>
        {/* <div>
          <label htmlFor="name" className="block mb-1 ml-1">
            Full Name *
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="John Kabir"
            required=""
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          />
        </div> */}
        {/* <div>
          <label htmlFor="email" className="block mb-1 ml-1">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="john.kabir@gmail.com"
            required=""
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          />
        </div> */}
        <div>
          <label htmlFor="email" className="block mb-1 ml-1">
            Contact Number *
          </label>
          <input
            id="contact"
            type="tel"
            name="contact"
            placeholder="+8807176240857"
            required=""
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          />
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 ml-1">
            LinkedIn URL
          </label>
          <input
            id="message"
            type="url"
            name="linkedin"
            placeholder="Your LinkedIn URL"
            className="block w-full p-2 rounded  focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          ></input>
        </div>
        <div>
          <label htmlFor="message" className="block mb-1 ml-1">
            GitHub URL
          </label>
          <input
            id="message"
            type="url"
            name="github"
            placeholder="Your GitHub URL"
            className="block w-full p-2 rounded  focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-600 bg-gray-100"
          ></input>
        </div>
        {/* <div>
          <label htmlFor="message" className="block mb-1 ml-1">
            Upload Resume
          </label>
          <input type="file" name="resume" className="file-input w-full file-input-lg" />
        </div> */}
        <div>
          <fieldset className="fieldset bg-base-100  border-base-300 rounded-box w-full border p-4">
            <label className="label">
              <input type="checkbox" defaultChecked className="checkbox" />
              Agree our terms and policy
            </label>
          </fieldset>
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-[#4167F0] focus:ring-violet-600 text-white"
          >
            Apply Job
          </button>
        </div>
      </form>
    </section>
  );
};

export default JobApply;
