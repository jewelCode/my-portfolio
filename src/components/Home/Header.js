import React from 'react';
import { Button } from 'react-bootstrap';
import header from '../resources/header.jpg'

const Header = () => {
    return (
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <h1>Hello</h1>
                    <h1>I'm Jewel Barua</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae minima fugit facere praesentium vel quaerat fugiat voluptates beatae unde rem.</p>
                    <Button variant="warning" href="https://drive.google.com/file/d/1s4cQ_XILpeOUdoXczgpTQPK3TGp7zeEr/view?usp=sharing" target="_blank">Download My Resume</Button>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={header} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;