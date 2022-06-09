import React from 'react';
import { Button } from 'react-bootstrap';
import header from '../resources/header.jpg'

const About = () => {
    return (
        <div className="container">
            <h1 className="text-center">About Me</h1>
            <div className="row">
                <div className="col-md-6">
                    <img className="img-fluid" src={header} alt="" />
                </div>
                <div className="col-md-6">
                    <h1>Let’s Something Know About Myself</h1>
                </div>
            </div>
        </div>
    );
};

export default About;