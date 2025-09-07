import React from "react";
import errPage from "../../assets/errorPage/404.gif";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="flex font-display flex-col items-center justify-center min-h-screen text-center">
      <img src={errPage} alt="404 Error" className=" w-[970px]" />
      <Link to="/">
        <button className="btn bg-[#4167F0] text-white mt-6">Back To Home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
