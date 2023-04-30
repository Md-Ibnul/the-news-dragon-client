import React from "react";
import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from "./QZone";
import './Overlay.css';

const RightNav = () => {
  return (
    <div>
      <h4>Login with</h4>
      <div>
        <Button className="mb-2" variant="outline-primary">
          <FaGoogle className="me-2" />
          Login with Goggle
        </Button>
        <Button variant="outline-secondary">
          <FaGithub className="me-2" />
          Login with github
        </Button>
      </div>
      <div className="mt-3">
        <h4>Find Us On</h4>
        <div>
          <ListGroup>
            <ListGroup.Item><FaFacebook /> Facebook</ListGroup.Item>
            <ListGroup.Item><FaTwitter /> Twitter</ListGroup.Item>
            <ListGroup.Item><FaInstagram /> Instagram</ListGroup.Item>
          </ListGroup>
        </div>
      </div>
      <QZone />
      <div className="overlayImage text-white">
        <h3>Create an Amazing Newspaper</h3>
        <p>Discover thousands of options, easy to customize layouts, one-click to import demo and much more.</p>
        <Button variant="danger">Learn More</Button>
      </div>
    </div>
  );
};

export default RightNav;
