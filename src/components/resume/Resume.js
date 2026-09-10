import React, { useState } from 'react'
import Title from '../layouts/Title';
import Education from './Education';
import Skills from './Skills';
import Achievement from './Achievement';
import { motion } from 'framer-motion';

const Resume = () => {
  const [activeTab, setActiveTab] = useState('education');

  const tabs = [
    { id: 'education', label: 'Education', icon: '🎓' },
    { id: 'skills', label: 'Skills', icon: '⚡' },
    { id: 'achievements', label: 'Achievements', icon: '🏆' }
  ];

  return (
    <section id="resume" className="w-full py-20 lg:py-28 border-b border-gray-900">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <Title title="Background" des="My Resume" />
          <p className="text-gray-400 text-base lg:text-lg leading-relaxed mt-6">
            My journey in computer science and AI, from academic foundations to professional practice.
          </p>
        </div>

        {/* Modern Tab Navigation */}
        <div className="flex justify-center gap-2 mb-12 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-6 py-3 rounded-xl font-medium text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-designColor/20 to-pink-500/20 text-designColor border border-designColor/30 shadow-[0_0_30px_rgba(255,1,79,0.15)]'
                  : 'bg-gray-900/50 text-gray-400 border border-gray-800/50 hover:text-white hover:border-gray-700 hover:bg-gray-900'
              }`}
            >
              <span className="flex items-center gap-2">
                <span>{tab.icon}</span>
                {tab.label}
              </span>
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="min-h-[400px]">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === 'education' && <Education />}
            {activeTab === 'skills' && <Skills />}
            {activeTab === 'achievements' && <Achievement />}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Resume;
