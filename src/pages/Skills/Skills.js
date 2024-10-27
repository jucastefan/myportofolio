import React from "react";
import "./Skills.css";

const Skills = () => {
  return (
    <div className="box-mywork fade-in text-white pb-5 d-block">
      <div className="container text-center">
        <div className=" d-flex justify-content-center align-items-center row">
          <div className="col-sm-12 col-md-6 pb-4 box-skills">
            <div className="card text-center shadow border-0 rounded bg-transparent">
              <div className="card-body">
                <i className="bi text-dark bi-credit-card-2-front display-3 text-white"></i>
                <h5 className="card-title h3">Front-End</h5>
                <p className="card-text fw-light fs-5">
                  I like to code from the basis<br></br>
                  Languages:<br></br>JavaScript (including React), HTML5, CSS3,
                  Sass<br></br>
                  DevTools:<br></br>Github<br></br>Terminal<br></br>Bootstrap 5
                  <br></br>npm<br></br>Git
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 pb-4 box-skills">
            <div className="card text-center shadow border-0 rounded bg-transparent">
              <div className="card-body">
                <i className="bi text-dark bi-hdd-rack display-3 text-white"></i>
                <h5 className="card-title h3">Back-End</h5>
                <p className="card-text fw-light fs-5">
                  Along my journey, I built a server and a database by using
                  these technologies:<br></br>
                  NodeJS<br></br>
                  ExpressJS<br></br>
                  PgAdmin<br></br>
                  SQL<br></br>
                  PostgresSQL<br></br>
                </p>
                <div className="container container-height p-3"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
