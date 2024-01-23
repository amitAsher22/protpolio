import React from "react";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import ProjectCard from "./ProjectCard";
import ColorSharp from "../assets/img/color-sharp2.png";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";

function Projects() {
  const projects = [
    {
      title: "Business StartUp",
      description: "Design & Developent",
      imgUrl: projImg1,
    },
    {
      title: "Business StartUp",
      description: "Design & Developent",
      imgUrl: projImg2,
    },
    {
      title: "Business StartUp",
      description: "Design & Developent",
      imgUrl: projImg3,
    },
    {
      title: "Business StartUp",
      description: "Design & Developent",
      imgUrl: projImg1,
    },
    {
      title: "Business StartUp",
      description: "Design & Developent",
      imgUrl: projImg2,
    },
    {
      title: "Business StartUp",
      description: "Design & Developent",
      imgUrl: projImg3,
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <h2>projects</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5  justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Tab One</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Tab Two</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">Tab Three</Nav.Link>
                </Nav.Item>
              </Nav>
              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second">LOren Ipsum</Tab.Pane>
                <Tab.Pane eventKey="third">LOren Ipsum</Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={ColorSharp} alt="colors" />
    </section>
  );
}

export default Projects;
