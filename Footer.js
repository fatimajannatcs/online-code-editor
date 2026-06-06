import React from "react";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <div>
      <Container fluid className="footer">
        Copyright © {year} | Made by Fatima, Fiza and Aqsa
      </Container>
    </div>
  );
}

export default Footer;
