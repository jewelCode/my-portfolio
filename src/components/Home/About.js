import React from 'react';
import header from '../resources/header.jpg'
import about from '../resources/about.png'

const About = () => {
    return (
        <div className="bg-light p-3">
        <div className="container mt-5">
            <h2 className="text-center fw-bold display-4"><span className="text-danger">About</span> Me</h2>
            <div className="row d-flex align-items-center">
                <div className="col-md-6 d-flex justify-content-center text-center">
                    <div className="border rounded-circle bg-danger">
                        <img className="img-fluid" src={about} alt="" />
                    </div>
                </div>
                <div className="col-md-6 mt-5 d-flex justify-content-center">
                    <p className="fs-4">My Name is Jewel Barua. I am a front End Developer. I can make any Kind of web application you need</p>
                </div>
            </div>
        </div>
        

        </div>
    );
};

export default About;