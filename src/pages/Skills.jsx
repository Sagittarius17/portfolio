import React from 'react';
import python from '../assets/images/python.png';
import nodejs from '../assets/images/nodejs.png';
import reactjs from '../assets/images/reactjs.png';
import tailwindcss from '../assets/images/tailwindcss.png';
import sass from '../assets/images/sass.png';
import django from '../assets/images/django.png';
import php from '../assets/images/php.png';
import laravel from '../assets/images/laravel.png';

const Skills = () => {
  const skills = [
    { name: 'Python', image: python },
    { name: 'Node.js', image: nodejs },
    { name: 'React', image: reactjs },
    { name: 'Tailwind CSS', image: tailwindcss },
    { name: 'Sass', image: sass },
    { name: 'Django', image: django },
    { name: 'PHP', image: php },
    { name: 'Laravel', image: laravel },
  ];

  return (
    <section className="py-24" id="skills">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12">My Skills</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {skills.map((skill) => (
            <div key={skill.name} className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center">
              <img src={skill.image} alt={skill.name} className="h-20 w-20 mb-4" />
              <h3 className="text-xl font-bold">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
