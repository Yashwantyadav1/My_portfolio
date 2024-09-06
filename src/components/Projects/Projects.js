import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import music from "../../Assets/Projects/music .jpeg";
import shoping from "../../Assets/Projects/shoping.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={music}
              isBlog={false}
              title="Music"
              description=" Web App offers a seamless music streaming experience using HTML, CSS, and JavaScript for the front-end, and MongoDB for the back-end.
              Users can stream music, create and manage playlists, authenticate securely, and receivepersonalized music recommendations, providing an engaging, responsive, and interactiveweb-based music platform.."
              ghLink="https://github.com/Yashwantyadav1/Music"
              demoLink="Avaliable Soon"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoping}
              isBlog={false}
              title="Shoping "
              description=" e-commerce website using HTML, CSS, and JavaScript. Deliver a seamless shopping experience, intuitive navigation, and interactive product displays. Implement secure checkout, and cart functionality."
              ghLink="https://github.com/Yashwantyadav1/webdevlopment/tree/main/Day2"
              demoLink=""
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
