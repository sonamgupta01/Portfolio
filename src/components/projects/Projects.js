import React from 'react'
import Title from '../layouts/Title'
import { projectOne, projectTwo, projectThree ,projectfour} from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Event Management System"
          des="Event management system built with HTML, CSS, and Java."
          src={projectOne}
          link="https://drive.google.com/drive/folders/1bZXpNwibykkMMmrvmEo4nXmaG8nYpUmf?usp=drive_link"
        />
        <ProjectsCard
          title="Vehicle Management System"
          des="Vehicle management system developed using Java."
          src={projectTwo}
          link="https://drive.google.com/drive/folders/1o2JRT6hC-cMlJ2ow4tvUg-mlHXilJpwL?usp=drive_link"
        />
        <ProjectsCard
          title="Paint Application"
          des="Paint application using SQL and Python."
          src={projectThree}
          link="https://github.com/sonamgupta01/sketchy.git"
        />
        <ProjectsCard
          title="Credit Card Fraud Detection"
          des="Machine learning project for detecting credit card fraud."
          src={projectfour}
          link="https://colab.research.google.com/drive/1CIUmRFv8aVCR4zfxUVltZk8h_6kaRYhd?usp=drive_link"
        />
      </div>
    </section>
  );
}

export default Projects;


