import React from 'react';
import python from '../assets/images/python.png';
import nodejs from '../assets/images/nodejs.png';
import reactjs from '../assets/images/reactjs.png';
import tailwindcss from '../assets/images/tailwindcss.png';
import sass from '../assets/images/sass.png';
import django from '../assets/images/django.png';
import php from '../assets/images/php.png';
import laravel from '../assets/images/laravel.png';
import '../styles/skills.css';

const skills = [
    { name: 'Python', icon: python, link: 'https://www.python.org/' },
    { name: 'Django', icon: django, link: 'https://www.djangoproject.com/' },
    { name: 'NodeJs', icon: nodejs, link: 'https://nodejs.org/' },
    { name: 'ReactJs', icon: reactjs, link: 'https://reactjs.org/' },
    { name: 'TailwindCSS', icon: tailwindcss, link: 'https://tailwindcss.com/' },
    { name: 'Sass', icon: sass, link: 'https://sass-lang.com/' },
    { name: 'PHP', icon: php, link: 'https://www.php.net/' },
    { name: 'Laravel', icon: laravel, link: 'https://laravel.com/' },
];

const Skills = () => {
    return (
        <div id="skills" className="section">
            <div className="container mx-auto px-4">
                <h2 className="section-title">My Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {skills.map((skill, index) => (
                        <a href={skill.link} key={index} target="_blank" rel="noopener noreferrer">
                            <div className="card skill-card">
                                <div className="p-6 flex flex-col items-center justify-center">
                                    <img src={skill.icon} alt={skill.name} className="h-20 w-20 object-contain mb-4" />
                                    <h3 className="text-xl font-semibold">{skill.name}</h3>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
