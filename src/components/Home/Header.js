import React from 'react';
import { Button } from 'react-bootstrap';
import header from '../resources/header.jpg'

const Header = () => {
    return (
        <div className="container">
            <div className="row d-flex align-items-center">
                <div className="col-md-6">
                    <h1 className="display-1 fw-bold">Hello</h1>
                    <h1 className="display-1 fw-bold">I'm <span className="text-danger">Jewel Barua</span></h1>
                    <p className="display-6">Front End Developer</p>
                    <br />
                    <Button variant="danger" size="lg" href="https://drive.google.com/file/d/1s4cQ_XILpeOUdoXczgpTQPK3TGp7zeEr/view?usp=sharing" target="_blank">Download Resume</Button>
                </div>
                <div className="col-md-6">
                    <img className="img-fluid" src={header} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Header;