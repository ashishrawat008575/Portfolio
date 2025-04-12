import React from "react";
import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8 text-center">
      {/* Social Media Icons */}
      <div className="flex justify-center space-x-6 mb-6">
        <a
          href="https://github.com/ashishrawat" // Replace with your GitHub URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-2xl"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/ashish-singh-430862202/" // Replace with your LinkedIn URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-400 transition-colors duration-300 text-2xl"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://twitter.com/ashishrawat" // Replace with your Twitter URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-blue-500 transition-colors duration-300 text-2xl"
        >
          <FaTwitter />
        </a>
        <a
          href="https://www.instagram.com/ashishrawat" // Replace with your Instagram URL
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-400 hover:text-pink-500 transition-colors duration-300 text-2xl"
        >
          <FaInstagram />
        </a>
      </div>

      {/* Footer Text */}
      <p className="text-sm text-gray-300">
        © 2025 Ashish Rawat. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
