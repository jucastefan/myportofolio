import React from "react";
import { Row, Col } from "react-bootstrap";
import "../About/About.css";

const About = () => {
  return (
    <div className="box-about  text-white  fade-in mb-5 pb-1">
      <div className="container">
        <Row className="align-items-center">
          <Col md={6} className="mb-3">
            <img
              className="img-fluid shadow rounded about-img mb-4 border-3 border-dark"
              alt="me"
              src={"https://i.ibb.co/1XSmFVg/Me.png"}
            ></img>
          </Col>
          <Col md={6} className="shadow mb-4 rounded bg-transparent">
            <p className="h1 p-2">A few words...</p>
            <p className="fs-4 fw-light m-1">
              🔹I keep things clean and simple🔹<br></br>I discovered my passion
              for programming in the second year of my first college by learning
              JavaScript and starting to code.
              <br></br> I ❤️ this journey because is always something new to
              know. My main goal is to be as good as possible in the field of
              web development.
            </p>
          </Col>
          <Col md={12} className="shadow rounded bg-transparent mt-5">
            <Row className="row pb-2">
              <Col md={12}>
                <p className="h1 m-1 p-2">Studies:</p>
              </Col>
              <Col lg={4} md={6} sm={12} className="pb-2">
                <p className="h3 m-1">Highschool Degree</p>
                <p className="fs-4 m-1 fw-light">
                  National College <br></br>"Matei Basarab"
                </p>
                <p className="fs-4 m-1 fw-light">
                  Social Science <br></br>Humanities Secondary-School
                </p>
                <p className="fs-4 m-1 fw-light">2012-2016</p>
                <img
                  className="img-fluid p-3 study-img"
                  alt="basarab"
                  src={"https://i.ibb.co/2n521X2/basarab.png"}
                ></img>
              </Col>
              <Col lg={4} md={6} sm={12} className="pb-2">
                <p className="h3 m-1">Bachelor Degree</p>
                <p className="fs-4 m-1 fw-light">
                  Romanian Police Academy <br></br>"A.I. Cuza"
                </p>
                <p className="fs-4 m-1 fw-light">
                  Faculty of Police <br></br> Public Order and Security
                </p>
                <p className="fs-4 m-1 fw-light">2019-2022</p>
                <img
                  className="img-fluid p-3 study-img"
                  alt="academy"
                  src={"https://i.ibb.co/ckN7qG6/academia.png"}
                ></img>
              </Col>
              <Col lg={4} md={12} sm={12} className="pb-2">
                <p className="h3 m-1">Course Degree</p>
                <p className="fs-4 m-1 fw-light">Step IT Academy</p>
                <p className="fs-4 m-1 fw-light">Software Development</p>
                <p className="fs-4 m-1 fw-light">Frontend Developer</p>
                <p className="fs-4 m-1 fw-light">2022-2023</p>
                <img
                  className="img-fluid mt-4 p-3 study-img-stepit "
                  alt="cybernetics"
                  src={
                    "https://i.ibb.co/NS3Wh67/288858280-3297274937264617-2978092376668529887-n.jpg"
                  }
                ></img>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default React.memo(About);
