import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaArrowRight, FaDownload } from "react-icons/fa";
import Media from './Media';

const LeftBanner = () => {
    const [text] = useTypewriter({
      words: [
        "Software Developer × AI Enthusiast",
        "Building With Data. Driven By AI.",
        "Turning Ideas Into Digital Products.",
        "Engineering Intelligence Into Software.",
        "From Ideas → Code → Impact."
      ],
      loop: true,
      typeSpeed: 25,
      deleteSpeed: 15,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-12 pr-4 xl:pr-12">
      <div className="flex flex-col gap-4">
        <span className="text-sm font-medium text-designColor tracking-widest uppercase">
          {/* SOFTWARE • AI • DATA */}
        </span>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight">
          Hi, I'm <span className="text-designColor">Sonam Gupta</span>
        </h1>
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white leading-tight min-h-[3.5rem]">
          <span className="text-gray-300">{text}</span>
          <Cursor
            cursorBlinking="true"
            cursorStyle="|"
            cursorColor="#ff014f"
            cursorWidth={3}
          />
        </h2>
        <p className="text-base md:text-lg font-bodyFont leading-relaxed text-gray-300 max-w-xl">
          Software Developer with a passion for building intelligent, data-driven products across AI, software engineering, and modern web technologies. I enjoy turning complex ideas into practical, scalable experiences — from AI-powered applications and data solutions to clean, user-focused web products.
        </p>
      </div>
      
      {/* CTA Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <a
          href="#projects"
          className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl bg-gradient-to-r from-designColor to-pink-600 text-white font-medium text-base hover:from-pink-600 hover:to-designColor hover:shadow-[0_0_30px_rgba(255,1,79,0.4)] transition-all duration-300"
        >
          View My Projects
          <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" size={18} />
        </a>
        <a
          href="/Sonam_Gupta_Resume.pdf"
          download
          className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl border border-gray-700 bg-transparent text-white font-medium text-base hover:border-designColor hover:bg-gray-900 hover:shadow-[0_0_30px_rgba(255,1,79,0.2)] transition-all duration-300"
        >
          <FaDownload size={18} />
          Download Resume
        </a>
      </div>

      {/* Media/Social Icons */}
      <Media />
    </div>
  );
}

export default LeftBanner