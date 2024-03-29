import { Container, Row, Col } from "react-bootstrap";
import React from "react";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

function Footer() {
  return (
    <Footer className="footer">
      <Container>
        <Row className="align-item-center">
          <Col sm={6}>
            <img src={logo} alt="LOGO" />
          </Col>
          <Col sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="/#">
                <img src={navIcon1} alt="nav1" />
              </a>
              <a href="/#">
                <img src={navIcon2} alt="nav3" />
              </a>
              <a href="/#">
                <img src={navIcon3} alt="nav2" />
              </a>
            </div>
            <p>CopyRight 2022. All Right Reserved </p>
          </Col>
        </Row>
      </Container>
    </Footer>
  );
}

export default Footer;
