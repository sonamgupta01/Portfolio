import React from 'react'
import LeftBanner from './LeftBanner';
import RightBanner from './RightBanner';
const Banner = () => {
  return (
    <section
      id="home"
      className="w-full pt-16 pb-20 lg:pt-28 lg:pb-28 flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-16 border-b border-gray-900 font-titleFont"
    >
      <LeftBanner />
      <RightBanner />
    </section>
  );
}

export default Banner