import React from "react";
import { motion } from "framer-motion";

const Achievement = () => {
  const achievements = [
    {
      title: "Data Science Certificate",
      provider: "DataCamp",
      description: "Completed comprehensive data science curriculum covering Python, SQL, statistics, and machine learning fundamentals.",
      link: "https://app.datacamp.com/learn/my-library",
      icon: "📊"
    },
    {
      title: "LeetCode Profile",
      provider: "LeetCode",
      description: "Active competitive programming practice with focus on algorithms, data structures, and problem-solving patterns.",
      link: "https://leetcode.com/u/sonam98290/",
      icon: "💻"
    },
    {
      title: "Kaggle Profile",
      provider: "Kaggle",
      description: "Data science projects and competitions showcasing practical ML skills and real-world dataset experience.",
      link: "https://www.kaggle.com/sonamgupta8848",
      icon: "🏆"
    },
    {
      title: "Code360 Profile",
      provider: "Coding Ninjas",
      description: "Completed competitive coding courses and practice problems covering DSA, algorithms, and system design.",
      link: "https://www.naukri.com/code360/profile/SonamGupta",
      icon: "🥋"
    },
    {
      title: "HackerRank Profile",
      provider: "HackerRank",
      description: "Solved coding challenges across algorithms, data structures, SQL, and problem-solving domains.",
      link: "https://www.hackerrank.com/profile/sonam98290",
      icon: "⚡"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {achievements.map((item, index) => (
        <motion.div
          key={item.title}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          className="group relative bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-gray-800/50 rounded-2xl p-6 lg:p-8 hover:border-designColor/30 hover:shadow-[0_20px_40px_rgba(255,1,79,0.15)] transition-all duration-500 backdrop-blur-sm"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-designColor/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
          <div className="relative flex flex-col h-full">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-3xl">{item.icon}</span>
              <div>
                <h3 className="text-lg lg:text-xl font-bold text-white group-hover:text-designColor transition-colors duration-300">{item.title}</h3>
                <p className="text-sm text-gray-500">{item.provider}</p>
              </div>
            </div>
            <p className="text-gray-400 leading-relaxed flex-1 mb-6">{item.description}</p>
            <a
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-designColor font-medium text-sm hover:gap-3 transition-all duration-300"
            >
              View Profile
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Achievement;
