import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const ProjectDetails = ({ project }) => {
    const { id, name, description, img } = project;
    const navigate = useNavigate();
    const handleProjectDetail = id =>{
        navigate(`/project/${id}`);
    }
    return (

        <div className="col-md-4 col-sm-12 d-flex justify-content-center text-center">
            <Card style={{ width: '25rem' }}>
                <Card.Img variant="top" src={img} />
                <Card.Body className="flex-column d-flex">
                    <Card.Title>Project Name: {name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Button className="mt-auto" variant="danger" onClick={()=> handleProjectDetail(id)} >Explore Details</Button>
                </Card.Body>
            </Card>
        </div>

    );
};

export default ProjectDetails;