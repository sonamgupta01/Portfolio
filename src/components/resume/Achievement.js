import React from "react";
import { motion } from "framer-motion";
import ResumeCard from "./ResumeCard";

const Achievement = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="py-12 font-titleFont flex gap-20"
    >
      <div>
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">Courses</p>
          <h2 className="text-4xl font-bold">Certificates & Links</h2>
        </div>
        <div className="mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Data Science Certificate"
            subTitle="Completed on Datacamp"
            result="Course Completion"
            des={<a href="https://app.datacamp.com/learn/my-library" target="_blank" rel="noopener noreferrer">View Certificate</a>}
          />
          <ResumeCard
            title="Leetcode Profile"
            subTitle="Competitive Programming Achievements"
            result="Profile and Solutions"
            des={<a href="https://leetcode.com/u/sonam98290/" target="_blank" rel="noopener noreferrer">View Leetcode Profile</a>}
          />
          <ResumeCard
            title="Kaggle Profile"
            subTitle="Data Science Projects and Competitions"
            result="Projects and Competitions"
            des={<a href="https://www.kaggle.com/sonamgupta8848" target="_blank" rel="noopener noreferrer">View Kaggle Profile</a>}
          />
          <ResumeCard
            title="Coding Ninjas Code360"
            subTitle="Competitive Coding Journey"
            result="Completed Courses"
            des={<a href="https://www.naukri.com/code360/profile/SonamGupta" target="_blank" rel="noopener noreferrer">View code360 Profile</a>}
          />
          <ResumeCard
            title="Hackerrank Profile"
            subTitle="Coding Achievements"
            result="Solved Problems"
            des={<a href="https://www.hackerrank.com/profile/sonam98290" target="_blank" rel="noopener noreferrer">View Hackerrank Profile</a>}
          />
          

        </div>
      </div>
    </motion.div>
  );
};

export default Achievement;
