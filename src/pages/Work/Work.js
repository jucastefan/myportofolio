import React from "react";
import { Container, Row } from "react-bootstrap";
import ProjectCard from "../../components/js/ProjectCard";
import LoadingSpinner from "../../components/js/LoadingSpinner";
import "./Work.css";

const Work = (props) => {
  const fetchedProjects = props.projects;
  const isLoading = props.loading;

  const projectsListWeb = fetchedProjects.map((project) => {
    if (project.type === "site") {
      return (
        <ProjectCard
          key={project.id}
          title={project.title}
          image={project.img}
          github={project.github}
          web={project.web}
          description={project.description}
        />
      );
    }
  });

  const projectsListApp = fetchedProjects.map((project) => {
    if (project.type === "app") {
      return (
        <ProjectCard
          key={project.id}
          title={project.title}
          image={project.img}
          github={project.github}
          web={project.web}
          description={project.description}
        />
      );
    }
  });

  const projectsListServer = fetchedProjects.map((project) => {
    if (project.type === "server") {
      return (
        <ProjectCard
          key={project.id}
          title={project.title}
          image={project.img}
          github={project.github}
          web={project.web}
          description={project.description}
        />
      );
    }
  });

  return (
    <Container className="box-mywork fade-in mb-3 h-100 d-flex justify-content-center align-items-center">
      {isLoading && (
        <div className="loading-spinner">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && (
        <Container>
          <p className="display-5 text-white pb-2">Web Projects</p>
          <Row>{projectsListWeb}</Row>
          <p className="display-5 text-white pb-2">Web App Projects</p>
          <Row>{projectsListApp}</Row>
          <p className="display-5 text-white pb-2">Web Server Projects</p>
          <Row className="pb-4">{projectsListServer}</Row>
        </Container>
      )}
    </Container>
  );
};

export default Work;
