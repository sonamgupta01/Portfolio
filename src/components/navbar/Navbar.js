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
      <div className="mx-auto max-w-[1400px] px-4">
        <div className={`relative z-10 transition-all duration-300 ${
          scrolled 
            ? 'py-3 bg-bodyColor/80 backdrop-blur-xl border-b border-borderColor/50 rounded-b-2xl shadow-nav-shadow' 
            : 'py-4 bg-transparent'
        }`}>
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-3">
              <span className="w-10 h-10 rounded-xl bg-gradient-to-br from-designColor to-designColorViolet inline-flex items-center justify-center text-white text-lg font-bold shadow-[0_4px_20px_rgba(255,1,79,0.4)]">
                SG
              </span>
              <span className="text-lg font-semibold text-white tracking-tight hidden sm:block">
                SDE - I
              </span>
            </div>
            <div>
              <ul className="hidden mdl:inline-flex items-center gap-2 lg:gap-6">
                {navLinksdata.map(({ _id, title, link }) => (
                  <li key={_id}>
                    <Link
                      activeClass="nav-link-active"
                      to={link}
                      spy={true}
                      smooth={true}
                      offset={-80}
                      duration={500}
                      className="nav-link"
                    >
                      {title}
                    </Link>
                  </li>
                ))}
              </ul>
              <span
                onClick={() => setShowMenu(!showMenu)}
                className="text-xl mdl:hidden bg-bodyColorLight/50 border border-borderColor/50 w-10 h-10 inline-flex items-center justify-center rounded-xl text-designColor cursor-pointer backdrop-blur-sm"
              >
                <FiMenu />
              </span>
              {showMenu && (
                <div className="w-[85%] md:w-[60%] h-screen overflow-scroll absolute top-full left-0 mt-4 bg-bodyColor/95 backdrop-blur-xl border border-borderColor/50 rounded-2xl p-6 scrollbar-hide shadow-nav-shadow">
                  <div className="flex flex-col gap-8 py-2 relative">
                    <div className="flex items-center gap-3">
                      <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-designColor to-designColorViolet inline-flex items-center justify-center text-white text-xl font-bold shadow-[0_4px_20px_rgba(255,1,79,0.4)]">
                        SG
                      </span>
                      <span className="text-xl font-bold text-white tracking-tight">
                        Sonam Gupta
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
                            activeClass="nav-link-active"
                            to={item.link}
                            spy={true}
                            smooth={true}
                            offset={-80}
                            duration={500}
                            className="block px-4 py-3 text-base font-medium text-gray-400 hover:text-white hover:bg-bodyColorLight/50 transition-all duration-300 rounded-xl"
                          >
                            {item.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                    <div className="flex flex-col gap-4 pt-4 border-t border-borderColor/50">
                      <h2 className="text-sm uppercase font-titleFont mb-2 text-gray-500 tracking-wider">
                        Connect
                      </h2>
                      <div className="flex gap-3">
                        <a href="https://www.facebook.com/prakriti.gupta.9465" target="_blank" rel="noopener noreferrer" className="group">
                          <span className="social-icon">
                            <FaFacebookF size={20} />
                          </span>
                        </a>
                        <a href="https://github.com/sonamgupta01" target="_blank" rel="noopener noreferrer" className="group">
                          <span className="social-icon">
                            <FaGithub size={20} />
                          </span>
                        </a>
                        <a href="https://www.linkedin.com/in/sonam-gupta-69a181289/" target="_blank" rel="noopener noreferrer" className="group">
                          <span className="social-icon">
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
    </div>
  );
}

export default Navbar