import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ProjectOverview = () => {
    const { projectId } = useParams();

  const [project, setProject] = useState(projectId);
  useEffect(()=>{
        fetch('dinner.json')
        .then(res => res.json())
        .then(data => setProject(data))
  }, [])

    return (
        <div>
            <h1>Project Details: {projectId}</h1>
            
            
            
        </div>
    );
};

export default ProjectOverview;