import React from 'react';
import { motion } from 'framer-motion';
import img from "../../assets/ProfileImg/Img.png";

const ContactMe = () => {
  return (
    <div className="bg-[#111] text-white min-h-screen py-16 px-6 flex flex-col items-center justify-center">
      <motion.h2
        className="text-4xl font-bold text-yellow-400 mb-2 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Contact Me
      </motion.h2>
      <motion.p
        className="text-gray-300 text-lg mb-12 text-center max-w-2xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        If you have any questions or would like to work together, feel free to reach out!
      </motion.p>

      <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-5xl gap-10">
        {/* Image Section */}
        <motion.div
          className="flex-shrink-0"
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src={img}
            alt="Profile"
            className=" w-74 h-94 object-cover shadow-lg border-4 border-blue-400"
          />
        </motion.div>

        {/* Form Section */}
        <motion.form
          className="flex flex-col w-full max-w-lg space-y-5"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="bg-gray-800 p-4 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="bg-gray-800 p-4 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400 transition"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="bg-gray-800 p-4 rounded-lg outline-none focus:ring-2 focus:ring-yellow-400 transition resize-none"
          ></textarea>
          <button
            type="submit"
            className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-black font-bold py-3 rounded-lg hover:scale-105 transition-transform"
          >
            Send Message
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default ContactMe;
