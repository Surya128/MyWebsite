import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class About extends Component {
  render() {
    return(
      <div className="about-page">
      <Grid name="about-grid">

        <Cell col={6}>
      
                    <h3 style={{color: 'white',textAlign: 'center'}}>Certifications</h3>
                    <h5 style={{color: 'white'}}>
                    <br/>
                    <br/>
                    > Python Data Structures - Coursera<br/><br/><br/>
> Using Python to Access Web Data - Coursera<br/><br/><br/>
> Programming for Everybody(Getting Started with Python) - Coursera<br/><br/><br/>
> Java Certification - Orbit Technology Research Pvt Ltd<br/><br/><br/>
> Oracle Certification - Orbit Technology Research Pvt Ltd<br/><br/><br/>
Work Experience
   10/2018 - present</h5>
             

        </Cell>

        <Cell col={6}>
        <h3 style={{color: 'white',textAlign: 'center'}}>Awards and Activities</h3>
        <h5 style={{color: 'white'}}>
        <br/>
        <br/>
        
        > Got Merit Certificate in the Android App Development Workshop conducted by NADC India, IIT Madras.<br/><br/><br/>
> Runner up in the coding event "TechPuzzle" in FUSION 2k15.<br/><br/><br/>
> Coordinator and Volunteer of Computer Society of India(CSI) for three years.<br/><br/><br/>
> Worked as Placement Coordinator for campus placements 2015 in Osmania University.<br/><br/><br/>
> UGS (Scholarship): University Graduate Scholarship by University of Cincinnati(2017-2019).<br/><br/><br/>
   </h5>
        </Cell>

      </Grid>
      </div>
    )
  }
}

export default About;
