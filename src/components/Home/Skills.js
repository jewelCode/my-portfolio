import React from 'react';
import { Button } from 'react-bootstrap';
import Progress from '../Shared/Progress/Progress';

const Skills = () => {
    return (
        <div className="container">
            <h1 className="text-center">Skills</h1>
            <div className="row">
                <div className="col-md-6">
                    <h1>Creative and Professional Experience</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt iusto quod magni fugit repellendus vitae voluptatum illo, ab non dolorum.</p>
                    <Button variant="warning">Get Any Project</Button>
                </div>
                <div className="col-md-6">
                    <Progress></Progress>
                </div>
            </div>
        </div>
    );
};

export default Skills;