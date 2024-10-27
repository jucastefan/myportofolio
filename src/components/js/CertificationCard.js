import React from "react";
import { Col } from "react-bootstrap";
import "../css/CertificationCard.css";

const CertificationCard = (props) => {
  return (
    <Col lg={6} sm={12} className="mb-3 puff-in-center">
      <div className="card text-center shadow border-0 rounded bg-transparent h-100">
        <div className="card-body h-100">
          <img
            className="img-fluid certification-img"
            src={props.image}
            alt={props.image}
          ></img>
          <h5 class="card-title pt-3 fs-3">{props.title}</h5>
          <p class="card-text">Taught by: {props.teacher}</p>
          <a
            href={props.course}
            target="_blank"
            rel="noreferrer"
            className="text-white shadow-sm text-decoration-none bg-transparent p-2 hvr-underline-from-center hvr-grow"
          >
            View Course
          </a>
        </div>
      </div>
    </Col>
  );
};

export default CertificationCard;
