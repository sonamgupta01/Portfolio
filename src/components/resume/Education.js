import React from 'react'
import { motion } from 'framer-motion';
import ResumeCard from './ResumeCard';

const Education = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* part one */}
      <div>
        <div className="py-6 lgl:py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px]">2015-2026</p>
          <h2 className="text-3xl md:text-4xl font-bold">Education Quality</h2>
        </div>
        <div className="mt-6 lgl:mt-14 w-full h-[1000px] border-l-[6px] border-l-black border-opacity-30 flex flex-col gap-10">
          <ResumeCard
            title="Computer Science Engineering in Artificial Intelligence [CSE(AI)]"
            subTitle="Amrita Vishwa Vidyapeetham(2022 - 2026)"
            result="currently going on"
            des="Achieving academic excellence with a focus on foundational subjects, which fostered critical thinking and problem-solving skills essential for future studies."
          />
          <ResumeCard
            title="Higher Secondary School"
            subTitle="Trijuddh M.P.R.R.H Secondary School (2018 - 2020)"
            result="83%"
            des="Higher education is tertiary education leading to award of an academic degree. Higher education, also called post-secondary education."
          />
          <ResumeCard
            title="Secondary School Education"
            subTitle="Trijuddh M.P.R.R.H Secondary School (2015 - 2018)"
            result="86.75%"
            des="Developed a strong academic foundation and honed skills in core subjects, achieving high marks and a solid understanding of essential concepts."
          />
        </div>
      </div>
      
    </motion.div>
  );
}

export default Education