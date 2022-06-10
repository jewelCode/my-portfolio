import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button, Form } from 'react-bootstrap';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';



const Footer = () => {
    const [state, handleSubmit] = useForm("mqknjqjv");
    if (state.succeeded) {
        return alert("Messege Sent Successfully")
    }
    return (
        <div className="bg-dark mt-5">
            <div className="container">
                <div className="row d-flex align-items-center">
                    <div className="col-md-4 col-sm-12 text-light">
                        <h3>Contact: </h3>
                        <p>Raozan, Chittaong, Bangladesh</p>
                        <p>E-mail: jewelbarua101@gmail.com</p>
                        <p>Mobile: 01920666327</p>
                    </div>
                    <div className="col-md-4 col-sm-12 text-light">
                        <h3>Social:</h3>
                        <p><FaFacebook /> Facebook</p>
                        <p><FaLinkedin/> LinkedIn</p>
                        <p><FaTwitter /> Twitter</p>
                    </div>
                    <div className="col-md-4 col-sm-12 text-center mt-3">
                        <Form onSubmit={handleSubmit}>
                            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                                <Form.Label className="text-light">Email Address</Form.Label>
                                <Form.Control name="email" id="email" type="email" placeholder="Enter Your Email" />
                            </Form.Group>
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                <Form.Label className="text-light">Messege</Form.Label>
                                <Form.Control placeholder="Enter Your Messege" id="message" name="message" as="textarea" rows={3} />
                            </Form.Group>
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                            <div className="text-center">
                                <Button variant="danger" type="submit" disabled={state.submitting}>
                                    Submit
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;