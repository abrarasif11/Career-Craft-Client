import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navber/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="mx-auto w-7/8 font-display ">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Main;
