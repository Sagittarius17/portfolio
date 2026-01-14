import React from 'react';
import laravel from '../assets/images/laravel.png'

const Skills = () => {
  const skills = [
    { name: 'Python', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', url: 'https://www.python.org/' },
    { name: 'Node.js', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', url: 'https://nodejs.org/' },
    { name: 'React', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', url: 'https://react.dev/' },
    { name: 'Tailwind CSS', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg', url: 'https://tailwindcss.com/' },
    { name: 'Sass', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg', url: 'https://sass-lang.com/' },
    { name: 'Django', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/django/django-plain.svg', url: 'https://www.djangoproject.com/' },
    { name: 'PHP', imageUrl: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg', url: 'https://www.php.net/' },
    { name: 'Laravel', imageUrl: laravel, url: 'https://laravel.com/' },
  ];

  return (
      <section className="py-24" id="skills">
        <div className="container mx-auto px-4">
          <h2 className="text-5xl font-bold text-center mb-12 dark:text-white">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {skills.map((skill) => (
              <a href={skill.url} key={skill.name} target="_blank" rel="noopener noreferrer">
                <div className="group bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 flex flex-col items-center justify-center transition-transform duration-300 transform hover:scale-110">
                  <img src={skill.imageUrl} alt={skill.name} className="h-24 w-24 transition-transform duration-300 group-hover:scale-125" />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>
    );
};

export default Skills;
