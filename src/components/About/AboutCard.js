import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Yashwant Yadav </span>
            from <span className="purple"> Bihar, India.</span>
            <br />
            I am currently pursuing  B.Tech(CSE) from Shivalik College Of Engineering which belong To Veer Madho Singh Bhandari Uttarakhand Technical University
            <br />
            I have completed My Intermidate and Primary Education from Bihar.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Reading Book
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Yashwant Yadav</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
