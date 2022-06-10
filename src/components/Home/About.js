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
                    <div className="col-md-6 mt-5">
                        <p className="fs-4 text-justify">My Name is Jewel Barua. I am a front End Developer. From my childhood I was Technology Lover. I am always try to learn new innovative things. I am also learned web development from Programming Hero.

                        I want to develop my career as a full stack web developer. Also learning modern web technology. I also cope up with HTML, CSS, bootstrap, Javascript, Debugging, React. I am able to adapt new and modern web technologies.</p>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default About;