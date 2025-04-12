import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import Img from '../../assets/ProfileImg/Profile.png'; 

// Project Data
const projects = [
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio to showcase your projects, skills, and contact information.',
    link: 'https://rawat-portfolio.vercel.app/',
    image: Img,
    tech: ['React', 'Framer Motion', 'Tailwind'],
  },
  {
    title: 'Weather Forecast App',
    description: 'Get real-time weather updates and forecasts by location using OpenWeatherMap API.',
    link: 'https://www.accuweather.com/',
    image: Img,
    tech: ['React', 'Tailwind', 'API'],
  },
 
  {
    title: 'Task Manager',
    description: 'Organize your tasks with a sleek, minimal task manager with deadlines and priorities.',
    link: 'https://www.amazon.in/',
    image: Img,
    tech: ['React', 'Redux', 'Tailwind'],
  },
  {
    title: 'E-commerce Demo',
    description: 'A demo store with product listings, cart functionality, and checkout flow.',
    link: 'https://www.youtube.com/',
    image: Img,
    tech: ['React', 'Stripe', 'Firebase'],
  },
];

// Animation Variants
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, type: 'spring', stiffness: 60 },
  }),
};

// Project Card Component
const ProjectCard = ({ title, description, link, image, tech, index }) => (
  <motion.div
    className="group rounded-2xl bg-white dark:bg-gray-900 overflow-hidden shadow-md hover:shadow-2xl transform transition duration-300 hover:scale-[1.02]"
    custom={index}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={cardVariants}
  >
    <div className="overflow-hidden">
      <img
        src={image}
        alt={`${title} Thumbnail`}
        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>

    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{description}</p>

      <div className="flex flex-wrap gap-2 mb-4">
        {tech.map((techItem, i) => (
          <span
            key={i}
            className="text-xs bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 px-2 py-1 rounded-full"
          >
            {techItem}
          </span>
        ))}
      </div>

      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors"
      >
        View Project <FaExternalLinkAlt size={14} />
      </a>
    </div>
  </motion.div>
);

// Main Projects Section
const Projects = () => {
  return (
    <section
      id="projects"
      className="relative py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black border-t-4 border-indigo-600"
    >
      {/* Decorative Overlay */}
      <div className="absolute inset-0 bg-gradient-to-tr from-indigo-900/10 via-pink-900/5 to-black/10 pointer-events-none" />

      <div className="relative max-w-6xl mx-auto z-10">
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
