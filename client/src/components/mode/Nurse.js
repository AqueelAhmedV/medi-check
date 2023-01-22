import React, { useState } from "react";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import './Nurse.css';

const Nurse = () => {
  const [nurse, setNurse] = useState({
    name: "Jane Smith",
    id: "12345",
    patients: [
      {
        name: "John Doe",
        id: "54321",
        age: 30,
        condition: "Flu"
      },
      {
        name: "Jane Williams",
        id: "67890",
        age: 40,
        condition: "High blood pressure"
      }
    ]
  });

  return (
    <div className="nurse-page">
      <Container>
        <Row>
          <Col xs={12}>
            <h2>Nurse: {nurse.name}</h2>
            <h3>ID: {nurse.id}</h3>
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <h4>Patients:</h4>
            <ListGroup>
              {nurse.patients.map((patient, index) => (
                <ListGroupItem key={index}>
Name: {patient.name} <br />
ID: {patient.id} <br />
Age: {patient.age} <br />
Condition: {patient.condition}
</ListGroupItem>
))}
</ListGroup>
</Col>
</Row>
</Container>
</div>
);
};

export default Nurse;

