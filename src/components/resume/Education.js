import React from 'react'
import { motion } from 'framer-motion';

const Education = () => {
  const education = [
    {
      year: '2022 – 2026',
      degree: 'B.Tech in Computer Science & Engineering (AI)',
      institution: 'Amrita Vishwa Vidyapeetham, Kerala',
      description: 'Specialized in Artificial Intelligence & Machine Learning. Built strong foundations in algorithms, data structures, neural networks, and software engineering principles. Graduated with distinction.',
      current: false
    },
    {
      year: '2018 – 2020',
      degree: 'Higher Secondary Education (Science)',
      institution: 'Trijuddh M.P.R.R.H Secondary School',
      description: 'Focused on Mathematics, Physics, and Chemistry. Developed analytical thinking and problem-solving skills that formed the basis for engineering studies.',
      current: false
    },
    {
      year: '2015 – 2018',
      degree: 'Secondary Education',
      institution: 'Trijuddh M.P.R.R.H Secondary School',
      description: 'Built strong academic foundations across core subjects. Developed discipline and learning habits that enabled success in higher education.',
      current: false
    }
  ];

  return (
    <div className="relative">
      {/* Vertical timeline line */}
      <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-designColor/50 to-transparent"></div>
      
      <div className="space-y-10">
        {education.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="relative pl-16"
          >
            {/* Timeline dot */}
            <div className="absolute left-0 top-2 w-12 h-12 flex items-center justify-center">
              <div className={`w-4 h-4 rounded-full border-4 ${
                index === 0 ? 'bg-designColor border-designColor' : 'bg-gray-900 border-gray-700'
              } relative z-10`} />
              <div className="absolute left-4 top-4 w-0.5 h-full bg-gray-800 -z-10" />
            </div>
            
            {/* Content card */}
            <div className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-gray-800/50 rounded-2xl p-6 lg:p-8 hover:border-designColor/30 hover:shadow-[0_10px_30px_rgba(255,1,79,0.1)] transition-all duration-300 backdrop-blur-sm">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4 mb-4">
                <div>
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-designColor/10 text-designColor text-xs font-medium mb-3">
                    {item.year}
                  </span>
                  <h3 className="text-xl lg:text-2xl font-bold text-white mb-1">{item.degree}</h3>
                  <p className="text-gray-400">{item.institution}</p>
                </div>
                {item.current && (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-green-500/20 text-green-400 text-xs font-medium">
                    Current
                  </span>
                )}
              </div>
              <p className="text-gray-300 leading-relaxed">{item.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Education