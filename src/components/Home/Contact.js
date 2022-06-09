import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Button, Form } from 'react-bootstrap';

const Contact = () => {
    const [state, handleSubmit] = useForm("mqknjqjv");
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <div className="bg-info row mt-5">
            <div className="container mt-5 w-25 text-center text-light p-5 col col-md-12">
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>Email Address</Form.Label>
                    <Form.Control name="email" id="email" type="email" placeholder="Enter Your Email" />
                </Form.Group>
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                    <Form.Label>Messege</Form.Label>
                    <Form.Control placeholder="Enter Your Messege" id="message" name="message" as="textarea" rows={3} />
                </Form.Group>
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
                <Button variant="danger" type="submit" disabled={state.submitting}>
                    Submit
                </Button>
            </Form>
            
        </div>
        </div>
    );
};

export default Contact;