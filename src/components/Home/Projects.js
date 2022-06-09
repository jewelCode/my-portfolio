import React from 'react';
import { Button, Card } from 'react-bootstrap';
import photo from '../resources/header.jpg'

const Projects = () => {
    return (
        <div className="container mt-5">
            <h2 className="text-center fw-bold display-4"><span className="text-danger">Latest Project</span> <br></br>That I Have Recently Done</h2>
            <div className="row mt-5 g-4">
                <div className="col-md-4 col-sm-12 d-flex justify-content-center text-center">
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={photo}/>
                        <Card.Body>
                            <Card.Title>Independent Service Provider</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="danger">Details Project</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 col-sm-12 d-flex justify-content-center text-center">
                    <Card style={{ width: '25rem' }}>
                        <Card.Img variant="top" src={photo} />
                        <Card.Body>
                            <Card.Title>Manufacturer Webiste</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="danger">Details Project</Button>
                        </Card.Body>
                    </Card>
                </div>
                <div className="col-md-4 col-sm-12 d-flex justify-content-center text-center">
                    <Card style={{ width: '25rem'}}>
                        <Card.Img variant="top" src={photo} />
                        <Card.Body>
                            <Card.Title>Warehouse Management</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="danger">Details Project</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Projects;