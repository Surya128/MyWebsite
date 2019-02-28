import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';




class Resume extends Component {
  render() {
    return(
      <div className="page">
        <Grid className="resume-grid">
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={ require('../images/my_pic.jpg') }
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Surya Prakash</h2>
            <h4 style={{color: 'black'}}>Full Stack Web Developer</h4>
                        <hr style={{borderTop: '3px solid #58C7F4', width: '100%'}}/>
            <p>Short Bio</p>
            <hr style={{borderTop: '3px solid #58C7F4', width: '100%'}}/>
            <h5>Address</h5>
            <p>707 Martin Luther King Dr W,<br />Cincinnati, OH - 45220</p>
            <h5>Phone</h5>
            <p>(513) 641-8698</p>
            <h5>Email</h5>
            <p>suryaprakash128@outlook.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid #58C7F4', width: '100%'}}/>
            <h3>Education</h3>
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
            
              <h2>Experience</h2>

            <Experience
              startMonth={10}
              startYear={2018}
              endMonth={5}
              endYear={2019}
              jobName="Software Developer Intern, TechnoVision Solutions, Farmington, MI "
              jobDescription=
              "
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
                jobName="Web Developer, Krest Technologies, Hyderabad, India"
                jobDescription=
                "
                Worked on an Agile (Scrum) Development Team to deliver regular updates to business team and project managers.
                Involved in designing and developing the web pages using HTML 5, CSS3, JavaScript, Bootstrap, React.js, Redux.js.
                Worked on ReactJS Virtual Dom and React views, rendering using components which contains additional components called custom HTML tags.
                Involved to implement various screens for the front end using React.js and used various predefined components from NPM (Node Package Manager) and Redux.js library.
                Worked in using React JS components, Forms, Events, Keys, Router, Animations, and Flux concept.
                Used React JS for templating for faster compilation and developing reusable components.
                "
                />


              <hr style={{borderTop: '3px solid #58C7F4'}} />

              <hr style={{borderTop: '3px solid #58C7F4'}} />
                <h2>Skills</h2>

                  <p>React</p>
                  <div class="container">
                  <div class="skills react"></div>
                  </div>

                  <br />

                  <p>React Native</p>
                  <div class="container">
                    <div class="skills react-native"></div>
                  </div>

                  <br />

                  <p>JavaScript</p>
                  <div class="container">
                    <div class="skills js"></div>
                  </div>

                  <br />
                
                <p>Python</p>
                  <div class="container">
                    <div class="skills python"></div>
                  </div>

                <br />
                 
                <p>HTML</p>
                  <div class="container">
                    <div class="skills html"></div>
                  </div>
                  <br />
                 
                
                
                <p>CSS</p>
                  <div class="container">
                    <div class="skills css"></div>
                  </div>

                  <br />
                <p>Java</p>
                  <div class="container">
                    <div class="skills java"></div>
                  </div>

                  <br />
                <p>C</p>
                  <div class="container">
                    <div class="skills C"></div>
                  </div>

                 <br />
                <p>C++</p>
                  <div class="container">
                    <div class="skills C++"></div>
                  </div>

                  <br />
                <p>Flask</p>
                  <div class="container">
                    <div class="skills flask"></div>
                  </div>

                  <br />
                <p>Node.js</p>
                  <div class="container">
                    <div class="skills node"></div>
                  </div>

                  <br />
                <p>BootStrap</p>
                  <div class="container">
                    <div class="skills bootstrap"></div>
                  </div>

                  <br />
                <p>Docker</p>
                  <div class="container">
                    <div class="skills docker"></div>
                  </div>

                  <br />
                <p>Spring MVC</p>
                  <div class="container">
                    <div class="skills spring"></div>
                  </div>

                  <br />
                <p>Firebase</p>
                  <div class="container">
                    <div class="skills firebase"></div>
                  </div>

                  <br />
                <p>SQL</p>
                  <div class="container">
                    <div class="skills sql"></div>
                  </div>

                  <br />
                <p>Oracle</p>
                  <div class="container">
                    <div class="skills oracle"></div>
                  </div>

                  <br />
                <p>Amazon EC2</p>
                  <div class="container">
                    <div class="skills amazon"></div>
                  </div>

                    <br />
                <p>Tableau Desktop</p>
                  <div class="container">
                    <div class="skills tableau-desktop"></div>
                  </div>

                <br />
                <p>Tableau Server</p>
                  <div class="container">
                    <div class="skills tableau-server"></div>
                  </div>



          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;
