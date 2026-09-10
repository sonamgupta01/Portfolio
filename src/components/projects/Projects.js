import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree, projectFour, projectFive, projectSix } from "../../assets/index";
import ProjectsCard from './ProjectsCard';
import { motion } from 'framer-motion';

const Projects = () => {
  const projects = [
    {
      title: "AI Translator App",
      des: "An AI-powered translation application designed to translate text between languages through an intuitive and user-friendly interface.",
      src: projectOne,
      githubLink: "https://github.com/sonamgupta01/AI-TRANSLATOR-APP",
      liveLink: "https://ai-translator-app-1-l2v4.onrender.com/"
    },
    {
      title: "HireHub – Job Portal",
      des: "A full-stack job portal that connects job seekers and employers, providing a platform to explore opportunities, manage job listings, and streamline the recruitment process.",
      src: projectTwo,
      githubLink: "https://github.com/sonamgupta01/HireHub-Jobportal-FullStack",
      liveLink: "https://delicate-longma-4e2ddd.netlify.app/"
    },
    {
      title: "Indian Legal Bot",
      des: "An AI-powered legal assistance application focused on helping users explore and understand Indian legal information through an interactive chatbot experience.",
      src: projectThree,
      githubLink: "https://github.com/sonamgupta01/Indian-Legal-Bot",
      liveLink: ""
    },
    {
      title: "Omniplex",
      des: "An interactive web application built with modern web technologies, focusing on delivering a clean, responsive, and engaging user experience.",
      src: projectFour,
      githubLink: "https://github.com/sonamgupta01/omniplex",
      liveLink: "https://omniplex-phi.vercel.app/"
    },
    {
      title: "ADBRAND",
      des: "A modern advertising and branding web application designed to present digital marketing and brand-focused solutions through a clean and engaging interface.",
      src: projectFive,
      githubLink: "https://github.com/sonamgupta01/ADBRAND",
      liveLink: "https://adbrand-eta.vercel.app/"
    },
    {
      title: "Resume Extractor",
      des: "An intelligent resume extraction application that processes resumes and extracts relevant information into a structured format, simplifying resume analysis and data processing.",
      src: projectSix,
      githubLink: "https://github.com/sonamgupta01/Resume_Extractor",
      liveLink: ""
    }
  ];

  return (
    <section
      id="projects"
      className="w-full py-20 lg:py-28 border-b border-gray-900"
    >
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <Title title="Featured Work" des="My Projects" />
          <p className="text-gray-400 text-base lg:text-lg leading-relaxed mt-6">
            A selection of projects showcasing my experience across AI, full-stack development, and intelligent applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectsCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;


