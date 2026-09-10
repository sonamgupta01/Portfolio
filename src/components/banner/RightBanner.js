import React from 'react'
import { bannerImg } from "../../assets/index";

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-end items-center relative pr-4 xl:pr-12">
      <div className="relative w-[300px] h-[400px] lgl:w-[450px] lgl:h-[600px] overflow-hidden rounded-2xl shadow-[0_20px_60px_rgba(0,0,0,0.4)]">
        <img
          className="w-full h-full object-cover object-position-top"
          src={bannerImg}
          alt="Sonam Gupta"
        />
      </div>
      <div className="absolute -bottom-6 -right-6 w-[200px] h-[200px] lgl:w-[280px] lgl:h-[280px] bg-gradient-to-br from-designColor/20 to-pink-500/10 rounded-2xl blur-3xl pointer-events-none"></div>
    </div>
  );
}

export default RightBanner