import React, { useEffect, useState } from 'react';
import axios from 'axios';

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

const About = () => {
    const [about, setAbout] = useState(null);

    useEffect(() => {
        const fetchAbout = async () => {
            const res = await axios.get(`${BASE_URL}/api/about`);
            setAbout(res.data);
        };
        fetchAbout();
    }, []);

    if (!about) return <div className="text-center py-10">Sorry User Dont Want Anyone To Know About Him...😞</div>;

    return (
        <div className="max-w-3xl mx-auto py-10 px-4 text-white">
            <h2 className="text-2xl font-bold mb-4">About Me</h2>
            <p className="mb-2"><strong>Name:</strong> {about.name}</p>
            <p className="mb-2"><strong>Age:</strong> {about.age}</p>
            <p className="mb-2"><strong>Address:</strong> {about.address}</p>
            <div className="mb-2">
                <strong>Education:</strong>
                <ul className="list-disc list-inside ml-4">
                    {about.education.map((edu, idx) => (
                        <li key={edu._id || idx}>
                            Institute: {edu.degree} Degree: {edu.institution} ({edu.startYear} - {edu.endYear})
                        </li>
                    ))}
                </ul>
            </div>
            <div className="mb-2">
                <strong>Experience:</strong>
                <ul className="list-disc list-inside ml-4">
                    {about.experience.map((exp, idx) => (
                        <li key={exp._id || idx}>
                            Company: {exp.company} Position: {exp.position} ({exp.startYear} - {exp.endYear})
                        </li>
                    ))}
                </ul>
            </div>
            <p className="mb-2"><strong>Languages:</strong> {about.languages}</p>
            <p className="mb-2"><strong>Hobbies:</strong> {about.hobbies}</p>
            <p className="mb-2"><strong>Summary:</strong> {about.summary}</p>
        </div>
    );
};

export default About;

