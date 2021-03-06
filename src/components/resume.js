import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";
import Education from "./education";
import Experience from "./experience";

class Resume extends Component {
  render() {
    return (
      <div className="page">
        <Grid className="resume-grid">
          <Cell col={4}>
            <div style={{ textAlign: "center" }}>
              <img
                src={require("../images/my_pic.jpg")}
                alt="avatar"
                style={{ height: "200px" }}
              />
            </div>

            <h2 style={{ paddingTop: "2em", color: "white" }}>Surya Prakash</h2>
            <h4 style={{ color: "white" }}>Web Developer</h4>
            <hr style={{ borderTop: "3px solid #58C7F4", width: "100%" }} />
            <p style={{ color: "white", textAlign: "center" }}>
              Web Developer who is passionate about Computer Science. Looking
              forward to working with a Company that will allow me to expand and
              utilize my education and skills, while being a major asset to the
              Company and also a good team player with great communication
              skills. Highly driven with a passion for learning new ways to
              solve complex problems.
            </p>
            <hr style={{ borderTop: "3px solid #58C7F4", width: "100%" }} />
            <h5 style={{ color: "white" }}>Address</h5>
            <p style={{ color: "white" }}>
              707 Martin Luther King Dr W
              <br />
              Cincinnati, OH - 45220
            </p>
            <h5 style={{ color: "white" }}>Phone</h5>
            <p style={{ color: "white" }}>(513) 641-8698</p>
            <h5 style={{ color: "white" }}>Email</h5>
            <p style={{ color: "white" }}>chittivh@mail.uc.edu</p>
            <h5 style={{ color: "white" }}>WebSite</h5>
            <a
              href="https://suryaprakash.netlify.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              Surya's Portfolio
            </a>
            <hr style={{ borderTop: "3px solid #58C7F4", width: "100%" }} />
            <h3 style={{ color: "white" }}>Education</h3>
            <Education
              startYear={2017}
              endYear={2019}
              schoolName="University of Cincinnati"
              schoolDescription="GPA - 3.75 / 4.0"
            />

            <Education
              startYear={2013}
              endYear={2017}
              schoolName="OsmaniaUniversity"
              schoolDescription="GPA - 3.6 / 4.0"
            />
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h3 style={{ color: "white" }}>Experience</h3>

            <Experience
              startMonth={10}
              startYear={2018}
              endMonth={5}
              endYear={2019}
              jobName="Software Developer Internship, TechnoVision Solutions (Michigan) "
              jobDescription="
              Developed user interface by using the React JS, Redux for SPA development.
              Used React-Router to turn application into Single Page Application.
              Worked using React JS components, Forms, Events, Keys, Router,
              Animations and Redux concept.
              Worked on responsive design and developed a responsive website
              that could be served to desktop users using React.js.
              Maintained states in the stores and dispatched the actions using
              redux.
              Bootstrapped with create-react-app, react-router, axios, Material-UI,
              Moment.js.
              Implemented the Drag and Drop functionality using React-
              Draggable.
              Focused strongly on modern functional programming principles,
              component based architecture, ES6 patterns and best practices.
              Daily one on one review and feedback from experienced mentor.
              Worked closely with the Back-End team to display data using the
              Custom Components, library Components, and Redux.
              Used Firebase as database to store the data.
              Used JIRA as the bug tracking system to track and maintain the
              history of bugs/issues on everyday basis."
            />

            <Experience
              startMonth={7}
              startYear={2016}
              endMonth={6}
              endYear={2017}
              jobName="Web Developer, Krest Technologies (India) "
              jobDescription="
                Worked on an Agile (Scrum) Development Team to deliver regular updates to business team and project managers.
                Involved in designing and developing the web pages using HTML 5, CSS3, JavaScript, Bootstrap, React.js, Redux.js.
                Worked on ReactJS Virtual Dom and React views, rendering using components which contains additional components called custom HTML tags.
                Involved to implement various screens for the front end using React.js and used various predefined components from NPM (Node Package Manager) and Redux.js library.
                Worked in using React JS components, Forms, Events, Keys, Router, Animations, and Flux concept.
                Used React JS for templating for faster compilation and developing reusable components.
                "
            />

            <h2>Skills</h2>

            <Grid>
              <Cell col={4}>
                <h5>React</h5>
                <div class="container">
                  <div class="skills react" />
                </div>

                <br />

                <h5>React Native</h5>
                <div class="container">
                  <div class="skills react-native" />
                </div>

                <br />

                <h5>JavaScript</h5>
                <div class="container">
                  <div class="skills js" />
                </div>

                <br />

                <h5>Python</h5>
                <div class="container">
                  <div class="skills python" />
                </div>

                <br />

                <h5>HTML</h5>
                <div class="container">
                  <div class="skills html" />
                </div>
                <br />

                <h5>CSS</h5>
                <div class="container">
                  <div class="skills css" />
                </div>

                <br />
                <h5>Java</h5>
                <div class="container">
                  <div class="skills java" />
                </div>

                <br />
              </Cell>
              <Cell col={4}>
                <h5>BootStrap</h5>
                <div class="container">
                  <div class="skills bootstrap" />
                </div>

                <br />
                <h5>Docker</h5>
                <div class="container">
                  <div class="skills docker" />
                </div>

                <br />
                <h5>Spring MVC</h5>
                <div class="container">
                  <div class="skills spring" />
                </div>

                <br />
                <h5>Hibernate</h5>
                <div class="container">
                  <div class="skills hibernate" />
                </div>

                <br />
                <h5>Firebase</h5>
                <div class="container">
                  <div class="skills firebase" />
                </div>

                <br />
                <h5>SQL</h5>
                <div class="container">
                  <div class="skills sql" />
                </div>

                <br />
                <h5>Oracle</h5>
                <div class="container">
                  <div class="skills oracle" />
                </div>

                <br />
              </Cell>
              <Cell col={4}>
                <h5>C</h5>
                <div class="container">
                  <div class="skills c" />
                </div>

                <br />
                <h5>C++</h5>
                <div class="container">
                  <div class="skills cpp" />
                </div>

                <br />
                <h5>Flask</h5>
                <div class="container">
                  <div class="skills flask" />
                </div>

                <br />
                <h5>Node.js</h5>
                <div class="container">
                  <div class="skills node" />
                </div>
                <br />

                <h5>Amazon EC2</h5>
                <div class="container">
                  <div class="skills amazon" />
                </div>

                <br />
                <h5>Tableau Desktop</h5>
                <div class="container">
                  <div class="skills tableau-desktop" />
                </div>

                <br />
                <h5>Tableau Server</h5>
                <div class="container">
                  <div class="skills tableau-server" />
                </div>
              </Cell>
            </Grid>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Resume;
