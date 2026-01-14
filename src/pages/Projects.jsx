import React, { useState, useEffect } from 'react';
import ProjectCard from '../components/ProjectCard';
import Loader from '../components/Loader';

function Projects() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('https://api.github.com/users/Sagittarius17/repos')
            .then(res => res.json())
            .then(data => {
                const sortedData = data.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));
                setProjects(sortedData);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching projects:", error);
                setLoading(false);
            });
    }, []);

    return (
        <div id="projects" className="section">
            <div className="container mx-auto px-4">
                <h2 className="section-title">My Projects</h2>
                {loading ? (
                    <Loader />
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {projects.map(project => (
                            <ProjectCard key={project.id} project={project} />
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}

export default Projects;
