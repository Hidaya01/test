import React, { useState, useEffect } from 'react';
import axios from '../services/api';

function ProjectList() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        axios.get('/api/projects')
            .then((response) => {
                setProjects(response.data);
            })
            .catch((error) => {
                console.error('Error fetching projects:', error);
            });
    }, []);

    return (
        <div>
            <h2>Project List</h2>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>{project.name}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProjectList;
