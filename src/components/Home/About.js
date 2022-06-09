import React from 'react';
import { Button } from 'react-bootstrap';
import header from '../resources/header.jpg'

const About = () => {
    return (
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <img className="img-fluid" src={header} alt="" />
                </div>
                <div className="col-md-6">
                    <h1>Let’s Something Know About Myself</h1>
                    <Button variant="warning">Download My Resume</Button>
                </div>
                
            </div>
        </div>
    );
};

export default About;