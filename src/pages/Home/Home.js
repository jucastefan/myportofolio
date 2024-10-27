import React, { Fragment } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../Home/Home.css";
import Resume from "../../components/files/Resume.pdf";

const Home = (props) => {
  return (
    <Fragment>
      <Container className="d-none d-lg-block py-auto text-center overflow-hidden fade-in">
        <Row className="align-items-center">
          <Col lg={5}>
            {props.theme === "light" ? (
              <img
                className="background-home-image img-responsive text-center"
                alt="img1"
                src={"https://i.ibb.co/1qymr9n/home.png"}
              ></img>
            ) : (
              <img
                className="background-home-image img-responsive text-center"
                alt="img1"
                src={"https://i.ibb.co/b2Hbfjf/home-Copy.png"}
              ></img>
            )}
          </Col>
          <Col md={1}></Col>
          <Col lg={6}>
            <div className="text-center display-1 text-white">
              <h1 className="display-1">
                Hi! I'm<br></br>Ștefan
              </h1>
              <a
                type="button"
                className="btn text-white ms-2 shadow-sm p-2 fs-3 hvr-underline-from-center hvr-grow"
                href={Resume}
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-book text-white"></i> My Resume
              </a>
              <br></br>
              <span className="h2 fw-light text-white">
                An enthusiast and young developer
              </span>
            </div>
          </Col>
        </Row>
      </Container>
      <Container className="d-lg-none py-auto text-center overflow-hidden fade-in">
        <Row className="align-items-center">
          <Col lg={6}>
            <div className="text-center display-1 text-white">
              <h1 className="display-1">
                Hi! I'm<br></br>Ștefan<br></br>
              </h1>
              <a
                type="button"
                className="btn text-white ms-2 shadow-sm p-2 fs-3 hvr-underline-from-center hvr-grow"
                href={Resume}
                target="_blank"
                rel="noreferrer"
              >
                <i class="bi bi-book text-white"></i> My Resume
              </a>
              <br></br>
              <span className="h2 fw-light text-white">
                An enthusiast and young developer
              </span>
            </div>
          </Col>
          <Col lg={5}>
            {props.theme === "light" ? (
              <img
                className="background-home-image img-responsive text-center"
                alt="img1"
                src={"https://i.ibb.co/1qymr9n/home.png"}
              ></img>
            ) : (
              <img
                className="background-home-image img-responsive text-center"
                alt="img1"
                src={"https://i.ibb.co/b2Hbfjf/home-Copy.png"}
              ></img>
            )}
          </Col>
          <Col md={1}></Col>
        </Row>
      </Container>
      <Container className="text-center w-auto fade-in">
        <p className="fs-2 text-white">Find me on:</p>
      </Container>
      <Container className="py-2 display-1 mb-5 fade-in">
        <Row className="d-flex justify-content-center align-items-center">
          <Col md={2} xs>
            <a
              href="https://www.linkedin.com/in/juca-stefan-florin-2bb5a4170/"
              target="_blank"
              rel="noreferrer"
              className="hvr-float-shadow"
            >
              <i className="bi bi-linkedin"></i>
            </a>
          </Col>
          <Col md={2} xs>
            <a
              href="https://github.com/jucastefan"
              target="_blank"
              rel="noreferrer"
              className="hvr-float-shadow"
            >
              <i className="bi bi-github"></i>
            </a>
          </Col>
          <Col md={2} xs>
            <a
              href="https://twitter.com/stefan_juca"
              target="_blank"
              rel="noreferrer"
              className="hvr-float-shadow"
            >
              <i className="bi bi-twitter"></i>
            </a>
          </Col>
          <Col md={2} xs>
            <a
              rel="noreferrer"
              href="https://www.youtube.com/channel/UCHe7YmJT3XSsiE5NOrWsH3A"
              target="_blank"
              className="hvr-float-shadow"
            >
              <i className="bi bi-youtube"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </Fragment>
  );
};

export default Home;
