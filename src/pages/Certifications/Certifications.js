import React from "react";
import { Container, Row } from "react-bootstrap";
import CertificationCard from "../../components/js/CertificationCard";
import LoadingSpinner from "../../components/js/LoadingSpinner";
import "./Certifications.css";

const Certifications = (props) => {
  // Variable API
  const isLoading = props.loading;
  const fetchedCertifications = props.certifications;

  const certificationsList = fetchedCertifications.map((certification) => {
    return (
      <CertificationCard
        key={certification.id}
        title={certification.title}
        image={certification.img}
        teacher={certification.teacher}
        course={certification.course}
      />
    );
  });

  return (
    <div className="box-certifications text-white fade-in pb-3 mb-4">
      {isLoading && (
        <div className="loading-spinner">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && (
        <Container>
          <Row>{certificationsList}</Row>
        </Container>
      )}
    </div>
  );
};

export default Certifications;
