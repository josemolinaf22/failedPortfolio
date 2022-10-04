import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Jose D Molina </span>
            from <span className="purple"> Salt Lake City, Utah.</span>
            <br />
            Software engineering allows me to develop meaning in people's lives
            on a broad scale. Through intense practice and self-motivation, I
            have honed my craft.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Outdoor Enthusiast
            </li>
            <li className="about-activity">
              <ImPointRight /> Entertainment Enthusiast
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "That's not a bug, it's a feature!"{" "}
          </p>
          <footer className="blockquote-footer">Anonymous</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
