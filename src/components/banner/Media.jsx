import React from 'react';
import { FaFacebookF, FaGithub, FaLinkedinIn, FaReact } from "react-icons/fa";
import { SiTailwindcss, SiPostman } from "react-icons/si";
import { SiNodedotjs } from 'react-icons/si';
import { FaGoogle } from 'react-icons/fa';


const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          Find me in
        </h2>
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
          {/* Adding Gmail */}
          <a href="mailto:sonam98290@gmail.com?subject=Hello&body=I%20would%20like%20to%20connect%20with%20you">
            <span className="bannerIcon">
              <FaGoogle />
            </span>
          </a>

        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          BEST SKILL ON
        </h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <FaReact />
          </span>
          <span className="bannerIcon">
            <SiNodedotjs />
          </span>
          <span className="bannerIcon">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon">
            <SiPostman />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
