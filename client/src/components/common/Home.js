import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Row, Col } from "react-bootstrap";
import Nurse from "../mode/Nurse";
import Patient from "../mode/Patient";
import { useNavigate } from "react-router-dom";
import './Home.css';

const Home = () => {
  const [isPatient, setIsPatient] = useState(false);
  let history = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if(token) {
      axios.get('YOUR_API_URL', {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      .then(response => {
        setIsPatient(response.data.isPatient);
      })
      .catch(error => {
        console.log(error);
        localStorage.removeItem('token');
        history.push("/");
      });
    } else {
      history.push("/");
    }
  }, [history]);

  return (
    <div className="home-page">
      <Container>
        <Row>
          <Col xs={12}>
            {isPatient ? <Patient /> : <Nurse />}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
