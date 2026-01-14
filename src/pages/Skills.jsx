import React from 'react';
import laravel from '../assets/images/laravel.png';


const Skills = () => {
  const skills = [
    { name: 'Python', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'Node.js', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'React', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Tailwind CSS', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg' },
    { name: 'Sass', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg' },
    { name: 'Django', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg' },
    { name: 'PHP', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg' },
    { name: 'Laravel', imageUrl: laravel },
  ];

  return (
      <section className="py-24" id="skills">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 dark:text-white">My Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <div key={skill.name} className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110">
                <img src={skill.imageUrl} alt={skill.name} className="h-24 w-24 transition-transform duration-300 group-hover:scale-125" />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Skills;
