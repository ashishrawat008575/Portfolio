import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const skills = [
  { name: 'HTML5', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
  { name: 'CSS3', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'TailwindCSS', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg' },
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Git', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
  { name: 'GitHub', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' },
  { name: 'Bootstrap', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg' },
  { name: 'Material UI', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/materialui/materialui-original.svg' },
  { name: 'NPM', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg' },
];

const MySkills = () => {
  useEffect(() => {
    AOS.init({ duration: 1200 });
  }, []);

  return (
    <section className="bg-[#0e1124] py-20 px-5 sm:px-8 text-white">
      {/* Heading */}
      <div className="text-center mb-14">
        <h2
          className="text-4xl sm:text-5xl font-extrabold bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-transparent bg-clip-text leading-tight"
          data-aos="fade-down"
        >
          My Skills
        </h2>
        <div
          className="w-20 h-1 bg-gradient-to-r from-pink-500 to-blue-400 mx-auto mt-4 rounded-full"
          data-aos="fade-right"
        />
        <p
          className="text-gray-400 mt-4 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed"
          data-aos="fade-up"
        >
          These are the tools and technologies I work with.
        </p>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 max-w-6xl mx-auto px-2 sm:px-0">
        {skills.map((skill, index) => (
          <div
            key={skill.name}
            data-aos="zoom-in-up"
            data-aos-delay={index * 100}
            className="bg-white/5 border border-white/10 p-5 rounded-xl flex flex-col items-center justify-center hover:scale-105 transition-transform duration-300 group"
          >
            <img
              src={skill.src}
              alt={skill.name}
              className="w-16 h-16 md:w-20 md:h-20 object-contain mb-3"
            />
            <p className="text-sm font-medium text-gray-300 group-hover:text-white transition text-center">
              {skill.name}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MySkills;
