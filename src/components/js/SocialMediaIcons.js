import React from "react";
import { Container } from "react-bootstrap";
import "../css/SocialMediaIcons.css";

const SocialMediaIcons = () => {
  return (
    <Container className="d-flex justify-content-center fade-in-bottom d-none d-lg-block d-md-none ">
      <a
        href="https://www.linkedin.com/in/juca-stefan-florin-2bb5a4170/"
        target="_blank"
        rel="noreferrer"
        className="hvr-grow"
      >
        <i className="bi bi-linkedin pe-3 fs-3"></i>
      </a>
      <a
        to="https://github.com/jucastefan"
        target="_blank"
        rel="noreferrer"
        className="hvr-grow"
      >
        <i className="bi bi-github pe-3 fs-3"></i>
      </a>
      <a
        href="https://twitter.com/stefan_juca"
        target="_blank"
        rel="noreferrer"
        className="hvr-grow"
      >
        <i className="bi bi-twitter pe-3 fs-3"></i>
      </a>
      <a
        rel="noreferrer"
        href="https://www.youtube.com/channel/UCHe7YmJT3XSsiE5NOrWsH3A"
        target="_blank"
        className="hvr-grow"
      >
        <i className="bi bi-youtube pe-3 fs-3"></i>
      </a>
    </Container>
  );
};

export default SocialMediaIcons;
