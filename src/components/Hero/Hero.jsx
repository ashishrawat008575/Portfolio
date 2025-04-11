import React from "react";
import {
  FaWhatsapp,
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaInstagram,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import { Link } from "react-scroll";

import img from "../../assets/ProfileImg/Img.png";
import BgImg from "../../assets/ProfileImg/BgImg.jpg";

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.3 },
  }),
};

const Hero = () => {
  return (
    <div className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={BgImg}
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center py-10">
        {/* Left Content */}
        <div className="text-center lg:text-left px-2 sm:px-6">
          {["Hello!", "I'm", "Ashish Rawat"].map((text, i) => (
            <motion.p
              key={i}
              custom={i}
              initial="hidden"
              animate="visible"
              variants={textVariants}
              className={`${
                i === 0
                  ? "text-base sm:text-lg text-gray-300"
                  : i === 1
                  ? "text-3xl sm:text-4xl md:text-5xl font-extrabold text-yellow-400 mt-2"
                  : "text-3xl sm:text-4xl md:text-5xl font-extrabold text-green-400 mt-1"
              }`}
            >
              {text}
            </motion.p>
          ))}

          {/* Typewriter Effect */}
          <motion.p
            custom={3}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="text-base sm:text-lg md:text-xl text-gray-200 mt-4"
          >
            <Typewriter
              words={[
                "A Frontend Web Developer",
                "Html, Css, Tailwind, Bootstrap",
                "Javascript, React",
              ]}
              loop={0}
              cursor
              cursorStyle="_"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </motion.p>

          {/* Hire Me Button */}
          <motion.div
            custom={4}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="mt-6 sm:mt-8"
          >
            <Link to="contact" smooth={true} duration={500}>
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-400 text-black font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition"
              >
                Hire Me
              </motion.button>
            </Link>
          </motion.div>

          {/* Social Icons */}
          <motion.div
            custom={5}
            initial="hidden"
            animate="visible"
            variants={textVariants}
            className="flex flex-wrap justify-center lg:justify-start gap-4 mt-8"
          >
            <a href="#" className="text-green-400 text-2xl sm:text-3xl hover:scale-125 hover:shadow-[0_0_15px_rgba(34,197,94,0.8)] transition"><FaWhatsapp /></a>
            <a href="#" className="text-white text-2xl sm:text-3xl hover:scale-125 hover:shadow-[0_0_15px_rgba(255,255,255,0.7)] transition"><FaGithub /></a>
            <a href="#" className="text-blue-500 text-2xl sm:text-3xl hover:scale-125 hover:shadow-[0_0_15px_rgba(59,130,246,0.8)] transition"><FaLinkedin /></a>
            <a href="#" className="text-sky-400 text-2xl sm:text-3xl hover:scale-125 hover:shadow-[0_0_15px_rgba(56,189,248,0.8)] transition"><FaTwitter /></a>
            <a href="#" className="text-pink-500 text-2xl sm:text-3xl hover:scale-125 hover:shadow-[0_0_15px_rgba(236,72,153,0.8)] transition"><FaInstagram /></a>
          </motion.div>
        </div>

        {/* Right Content - Floating Image */}
        <motion.div
          custom={2}
          initial="hidden"
          animate="visible"
          variants={textVariants}
          className="flex justify-center"
        >
          <motion.img
            src={img}
            alt="Ashish Rawat"
            className="rounded-b-full w-48 sm:w-64 md:w-72 lg:w-80 xl:w-96 h-auto object-cover shadow-2xl"
            animate={{ y: [0, -40, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
