import React, { Fragment, useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import hamburger from "../images/hamburger-icon.svg";
import closeIconHamburger from "../images/hamburger-close.svg";
import "../css/Header.css";
import SocialMediaIcons from "./SocialMediaIcons";
import SocialMediaIconsHamburger from "./SocialMediaIconsHamburger";
import ThemeMode from "./ThemeMode";

const Header = (props) => {
  //States
  const [navbarBgEntered, setNavbarBgEntered] = useState(false);
  const [navbarBgExit, setNavbarBgExit] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [icons, setIcons] = useState(null);
  const [hamburgerIcon, setHamburgerIcon] = useState(true);
  const iconsLocalStorage = localStorage.getItem("icons");

  //Navbar event down scroll condition
  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setNavbarBgEntered(true);
      setNavbarBgExit(false);
      return;
    }
    if (window.scrollY <= 80) {
      setNavbarBgEntered(false);
      setNavbarBgExit(true);
      return;
    }
  };

  window.addEventListener("scroll", changeBackground);

  //Header handlers
  const clickHamburgerOpen = () => {
    setHamburgerIcon(false);
  };

  const clickHamburgerClose = () => {
    setHamburgerIcon(true);
  };

  const clickIconsTrueHandler = () => {
    setIcons(true);
    localStorage.setItem("icons", "true");
  };

  const clickIconsFalseHandler = () => {
    setIcons(false);
    localStorage.setItem("icons", "false");
  };

  //Local storage options
  if (icons === null) localStorage.setItem("iconsReset", "null");

  if (window.location.href === "https://jucastefan.com/") localStorage.clear();

  return (
    <Fragment>
      <Navbar
        className={
          !navbarBgEntered
            ? `${navbarBgExit && "slide-in-bottom"}`
            : `active sticky-top border-bottom-3 border-dark rounded shadow ${
                navbarBgEntered && "slide-in-top"
              }`
        }
        expand="lg"
        variant="dark"
        expanded={expanded}
      >
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img
              src={
                props.theme === "light"
                  ? require("../images/logo-light.svg").default
                  : require("../images/logo-dark.svg").default
              }
              alt="logo"
              className="hvr-grow"
            ></img>
            {iconsLocalStorage === "true" && (
              <SocialMediaIcons icons={iconsLocalStorage} />
            )}
          </Navbar.Brand>
          <ThemeMode onChange={props.toggleTheme} theme={props.theme} />
          <a
            className="navbar-toggler border-0"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setExpanded(expanded ? false : "expanded")}
          >
            {hamburgerIcon && (
              <img
                className="hamburger-menu py-1"
                src={hamburger}
                alt="hamburger"
                onClick={clickHamburgerOpen}
              ></img>
            )}
            {!hamburgerIcon && (
              <img
                className="img-fluid hamburger-menu py-1 rotate-in-center"
                src={closeIconHamburger}
                alt="hamburger"
                onClick={clickHamburgerClose}
              ></img>
            )}
          </a>
          <Navbar.Collapse id="navbarNav">
            <Nav
              className="ms-auto fw-lighter text-center "
              onClick={() => {
                setExpanded(false);
                setHamburgerIcon(true);
              }}
            >
              <NavLink
                className="nav-link me-lg-3"
                to={"/"}
                onClick={clickIconsFalseHandler}
              >
                Home
              </NavLink>
              <NavLink
                className="nav-link me-lg-4"
                to={"/about"}
                onClick={clickIconsTrueHandler}
              >
                About
              </NavLink>

              <NavLink
                className="nav-link me-lg-4"
                to={"/work"}
                onClick={clickIconsTrueHandler}
              >
                Work
              </NavLink>
              <NavLink
                className="nav-link me-lg-4"
                to={"/skills"}
                onClick={clickIconsTrueHandler}
              >
                Skills
              </NavLink>
              <NavLink
                className="nav-link me-lg-4"
                to={"/certifications"}
                onClick={clickIconsTrueHandler}
              >
                Certifications
              </NavLink>
              <NavLink
                className="nav-link me-lg-4"
                to={"/contact"}
                onClick={clickIconsTrueHandler}
              >
                Contact
              </NavLink>

              {iconsLocalStorage === "true" && (
                <SocialMediaIconsHamburger icons={iconsLocalStorage} />
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </Fragment>
  );
};

export default Header;
