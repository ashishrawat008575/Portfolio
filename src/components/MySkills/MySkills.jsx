import React from 'react';
import { motion } from 'framer-motion';
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaBootstrap } from 'react-icons/fa';
import { SiTailwindcss, SiMui, SiRedux } from 'react-icons/si';

const skills = [
  { name: 'HTML5', level: 80, icon: <FaHtml5 className="text-orange-500" /> },
  { name: 'CSS3', level: 70, icon: <FaCss3Alt className="text-blue-500" /> },
  { name: 'Tailwind', level: 65, icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: 'Bootstrap', level: 60, icon: <FaBootstrap className="text-purple-500" /> },
  { name: 'Mui', level: 65, icon: <SiMui className="text-indigo-400" /> },
  { name: 'JavaScript', level: 60, icon: <FaJs className="text-yellow-400" /> },
  { name: 'React', level: 50, icon: <FaReact className="text-sky-400" /> },
  { name: 'Redux', level: 40, icon: <SiRedux className="text-purple-400" /> },
];

const MySkills = () => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 text-white py-20 px-4 flex flex-col items-center">
      <motion.h2
        className="text-4xl sm:text-5xl font-bold text-yellow-400 mb-6 relative"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        My Skills
        <motion.span
          className="block h-1 w-3/4 bg-yellow-400 absolute bottom-[-8px] left-0 rounded-full"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        />
      </motion.h2>

      <motion.p
        className="text-center text-gray-400 max-w-xl mb-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        viewport={{ once: true }}
      >
        I use modern web tools to create beautiful, fast, and responsive web applications.
      </motion.p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full">
        {skills.map((skill, i) => (
          <motion.div
            key={skill.name}
            className="bg-white/5 backdrop-blur-md p-6 rounded-xl shadow-md border border-white/10 hover:scale-105 transition-all"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.15, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center mb-3">
              <div className="flex items-center gap-2 text-lg font-semibold text-cyan-300">
                {skill.icon} {skill.name}
              </div>
              <span className="text-white font-bold text-sm">{skill.level}%</span>
            </div>
            <div className="w-full h-3 bg-gray-800 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-gradient-to-r from-blue-500 via-cyan-400 to-teal-400 rounded-full"
                initial={{ width: 0 }}
                whileInView={{ width: `${skill.level}%` }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
