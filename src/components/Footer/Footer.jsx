import React from 'react';
import { FaGithub, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className='bg-black text-white py-8 text-center'>
      {/* Social Media Icons  */}
      <div className='flex justify-center space-x-6 mb-6'>
        <a
          href='https://github.com/ashishrawat008575'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-2xl'
        >
          <FaGithub />
        </a>
        <a
          href='https://www.linkedin.com/in/ashish-singh-430862202/'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-400 hover:text-blue-400 transition-colors duration-300 text-2xl'
        >
          <FaLinkedin />
        </a>
        <a
          href='https://wa.me/6399896102'
          target='_blank'
          rel='noopener noreferrer'
          className='text-gray-400 hover:text-blue-500 transition-colors duration-300 text-2xl'
        >
          <FaWhatsapp />
        </a>
      </div>

      {/* Footer Text  */}
      <p className='text-sm text-gray-300'>
        © 2025 Ashish Rawat. All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
