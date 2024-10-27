import React from "react";
import { Col } from "react-bootstrap";
import "../css/ProjectCard.css";

const ProjectCard = (props) => {
  return (
    <Col md={6} sm={12} className="mb-3 text-white puff-in-center">
      <div className="card text-center shadow border-0 rounded bg-transparent h-100">
        <div className="card-body">
          <h4 className="card-title fs-3 pb-2">
            <i className="bi bi-file-earmark-code text-white"></i> {props.title}
          </h4>
          <div>
            <a
              href={props.web}
              target="_blank"
              rel="noreferrer"
              className="text-white shadow-sm text-decoration-none bg-transparent p-2 hvr-underline-from-center hvr-grow"
            >
              <i className="bi bi-box-arrow-in-right text-white"></i> View
              Project
            </a>
            <a
              href={props.github}
              target="_blank"
              rel="noreferrer"
              className="text-white shadow-sm ms-4 text-decoration-none bg-transparent p-2 hvr-underline-from-center hvr-grow"
            >
              <i className="bi bi-github text-white"></i> View GitHub
            </a>
          </div>
          <img
            className="img-fluid mt-4 shadow-lg work-img shadow-sm"
            alt={`${props.title}`}
            src={`${props.image}`}
          ></img>
          <p className="card-text fw-light fs-5 py-4">{props.description}</p>
        </div>
      </div>
    </Col>
  );
};

export default ProjectCard;
