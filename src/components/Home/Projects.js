import React, { useEffect, useState } from 'react';
import { Button, Card } from 'react-bootstrap';

import ProjectDetails from './ProjectDetails';

const Projects = () => {
    const [projectsData, setProjectsData] = useState([])

    useEffect(()=>{
        fetch('dinner.json')
        .then(res => res.json())
        .then(data => setProjectsData(data))
    }, [])
    return (
        <div className="container mt-5">
            <h2 className="text-center fw-bold display-4"><span className="text-danger">Latest Project</span> <br></br>That I Have Recently Done</h2>
            <div className="row mt-5 g-4">
               {
                projectsData.map(project => <ProjectDetails project={project} key={project.id}></ProjectDetails>)
               }
            </div>
        </div>
    );
};

export default Projects;