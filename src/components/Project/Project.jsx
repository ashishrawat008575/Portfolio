import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';

const projects = [
  {
    title: 'Weather Forecast App',
    description: 'Get real-time weather updates and forecasts by location using OpenWeatherMap API.',
    link: '#',
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase your projects, skills, and contact information.',
    link: '#',
  },
  {
    title: 'Task Manager',
    description: 'Organize your tasks with a sleek, minimal task manager with deadlines and priorities.',
    link: '#',
  },
  {
    title: 'E-commerce Demo',
    description: 'A demo store with product listings, cart functionality, and checkout flow.',
    link: '#',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: 'spring', stiffness: 60 },
  }),
};

const ProjectCard = ({ title, description, link, index }) => (
  <motion.div
    className="relative rounded-2xl p-1 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 hover:shadow-2xl transition-all"
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={cardVariants}
  >
    <div className="bg-white dark:bg-gray-900 rounded-2xl h-full p-6 hover:shadow-xl transition-all">
      <h3 className="text-2xl font-bold mb-2 text-gray-800 dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 mb-6">{description}</p>
      <a
        href={link}
        className="inline-flex items-center gap-2 bg-indigo-600 text-white dark:bg-indigo-500 px-4 py-2 rounded-full hover:bg-indigo-700 dark:hover:bg-indigo-600 transition-colors text-sm font-medium"
      >
        View Project <FaExternalLinkAlt size={14} />
      </a>
    </div>
  </motion.div>
);

const Projects = () => {
  return (
    <section
      id="projects"
      className="py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black border-4 border-blue-500"
    >
      <div className="max-w-6xl mx-auto">
        <motion.h2
          className="text-4xl sm:text-5xl font-extrabold text-center mb-16 text-white"
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
