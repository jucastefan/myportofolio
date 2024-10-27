import React from "react";
import useFirebase from "../../hooks/use-firebase";
import { Spinner } from "react-bootstrap";
import "../css/LoadingSpinner.css";

const LoadingSpinner = () => {
  const { error } = useFirebase();
  return (
    <Spinner className="d-flex align-items-center justify-content-center scale-up-center">
      {!error && (
        <div className="spinner-border text-white" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
      {!error && (
        <div>
          <p className="text-white mt-3 ms-3">Please wait...</p>
        </div>
      )}
      {error && (
        <div>
          <p className="text-white mt-3 ms-3">Something went wrong...</p>
        </div>
      )}
    </Spinner>
  );
};

export default LoadingSpinner;
