import React from "react";
import BgImg from "../../assets/ProfileImg/BgImg.jpg";

const ProjectHeader = () => {
  return (
    <div className="relative h-[30vh] md:h-[40vh] w-full overflow-hidden flex items-center justify-center">
      {/* Animated Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 animate-zoom-slow transition-transform duration-10000"
        style={{ backgroundImage: `url(${BgImg})` }}
      ></div>

      {/* Glass Overlay with Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30 backdrop-blur-sm z-0"></div>

      {/* Centered Heading Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-white text-4xl md:text-6xl font-extrabold tracking-wide animate-fade-up">
          <span className="text-yellow-400">My</span> Projects
        </h1>
        <p className="text-gray-300 text-base md:text-lg mt-2 animate-fade-up delay-200">
          A showcase of the work I’ve built and contributed to
        </p>
      </div>
    </div>
  );
};

export default ProjectHeader;
