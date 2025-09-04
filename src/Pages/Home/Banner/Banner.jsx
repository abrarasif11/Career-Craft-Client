import React from "react";
import teamPic from './../../../assets/team/group-people-working-out-business-plan-office.jpg'
import teamPic2 from './../../../assets/team/happy-overjoyed-business-team-celebrate-corporate-victory.jpg'
import { motion } from "motion/react"
const Banner = () => {
  return (
    <div className="hero bg-base-200 min-h-96">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="flex-1">
          <motion.img
            src={teamPic}
            animate={{ y: [50 , 100, 50]}}
            transition={{duration: 7, repeat: Infinity}}
            className="max-w-64 rounded-t-[40px] rounded-br-[40px] border-l-7 border-b-7 border-[#4167F0] shadow-2xl"
          />
          <motion.img
            src={teamPic2}
            animate={{ x: [100, 150, 100]}}
            transition={{duration: 7, repeat: Infinity}}
            className="max-w-64 rounded-t-[40px] rounded-br-[40px] border-l-7 border-b-7 border-[#4167F0] shadow-2xl"
          />
        </div>
        <div className="flex-1">
          <h1 className="text-5xl font-bold">
            The Easiest Way to Get Your New Job
          </h1>
          <p className="py-6">
            Each month, more than 3 million job seekers turn to website in their
            search for work, making over 140,000 
            applications every single day
          </p>
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
