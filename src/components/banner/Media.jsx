import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Media = () => {
  return (
    <div className="flex flex-col gap-8 pt-4">
      <div>
        <h2 className="text-sm uppercase font-titleFont mb-4 text-gray-500 tracking-wider">
          Connect
        </h2>
        <div className="flex gap-3">
          <a
            href="https://www.facebook.com/prakriti.gupta.9465"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <span className="w-11 h-11 rounded-xl bg-gray-900/50 border border-gray-800 inline-flex items-center justify-center text-gray-400 hover:text-designColor hover:border-designColor/50 hover:bg-gray-900 transition-all duration-300 backdrop-blur-sm">
              <FaFacebookF size={20} />
            </span>
          </a>
          <a
            href="https://github.com/sonamgupta01"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <span className="w-11 h-11 rounded-xl bg-gray-900/50 border border-gray-800 inline-flex items-center justify-center text-gray-400 hover:text-designColor hover:border-designColor/50 hover:bg-gray-900 transition-all duration-300 backdrop-blur-sm">
              <FaGithub size={20} />
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/sonam-gupta-69a181289/"
            target="_blank"
            rel="noopener noreferrer"
            className="group"
          >
            <span className="w-11 h-11 rounded-xl bg-gray-900/50 border border-gray-800 inline-flex items-center justify-center text-gray-400 hover:text-designColor hover:border-designColor/50 hover:bg-gray-900 transition-all duration-300 backdrop-blur-sm">
              <FaLinkedinIn size={20} />
            </span>
          </a>
          <a
            href="mailto:sonam98290@gmail.com?subject=Hello&body=I%20would%20like%20to%20connect%20with%20you"
            className="group"
          >
            <span className="w-11 h-11 rounded-xl bg-gray-900/50 border border-gray-800 inline-flex items-center justify-center text-gray-400 hover:text-designColor hover:border-designColor/50 hover:bg-gray-900 transition-all duration-300 backdrop-blur-sm">
              <FaEnvelope size={20} />
            </span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Media;
