import React, { useContext } from "react";
import logo from "../../../assets/logo.png";
import moment from "moment";
import Button from "react-bootstrap/Button";
import { Container, Nav, Navbar } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { AuthContext } from "./AuthProvider";

const Header = () => {
  const {user} = useContext(AuthContext);
  return (
    <Container>
      <div className="text-center mt-4">
        <img src={logo} alt="Logo Image" />
        <p className="text-secondary mt-2">
          <small>Journalism Without Fear or Favour</small>
        </p>
        <p>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</p>
      </div>
      <div className="d-flex mt-3">
        <Button variant="danger">Latest</Button>
        <Marquee className="text-danger" gradient='true'>
        Match Highlights: Germany vs Spain — as it happened   !   Match Highlights: Germany vs Spain as...
        </Marquee>
      </div>
    </Container>
  );
};

export default Header;
