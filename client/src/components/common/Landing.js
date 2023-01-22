import React from "react";
import { Button } from "react-bootstrap";
import { Link } from 'react-router-dom';
import './Landing.css';

const Landing = () => {
  return (
    <div className="landing">
      <h1 className="text-center">MediCheck</h1>
      <div className="btn-container">
        <Link to="/login">
          <Button variant="primary" className="mr-3">
            Login
          </Button>
        </Link>
        <Link to="/register">
          <Button variant="secondary" className="ml-3">
            Register
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
