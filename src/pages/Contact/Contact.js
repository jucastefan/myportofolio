import React, { useState } from "react";
import { Button, Container, Form, Row, Col } from "react-bootstrap";
import emailjs from "emailjs-com";
import useInput from "../../hooks/use-input";
import LoadingSpinner from "../../components/js/LoadingSpinner";
import "./Contact.css";

const Contact = () => {
  // States
  const [succes, setSucces] = useState(false);
  const [error, setError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [completeError, setCompleteError] = useState(false);

  //Context API updates
  const {
    value: enteredName,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangedHandler,
    inputBlurHandler: nameBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const {
    value: enteredEmail,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangedHandler,
    inputBlurHandler: emailBlurHandler,
  } = useInput((value) => value.includes("@"));

  const {
    value: enteredMessage,
    hasError: messageInputHasError,
    valueChangeHandler: messageChangedHandler,
    inputBlurHandler: messageBlurHandler,
  } = useInput((value) => value.trim() !== "");

  const inputClasses = (classes) => {
    const insertClasses = classes
      ? "form-control shadow-sm animate__animated animate__rubberBand"
      : "form-control shadow-sm ";

    return insertClasses;
  };

  const succesMessage = (
    <div className="text-white text-center fs-4 jello-horizontal ">
      ✔️Message has been sent
    </div>
  );
  const errorMessage = (
    <div className="text-white fs-4 text-center jello-horizontal ">
      🚨Message hasn't been sent
    </div>
  );
  const completeAreasMessage = (
    <div className="text-white fs-4 text-center jello-horizontal ">
      🚨Please complete the form
    </div>
  );

  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (
      enteredName.trim() === "" ||
      enteredEmail.trim() === "" ||
      enteredMessage.trim() === ""
    ) {
      setCompleteError(true);
      setIsLoading(false);
      setTimeout(() => {
        setCompleteError(false);
      }, 2000);

      return;
    }

    emailjs
      .sendForm(
        "service_2rnlmqb",
        "template_80mrnad",
        e.target,
        "user_qDT3fzI07LzVlQlpuQbb5"
      )
      .then(
        (result) => {
          if (result.status === 200) {
            setSucces(true);
            setIsLoading(false);
          }
        },
        (error) => {
          if (error) {
            setError(true);
            setIsLoading(false);
          }
          console.log(error);
        }
      );
    e.target.reset();

    setTimeout(() => {
      setError(false);
      setSucces(false);
    }, 3000);
  };

  return (
    <Container className="fade-in">
      <Row className="d-flex justify-content-center align-items-center">
        <div className="h1 text-center text-white display-1">Get in touch</div>
        {isLoading && <LoadingSpinner></LoadingSpinner>}
        {error && errorMessage}
        {succes && succesMessage}
        {completeError && completeAreasMessage}
        <Col md={6} sm={12}>
          <Form
            onSubmit={sendEmail}
            className="container fade-in text-center text-white  pb-4 position-relative form"
          >
            <Form.Group className="mb-3 fs-4">
              <Form.Label
                htmlFor="exampleFormControlInput1"
                class="form-label fw-light"
              >
                <i class="bi bi-person text-white"></i> Name
              </Form.Label>
              <input
                type="text"
                name="from_name"
                onChange={nameChangedHandler}
                value={enteredName}
                onBlur={nameBlurHandler}
                className={inputClasses(nameInputHasError)}
                id="exampleFormControlInput1"
                placeholder="Type your name here"
              ></input>
              {nameInputHasError && (
                <p className="text-white mt-2 fs-5 ">🚨Please insert a name</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3 fs-4">
              <Form.Label
                htmlFor="exampleFormControlInput1"
                class="form-label fw-light"
              >
                <i class="bi bi-envelope text-white"></i> Your Email Adress
              </Form.Label>
              <input
                type="email"
                name="email"
                onChange={emailChangedHandler}
                onBlur={emailBlurHandler}
                className={inputClasses(emailInputHasError)}
                value={enteredEmail}
                id="exampleFormControlInput1"
                placeholder="name@example.com"
              ></input>
              {emailInputHasError && (
                <p className="text-white mt-2 fs-5">🚨Please insert an email</p>
              )}
            </Form.Group>
            <Form.Group className="mb-3 fs-4">
              <Form.Label
                htmlFor="exampleFormControlTextarea1"
                class="form-label fw-light"
              >
                <i class="bi bi-chat-dots text-white"> </i>Message
              </Form.Label>
              <textarea
                class="form-control shadow-sm"
                id="exampleFormControlTextarea1"
                rows="3"
                onChange={messageChangedHandler}
                onBlur={messageBlurHandler}
                className={inputClasses(messageInputHasError)}
                value={enteredMessage}
                name="message"
                placeholder="Leave a message here"
              ></textarea>
              {messageInputHasError && (
                <p className="text-white mt-2 fs-5">
                  🚨Please insert a message
                </p>
              )}
            </Form.Group>
            <Button
              type="submit"
              variant="transparent"
              className="btn fs-4 text-white shadow-sm text-decoration-none bg-transparent p-2 hvr-underline-from-center hvr-grow"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              <i class="bi bi-send text-white"></i> Send message!
            </Button>
          </Form>
        </Col>
        <Col
          md={6}
          sm={12}
          className="d-flex flex-column justify-content-center pb-4"
        >
          <div className="d-block h1 text-white">
            <p>
              <i class="bi bi-geo-alt-fill"></i> Bucharest,Romania
            </p>
          </div>
          <div className="d-block h2 text-white">
            <p>
              <i class="bi bi-mailbox"></i> juca_stefan_florin@yahoo.com
            </p>
          </div>
        </Col>
      </Row>
      <Container className="p-3"></Container>
    </Container>
  );
};

export default Contact;
