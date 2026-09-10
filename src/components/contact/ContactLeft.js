import React from 'react'
import { FaFacebookF, FaLinkedinIn, FaGithub, FaEnvelope, FaPhone } from "react-icons/fa";
import { contactImg } from "../../assets/index";

const ContactLeft = () => {
  return (
    <div className="w-full lg:w-[40%] xl:w-[38%] flex flex-col">
      <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-8 bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-gray-800/50">
        <img
          className="w-full h-full object-cover"
          src={contactImg}
          alt="Sonam Gupta"
        />
      </div>
      
      <div className="space-y-6">
        <div>
          <h3 className="text-2xl lg:text-3xl font-bold text-white mb-1">Sonam Gupta</h3>
          <p className="text-lg text-designColor font-medium">Software Developer × AI Enthusiast</p>
        </div>
        
        <p className="text-gray-400 leading-relaxed">
          Building intelligent, data-driven products across AI, software engineering, and modern web technologies. 
          Always open to discussing new opportunities, interesting projects, or just connecting with fellow developers.
        </p>

        <div className="space-y-4 pt-4 border-t border-gray-800/50">
          <div className="flex items-center gap-4">
            <span className="w-11 h-11 rounded-xl bg-gray-900/50 border border-gray-800 inline-flex items-center justify-center text-designColor">
              <FaPhone size={18} />
            </span>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Phone</p>
              <a href="tel:+919279040686" className="text-gray-300 hover:text-designColor transition-colors">+91 92790 40686</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className="w-11 h-11 rounded-xl bg-gray-900/50 border border-gray-800 inline-flex items-center justify-center text-designColor">
              <FaEnvelope size={18} />
            </span>
            <div>
              <p className="text-xs text-gray-500 uppercase tracking-wider">Email</p>
              <a href="mailto:sonam98290@gmail.com" className="text-gray-300 hover:text-designColor transition-colors">sonam98290@gmail.com</a>
            </div>
          </div>
        </div>

        <div className="pt-4 border-t border-gray-800/50">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Connect</p>
          <div className="flex gap-3">
            <a href="https://www.facebook.com/prakriti.gupta.9465" target="_blank" rel="noopener noreferrer" className="group">
              <span className="w-11 h-11 rounded-xl bg-gray-900/50 border border-gray-800 inline-flex items-center justify-center text-gray-400 hover:text-designColor hover:border-designColor/50 hover:bg-gray-900 transition-all duration-300 backdrop-blur-sm">
                <FaFacebookF size={20} />
              </span>
            </a>
            <a href="https://github.com/sonamgupta01" target="_blank" rel="noopener noreferrer" className="group">
              <span className="w-11 h-11 rounded-xl bg-gray-900/50 border border-gray-800 inline-flex items-center justify-center text-gray-400 hover:text-designColor hover:border-designColor/50 hover:bg-gray-900 transition-all duration-300 backdrop-blur-sm">
                <FaGithub size={20} />
              </span>
            </a>
            <a href="https://www.linkedin.com/in/sonam-gupta-69a181289/" target="_blank" rel="noopener noreferrer" className="group">
              <span className="w-11 h-11 rounded-xl bg-gray-900/50 border border-gray-800 inline-flex items-center justify-center text-gray-400 hover:text-designColor hover:border-designColor/50 hover:bg-gray-900 transition-all duration-300 backdrop-blur-sm">
                <FaLinkedinIn size={20} />
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactLeft