import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

const Skills = () => {
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/skills/public`);
        setSkills(res.data);
      } catch (err) {
        console.error('Error fetching skills:', err);
      }
    };

    fetchSkills();
  }, []);

  return (
    <section id="skills" className="py-10 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold mb-6 text-center">Skills</h2>
        {skills.length === 0 ? (
          <p className="text-center">No skills available.</p>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={skill._id} className="bg-gray-800 p-4 rounded shadow">
                <h3 className="text-xl font-semibold">{skill.name}</h3>
                {skill.level && (
                  <p className="text-sm text-gray-400">Level: {skill.level}</p>
                )}
                {skill.category && (
                  <p className="text-sm text-gray-400">Category: {skill.category}</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;
