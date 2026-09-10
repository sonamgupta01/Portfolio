import React from 'react'
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from 'react-icons/fa';

import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lg:w-[45%] h-full bg-gradient-to-r from-bodyColorLight to-bodyColorLight p-4 lg:p-8 rounded-lg shadow-card-shadow flex flex-col gap-8 justify-center">
      <img
        className="w-full h-64 object-cover rounded-lg mb-2"
        src={contactImg}
        alt="Sonam Gupta"
      />
      <div className="flex flex-col gap-4">
        <h3 className="text-3xl font-bold text-white">Sonam Gupta</h3>
        <p className="text-lg font-normal text-gray-400">
          Software Developer × AI Enthusiast
        </p>
        <p className="text-base text-gray-400 tracking-wide">
        "Building intelligent, data-driven products across AI, software engineering, and modern web technologies. 
         Always open to discussing new opportunities, interesting projects, or just connecting with fellow developers."
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Phone: <span className="text-lightText">+91 9279040686</span>
        </p>
        <p className="text-base text-gray-400 flex items-center gap-2">
          Email: <span className="text-lightText">sonam98290@gmail.com</span>
        </p>
      </div>
      <div className="flex flex-col gap-4">
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in</h2>
        <div className="flex gap-4">
        <a href="https://www.facebook.com/prakriti.gupta.9465" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaFacebookF />
            </span>
          </a>
          <a href="https://github.com/sonamgupta01" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaGithub />
            </span>
          </a>
          <a href="https://www.linkedin.com/in/sonam-gupta-69a181289/" target="_blank" rel="noopener noreferrer">
            <span className="bannerIcon">
              <FaLinkedinIn />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft