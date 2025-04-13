import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from 'react-router-dom';
import {
  FaUser,
  FaCode,
  FaHome,
  FaProjectDiagram,
  FaEnvelope,
} from 'react-icons/fa';

const Navbar = () => {
  const [active, setActive] = useState('home');

  const navItems = [
    { id: 'home', path: '/', icon: FaHome, label: 'Home', gradient: 'from-pink-500 to-yellow-400' },
    { id: 'about', path: '/about', icon: FaUser, label: 'About', gradient: 'from-blue-500 to-cyan-400' },
    { id: 'skills', path: '/skills', icon: FaCode, label: 'Skills', gradient: 'from-green-500 to-lime-400' },
    { id: 'projects', path: '/projects', icon: FaProjectDiagram, label: 'Projects', gradient: 'from-purple-500 to-pink-400' },
    { id: 'contact', path: '/contact', icon: FaEnvelope, label: 'Contact', gradient: 'from-red-500 to-orange-400' },
  ];

  return (
    <>
      {/* Desktop Navbar */}
      <motion.nav
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="hidden sm:flex fixed top-0 left-0 right-0 z-50 text-white px-6 lg:px-16 py-3 lg:py-5 justify-between items-center shadow-lg max-w-screen-2xl mx-auto bg-white/10 backdrop-blur-md rounded-b-xl"
      >
        {/* Logo */}
        <div className="text-white font-extrabold text-xl md:text-2xl tracking-wide drop-shadow-md">
          ASHISH RAWAT
        </div>

        {/* Desktop Nav Links */}
        <div className="flex gap-3 md:gap-6 items-center">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.id;

            return (
              <NavLink
                key={item.id}
                to={item.path}
                onClick={() => setActive(item.id)}
                className="focus:outline-none"
              >
                <motion.div
                  whileTap={{ scale: 0.95 }}
                  whileHover={{ scale: 1.05 }}
                  className={`flex items-center gap-1 md:gap-2 px-3 md:px-4 py-1.5 md:py-2 rounded-full transition-all duration-300 group text-sm md:text-base ${
                    isActive
                      ? `bg-gradient-to-r ${item.gradient} text-white`
                      : 'hover:bg-white/10'
                  }`}
                  role="button"
                  aria-label={`Navigate to ${item.label}`}
                >
                  <div
                    className={`text-lg md:text-xl ${
                      isActive
                        ? 'text-white'
                        : `text-transparent bg-gradient-to-r ${item.gradient} bg-clip-text`
                    }`}
                  >
                    <Icon />
                  </div>
                  <span
                    className={`font-semibold ${
                      isActive ? 'text-white' : 'text-gray-300 group-hover:text-white'
                    }`}
                  >
                    {item.label}
                  </span>
                </motion.div>
              </NavLink>
            );
          })}
        </div>
      </motion.nav>

      {/* Mobile Navbar */}
      <div className="sm:hidden fixed bottom-1 left-4 right-4 z-50 bg-white/10 backdrop-blur-md rounded-3xl px-4 py-2 flex justify-around items-center shadow-2xl max-w-md mx-auto">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;

          return (
            <NavLink
              key={item.id}
              to={item.path}
              onClick={() => setActive(item.id)}
              className="relative flex flex-col items-center justify-center w-full py-2 focus:outline-none"
              aria-label={`Navigate to ${item.label}`}
            >
              {/* Floating Circle for active */}
              {isActive && (
                <motion.div
                  layoutId="mobileActive"
                  className={`absolute -top-5 w-10 h-10 bg-gradient-to-r ${item.gradient} rounded-full flex items-center justify-center shadow-xl z-10`}
                >
                  <Icon className="text-white text-lg" />
                </motion.div>
              )}

              {/* Base icon always shown */}
              <div
                className={`text-lg transition z-20 ${
                  isActive ? 'opacity-0' : 'text-white'
                }`}
              >
                <Icon />
              </div>

              {/* Label always visible for accessibility */}
              <span
                className={`text-[10px] mt-1 font-medium transition-all ${
                  isActive ? 'text-white' : 'text-gray-400'
                }`}
              >
                {item.label}
              </span>
            </NavLink>
          );
        })}
      </div>
    </>
  );
};

export default Navbar;
