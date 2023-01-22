import React, { useState } from "react";
import { Form, Button, Col, Row, FormGroup, Label, Input } from "react-bootstrap";
import './Register.css';

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dob, setDob] = useState("");
  const [isPatient, setIsPatient] = useState(true);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your own validation and api call here.
    console.log(`email: ${email}, password: ${password}, confirmPassword: ${confirmPassword}, dob: ${dob}, isPatient: ${isPatient}`);
  }

  return (
    <div className="register-page">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.target.value)}/>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)}/>
            </Form.Group>
          </Col>
          <Col xs={12} md={6}>
            <Form.Group controlId="formBasicPasswordConfirm">
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control type="password" placeholder="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}/>
            </Form.Group>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <FormGroup>
              <Label for="dob">Date of Birth</Label>
              <Input type="date" name="dob" id="dob" value={dob} onChange={e => setDob(e.target.value)}/>
            </FormGroup>
          </Col>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <Form.Group controlId="formBasicToggle">
              <Form.Check
                type="switch"
                id="custom-switch"
                label="Patient/Nurse"
                checked={isPatient}
                onChange={e => setIsPatient(e.target.checked)}
              />
            </Form.Group>
          </Col>
          </Row>
        <Row>
          <Col xs={12}>
            <Button variant="primary" type="submit" className="btn-block">
              Register
            </Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
}
export default Register;