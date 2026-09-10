import React from 'react'
import { HiArrowRight } from "react-icons/hi";

const Card = ({item:{title,des,icon}}) => {
  return (
    <div className="group relative p-6 xl:p-8 h-full rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-950/50 border border-gray-800/50 hover:border-designColor/30 hover:shadow-[0_20px_40px_rgba(255,1,79,0.15)] transition-all duration-500 backdrop-blur-sm">
      <div className="absolute inset-0 bg-gradient-to-br from-designColor/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"></div>
      <div className="relative flex flex-col h-full">
        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-designColor/20 to-pink-500/20 inline-flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
          {icon ? (
            <span className="text-2xl text-designColor">{icon}</span>
          ) : (
            <div className="w-6 h-6 flex flex-col justify-center gap-1">
              <span className="w-full h-[2px] rounded bg-designColor"></span>
              <span className="w-full h-[2px] rounded bg-designColor"></span>
              <span className="w-full h-[2px] rounded bg-designColor"></span>
              <span className="w-full h-[2px] rounded bg-designColor"></span>
            </div>
          )}
        </div>
        <div className="flex-1 flex flex-col gap-4">
          <h3 className="text-xl font-bold text-white group-hover:text-designColor transition-colors duration-300">
            {title}
          </h3>
          <p className="text-gray-400 leading-relaxed flex-1">
            {des}
          </p>
        </div>
        <span className="inline-flex items-center gap-2 text-designColor font-medium text-sm mt-4 group-hover:gap-3 transition-all duration-300">
          <span>Learn more</span>
          <HiArrowRight size={18} className="group-hover:translate-x-1 transition-transform duration-300" />
        </span>
      </div>
    </div>
  );
}

export default Card