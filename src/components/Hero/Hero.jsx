import React from 'react';
import { FaWhatsapp, FaGithub, FaLinkedin } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { Typewriter } from 'react-simple-typewriter';
import { Link } from 'react-scroll';

import img from '../../assets/ProfileImg/Profile.png';
import BgImg from '../../assets/ProfileImg/AboutBgImg.jpg';

const textVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.8 },
  }),
};

const Hero = () => {
  return (
    <div className='relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-12 overflow-hidden'>
      {/* Background */}
      <div className='absolute inset-0'>
        <img
          src={BgImg}
          alt='Background'
          className='w-full h-full object-cover'
        />
        <div className='absolute inset-0 bg-black/70 backdrop-blur-md'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center py-14'>
        {/* Left Content */}
        <div className='text-center lg:text-left px-2 sm:px-6'>
          <motion.p
            custom={0}
            initial='hidden'
            animate='visible'
            variants={textVariants}
            className='text-xl sm:text-2xl text-gray-300'
          >
            Hi there!
          </motion.p>

          <motion.h1
            custom={1}
            initial='hidden'
            animate='visible'
            variants={textVariants}
            className='text-4xl sm:text-5xl md:text-6xl font-bold text-yellow-400 mt-2'
          >
            I'm Ashish Rawat
          </motion.h1>

          <motion.p
            custom={2}
            initial='hidden'
            animate='visible'
            variants={textVariants}
            className='text-base sm:text-lg md:text-xl text-gray-200 mt-4'
          >
            <Typewriter
              words={[
                'Frontend Developer in Progress...',
                'Crafting Clean UI with React',
                'Learning. Building. Growing.',
              ]}
              loop={0}
              cursor
              cursorStyle='|'
              typeSpeed={60}
              deleteSpeed={40}
              delaySpeed={1200}
            />
          </motion.p>

          {/* CTA Button */}
          <motion.div
            custom={3}
            initial='hidden'
            animate='visible'
            variants={textVariants}
            className='mt-8'
          >
            <a href="#contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className='bg-yellow-400 text-black font-bold px-8 py-3 rounded-full shadow-lg hover:bg-yellow-300 transition'
              >
                Hire Me
              </motion.button>
            </a>
          </motion.div>


          {/* Social Links */}
          <motion.div
            custom={4}
            initial='hidden'
            animate='visible'
            variants={textVariants}
            className='flex justify-center lg:justify-start gap-5 mt-10'
          >
            <a
              href='https://wa.me/6399896102'
              className='text-green-400 hover:scale-200 transition text-2xl'
            >
              <FaWhatsapp />
            </a>
            <a
              href='https://github.com/ashishrawat008575'
              className='text-white hover:scale-200 transition text-2xl'
            >
              <FaGithub />
            </a>
            <a
              href='https://www.linkedin.com/in/ashish-singh-430862202/'
              className='text-blue-500 hover:scale-200 transition text-2xl'
            >
              <FaLinkedin />
            </a>
          </motion.div>
        </div>

        {/* Right Content - Image */}
        <motion.div
          custom={5}
          initial='hidden'
          animate='visible'
          variants={textVariants}
          className='flex justify-center'
        >
          <motion.div
            className='relative w-64 h-64 sm:w-80 sm:h-80 md:w-116 md:h-116 overflow-hidden rounded-full shadow-2xl'
            animate={{ y: [0, -25, 0] }}
            transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          >
            <img
              src={img}
              alt='Ashish Rawat'
              className='w-full h-full object-cover object-center rounded-full border-4 border-yellow-400'
            />
            <div className='absolute inset-0 bg-yellow-300/10 blur-2xl rounded-full'></div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
