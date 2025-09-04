import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Shared/Navber/Navbar";
import Footer from "../Shared/Footer/Footer";

const Main = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <Outlet />
      <Footer/>
    </div>
  );
};

export default Main;
