import React from "react";
import { motion } from "framer-motion";
import Image from "../../assets/ProfileImg/Img2.png";
import BgImage from "../../assets/ProfileImg/AboutBgImg.jpg";

// Animation variant for word-by-word effect
const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.08,
      duration: 0.5,
    },
  }),
};

const AboutMe = () => {
  const description = `I'm a passionate frontend web developer who loves building dynamic and user-friendly websites. I focus on creating modern, interactive, and responsive designs that enhance user experience and functionality.`;
  const words = description.split(" ");

  return (
    <div
      className="relative text-white min-h-screen flex items-center justify-center px-6 py-10"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-lg z-0" />

      {/* Main Content */}
      <motion.div
        className="relative z-10 max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 1 }}
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="flex justify-center"
        >
          <div className="relative w-72 h-72 md:w-96 md:h-120 overflow-hidden group">
            <motion.img
              src={Image}
              alt="Ashish Rawat"
              className="w-full h-full object-cover object-center rounded-full group-hover:scale-105 transition-transform duration-500"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
            />
            <div className="absolute inset-0 rounded-full bg-yellow-300/10 blur-2xl opacity-30 group-hover:opacity-50 transition" />
          </div>
        </motion.div>

        {/* About Card */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 1 }}
          className="bg-white/10 backdrop-blur-md text-white shadow-2xl rounded-3xl p-8 space-y-6"
        >
          <motion.h2
            variants={{
              hidden: { opacity: 0, y: -20 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 0.6 }}
            className="text-4xl font-extrabold text-yellow-300 tracking-wider"
          >
            About Me
          </motion.h2>

          {/* Animated Description */}
          <motion.div
            className="text-lg flex flex-wrap gap-x-1"
            variants={{ visible: {} }}
          >
            {words.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={wordVariants}
                className="inline-block"
              >
                {word}&nbsp;
              </motion.span>
            ))}
          </motion.div>

          {/* Personal Info */}
          <div className="space-y-2 pt-2">
            {[
              ["Name:", "Ashish Rawat"],
              ["Location:", "Chandigarh, India"],
              ["Email:", "ashishrawat008575@gmail.com"],
              ["Phone:", "+91-6399896102"],
            ].map(([label, value], i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 1 + i * 0.2 }}
              >
                <span className="font-semibold text-yellow-200">{label}</span> {value}
              </motion.p>
            ))}
          </div>

          {/* CV Button */}
          <motion.a
            href="/cv-link" // Replace with actual CV link
            download
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block mt-4 bg-yellow-300 text-black font-bold py-3 px-6 rounded-full shadow-lg transition-all duration-300"
          >
            Download CV
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default AboutMe;
