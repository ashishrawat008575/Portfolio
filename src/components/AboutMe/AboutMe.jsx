import React from "react";
import { motion } from "framer-motion";
import BgImage from "../../assets/ProfileImg/AboutBgImg.jpg";

const wordVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.05,
      duration: 0.4,
    },
  }),
};

const AboutMe = () => {
  const description = `I'm a frontend developer, passionate about learning and building beautiful, responsive websites. I enjoy turning ideas into real web experiences using HTML, CSS, JavaScript, and React. Every project helps me grow, and I'm excited to keep learning, improving, and pushing my limits as a developer.`;

  const words = description.split(" ");

  return (
    <div
      className="relative text-white min-h-screen flex items-center justify-center px-6 py-14"
      style={{
        backgroundImage: `url(${BgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />

      <motion.div
        className="relative z-10 max-w-3xl text-center bg-white/10 backdrop-blur-md shadow-xl rounded-3xl p-10 space-y-6"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 1 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-yellow-300 tracking-wide"
        >
          About Me
        </motion.h2>

        <motion.div
          className="text-lg flex flex-wrap justify-center gap-x-1 leading-relaxed"
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
      </motion.div>
    </div>
  );
};

export default AboutMe;

