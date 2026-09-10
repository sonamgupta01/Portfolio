import React, { useState, useEffect } from 'react'
import { Link } from "react-scroll";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { FaFacebookF, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { navLinksdata } from '../../constants';

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      <div className={`mx-auto max-w-[1400px] px-4 ${scrolled ? 'py-3' : 'py-4'} transition-all duration-300`}>
        <div className={`flex justify-between items-center relative z-10 ${scrolled ? 'bg-bodyColor/90 backdrop-blur-xl border-b border-gray-800/50 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.3)]' : 'bg-transparent'}`}>
          <div className="flex items-center gap-3">
            <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-designColor to-pink-500 inline-flex items-center justify-center text-white text-lg font-bold shadow-[0_4px_20px_rgba(255,1,79,0.4)]">
              SG
            </span>
            <span className="text-lg font-semibold text-white tracking-tight hidden sm:block">
              SDE-I
            </span>
          </div>
          <div>
            <ul className="hidden mdl:inline-flex items-center gap-2 lg:gap-6">
              {navLinksdata.map(({ _id, title, link }) => (
                <li key={_id}>
                  <Link
                    activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-80}
                    duration={500}
                    className="relative px-4 py-2 text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300 rounded-lg hover:bg-gray-900/50"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
            <span
              onClick={() => setShowMenu(!showMenu)}
              className="text-xl mdl:hidden bg-gray-900/50 border border-gray-800 w-10 h-10 inline-flex items-center justify-center rounded-xl text-designColor cursor-pointer backdrop-blur-sm"
            >
              <FiMenu />
            </span>
            {showMenu && (
              <div className="w-[85%] md:w-[60%] h-screen overflow-scroll absolute top-full left-0 mt-4 bg-bodyColor/95 backdrop-blur-xl border border-gray-800/50 rounded-2xl p-6 scrollbar-hide shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
                <div className="flex flex-col gap-8 py-2 relative">
                  <div className="flex items-center gap-3">
                    <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-designColor to-pink-500 inline-flex items-center justify-center text-white text-xl font-bold shadow-[0_4px_20px_rgba(255,1,79,0.4)]">
                      SG
                    </span>
                    <span className="text-xl font-bold text-white tracking-tight">
                      SDE-I
                    </span>
                  </div>
                  <p className="text-sm text-gray-400 leading-relaxed">
                    Software Developer × AI Enthusiast. Building intelligent, data-driven products.
                  </p>
                  <ul className="flex flex-col gap-2">
                    {navLinksdata.map((item) => (
                      <li key={item._id}>
                        <Link
                          onClick={() => setShowMenu(false)}
                          activeClass="active"
                          to={item.link}
                          spy={true}
                          smooth={true}
                          offset={-80}
                          duration={500}
                          className="block px-4 py-3 text-base font-medium text-gray-400 hover:text-white hover:bg-gray-900/50 transition-all duration-300 rounded-xl"
                        >
                          {item.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                  <div className="flex flex-col gap-4 pt-4 border-t border-gray-800">
                    <h2 className="text-sm uppercase font-titleFont mb-2 text-gray-500 tracking-wider">
                      Connect
                    </h2>
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
                  <span
                    onClick={() => setShowMenu(false)}
                    className="absolute top-4 right-4 text-gray-400 hover:text-designColor duration-300 text-2xl cursor-pointer"
                  >
                    <MdClose />
                  </span>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar