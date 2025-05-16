import React from 'react';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import PortfolioImg from '../../assets/ProjectsImg/PortfolioImg.png';
import DelishLicksImg from '../../assets/ProjectsImg/Delish-LicksImg.png';
import BhagwaticatererImg from '../../assets/ProjectsImg/BhagwaticatererImg.png';
import JurisnexaImg from '../../assets/ProjectsImg/JurisnexaImg.png';
import ShabrigardensbistroImg from '../../assets/ProjectsImg/ShabrigardensbistroImg.png';

// Project Data
const projects = [
  {
    title: 'Portfolio Website',
    description:
      'A responsive and modern portfolio built using React, Tailwind, and Framer Motion to showcase projects, skills, contact info, resume, and enhance personal branding with smooth, engaging animations and clean design.',
    link: 'https://rawat-portfolio.vercel.app/',
    image: PortfolioImg,
    tech: ['React', 'Framer Motion', 'Tailwind'],
  },
  {
    title: 'Delish Licks – Gourmet Restaurant',
    description:
      'A modern and vibrant restaurant website offering delicious food, shakes, and an immersive gaming experience. Built with smooth animations, responsive design, and engaging UI for users to explore menu, play zone, and connect easily.',
    link: 'https://www.delish-licks.com/',
    image: DelishLicksImg,
    tech: ['React', 'Tailwind', 'Framer Motion', 'React Scroll'],
  },

  {
    title: 'Bhagwati Caterer',
    description:
      'A responsive catering website showcasing menus, customizable event packages, and easy booking, built with React, Redux, and Tailwind for smooth user experience, event planning convenience, and reliable service management.',
    link: 'https://bhagwaticatererltd.vercel.app/',
    image: BhagwaticatererImg,
    tech: ['JavaScript', 'React', 'Tailwind CSS', 'Animation'],
  },
  {
    title: 'Shabrigardensbistroltd',
    description:
      'A user-friendly platform showcasing immigration services, client consultations, and document management with secure payment integration.',
    link: 'https://shabrigardensbistroltd.vercel.app/',
    image: ShabrigardensbistroImg,
    tech: ['Framer Motion', 'React', 'Tailwind CSS', ],
  },
  {
    title: 'Jurisnexa Immigration Services',
    description:
      'A user-friendly platform showcasing immigration services, client consultations, and document management with secure payment integration.',
    link: 'https://jurisnexaimmigrationservices.vercel.app/',
    image: JurisnexaImg,
    tech: ['JavaScript', 'React', 'Tailwind CSS', 'Animation'],
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
    className='group rounded-2xl bg-white dark:bg-gray-900 overflow-hidden shadow-md hover:shadow-2xl transform transition duration-300 hover:scale-[1.02]'
    custom={index}
    initial='hidden'
    whileInView='visible'
    viewport={{ once: true }}
    variants={cardVariants}
  >
    <div className='overflow-hidden'>
      <img
        src={image}
        alt={`${title} Thumbnail`}
        className='w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105'
      />
    </div>

    <div className='p-6'>
      <h3 className='text-xl font-semibold text-gray-800 dark:text-white mb-2'>
        {title}
      </h3>
      <p className='text-sm text-gray-600 dark:text-gray-300 mb-4'>
        {description}
      </p>

      <div className='flex flex-wrap gap-2 mb-4'>
        {tech.map((techItem, i) => (
          <span
            key={i}
            className='text-xs bg-indigo-100 dark:bg-indigo-800 text-indigo-700 dark:text-indigo-200 px-2 py-1 rounded-full'
          >
            {techItem}
          </span>
        ))}
      </div>

      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='inline-flex items-center gap-2 bg-indigo-600 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors'
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
      id='projects'
      className='relative py-20 px-6 bg-gradient-to-br from-black via-gray-900 to-black border-t-4 border-indigo-600'
    >
      {/* Decorative Overlay */}
      <div className='absolute inset-0 bg-gradient-to-tr from-indigo-900/10 via-pink-900/5 to-black/10 pointer-events-none' />

      <div className='relative max-w-6xl mx-auto z-10'>
        <motion.h2
          className='text-4xl sm:text-5xl font-extrabold text-center mb-16 text-white'
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          My Projects
        </motion.h2>

        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'>
          {projects.map((project, index) => (
            <ProjectCard key={index} index={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
