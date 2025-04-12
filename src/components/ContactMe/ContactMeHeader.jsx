import React from "react";
import BgImg from "../../assets/ProfileImg/BgImg.jpg";

const ContactMeHeader = () => {
  return (
    <div className="relative h-[30vh] md:h-[40vh] w-full overflow-hidden flex items-center justify-center">
      {/* Background Image with smooth animation */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-110 animate-zoom-slow transition-transform duration-10000"
        style={{ backgroundImage: `url(${BgImg})` }}
      ></div>

      {/* Glassy Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/30 backdrop-blur-sm z-0"></div>

      {/* Heading Content */}
      <div className="relative z-10 text-center px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold text-white animate-fade-up tracking-wide">
          Let's <span className="text-yellow-400">Connect</span>
        </h1>
        <p className="text-gray-300 text-base md:text-lg mt-2 animate-fade-up delay-200">
          I’d love to hear from you — reach out for collaborations or questions!
        </p>
      </div>
    </div>
  );
};

export default ContactMeHeader;
