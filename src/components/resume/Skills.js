import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.5 } }}
      className="w-full flex flex-col lgl:flex-row gap-10 lgl:gap-20"
    >
      {/* Coding Skills Section */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-6">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold">Coding Skills</h2>
        </div>
        <div className="mt-8 w-full flex flex-col gap-3">
          {[
            { skill: 'Java', level: '70%' },
            { skill: 'C++', level: '80%' },
            { skill: 'C', level: '75%' },
            { skill: 'SQL', level: '85%' },
            { skill: 'Python', level: '80%' }
          ].map(({ skill, level }, index) => (
            <div className="overflow-x-hidden" key={index}>
              <p className="text-sm uppercase font-medium">{skill}</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="w-[70%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  style={{ width: level }}
                >
                  <span className="absolute -top-7 right-0">{level}</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Development Skills Section */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold">Development Skills</h2>
        </div>
        
        <div className="mt-8 w-full flex flex-col gap-6">
          {/* Added margin-bottom for spacing */}
          {[
            { skill: 'React', level: '75%' },
            { skill: 'HTML5', level: '95%' },
            { skill: 'CSS3', level: '80%' },
            { skill: 'JavaScript', level: '75%' },
            { skill: 'Node.js', level: '40%' }
          ].map(({ skill, level }, index) => (
            <div className="overflow-x-hidden" key={index}>
              <p className="text-sm uppercase font-medium">{skill}</p>
              <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
                <motion.span
                  initial={{ x: '-100%', opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
                  style={{ width: level }}
                >
                  <span className="absolute -top-7 right-0">{level}</span>
                </motion.span>
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Courses Section */}
      <div className="w-full lgl:w-1/2">
        <div className="py-12 font-titleFont flex flex-col gap-4">
          <p className="text-sm text-designColor tracking-[4px] uppercase">Features</p>
          <h2 className="text-3xl md:text-4xl font-bold">Courses </h2>(Amrita University)
          {/* Adjusted to align better with other sections */}
         
        </div>
        <div className="mt-8 w-full flex flex-col gap-6">
          <div className="overflow-x-hidden">
            <p className="text-sm uppercase font-medium">
              DAA | DSA | OS | NETWORK | ROS | ML | DL | CLOUD COMPUTING | DBMS
            </p>
            <span className="w-full h-2 bgOpacity rounded-md inline-flex mt-2">
              <motion.span
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="w-[75%] h-full bg-gradient-to-r from-blue-600 via-pink-500 to-red-500 rounded-md relative"
              >
                <span className="absolute -top-7 right-0">75%</span>
              </motion.span>
            </span>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Skills;
