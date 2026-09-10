import React from "react";
import Banner from "./components/banner/Banner";
import Contact from "./components/contact/Contact";
import Features from "./components/features/Features";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";


function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
        <Navbar />
      <main className="max-w-[1400px] mx-auto px-4">
        <Banner />
        <Features />
        <Projects />
        <Resume />
        <Contact />
      </main>
    </div>
  );
}

export default App;
