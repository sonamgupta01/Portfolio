import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: '💻',
      skills: ['Java', 'C++', 'C', 'Python', 'SQL', 'JavaScript', 'TypeScript']
    },
    {
      title: 'AI / Machine Learning',
      icon: '🧠',
      skills: ['PyTorch', 'TensorFlow', 'Scikit-learn', 'OpenCV', 'NLP', 'Computer Vision', 'Deep Learning']
    },
    {
      title: 'Web Development',
      icon: '🌐',
      skills: ['React', 'Node.js', 'Express', 'HTML5', 'CSS3', 'Tailwind CSS', 'REST APIs']
    },
    {
      title: 'Data & Databases',
      icon: '🗄️',
      skills: ['PostgreSQL', 'MySQL', 'MongoDB', 'Pandas', 'NumPy', 'Data Analysis', 'ETL Pipelines']
    },
    {
      title: 'Tools & Platforms',
      icon: '🛠️',
      skills: ['Git', 'Docker', 'Linux', 'VS Code', 'Postman', 'Jupyter', 'Render', 'Vercel', 'Netlify']
    },
    {
      title: 'Core CS Concepts',
      icon: '📚',
      skills: ['DSA', 'Algorithms', 'OOP', 'OS', 'Networking', 'DBMS', 'System Design']
    }
  ];

  return (
    <div className="space-y-8">
      {skillCategories.map((category, catIndex) => (
        <motion.div
          key={category.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: catIndex * 0.08 }}
          className="bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-gray-800/50 rounded-2xl p-6 lg:p-8 hover:border-designColor/30 transition-all duration-300 backdrop-blur-sm"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="text-2xl">{category.icon}</span>
            <h3 className="text-lg lg:text-xl font-bold text-white">{category.title}</h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {category.skills.map((skill, skillIndex) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: catIndex * 0.08 + skillIndex * 0.03 }}
                className="px-4 py-2 rounded-xl bg-gray-900/50 border border-gray-800/50 text-gray-300 text-sm font-medium hover:border-designColor/50 hover:text-white hover:bg-gray-900 transition-all duration-300 cursor-default"
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Skills;
