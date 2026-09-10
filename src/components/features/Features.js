import React from "react";
import Title from "../layouts/Title";
import Card from "./Card";
import { featuresData } from "../../data/data";
import { motion } from "framer-motion";

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 lg:py-28 border-b border-gray-900"
    >
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-20">
          <Title title="What I Do" des="My Expertise" />
          <p className="text-gray-400 text-base lg:text-lg leading-relaxed mt-6">
            I specialize in building intelligent, scalable solutions across AI, software engineering, and modern web technologies. Each area represents a core competency I've developed through hands-on projects and continuous learning.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {featuresData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card item={item} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
