import React from 'react';
import BgImg from "../../assets/ProfileImg/BgImg.jpg";

const ContactMeHeader = () => {
  return (
    <div className="relative h-[30vh] md:h-[40vh] w-full overflow-hidden py-20">
      
      {/* Background Image with smooth zoom animation */}
      <div
        className="absolute inset-0 bg-center bg-cover bg-no-repeat "
        style={{ backgroundImage: `url(${BgImg})` }}
      ></div>

      {/* Gradient overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20 z-0"></div>

      {/* Centered animated heading */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center animate-fade-in-up">
          Contact Me
        </h1>
      </div>
    </div>
  );
};

export default ContactMeHeader;
