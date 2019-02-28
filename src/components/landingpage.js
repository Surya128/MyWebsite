import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
//import Background from '../images/bg.jpg';

var sectionStyle = {
  width: "100%",
  height: "400px",
  margin: 'auto'
};


class LandingPage extends Component {
  render() {
    return(
      <div style={ sectionStyle } className="page">
        <Grid className="landing-grid" >
          <Cell col={4}>
            <img
              src={ require('../images/my_pic.jpg') }
              alt="avatar"
              className="avatar-img"
              style={{height: '300px'}}
              
              />

            
          </Cell>
          <Cell col={8}>
          
          <div className="banner-text">
                <h1>
                Surya Prakash
                <br />
                <h2>Full Stack Web Developer</h2>
                </h1>

                <p>React | React Native | HTML | CSS | JavaScript | Python | Flask | FireBase | Bootstrap </p>

                <div className="social-links">

                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_self_edit_top_card%3Bwwwq3J5aQqOAl6sHsCMfRg%3D%3D" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                  </a>

                  {/* Github */}
                  <a href="https://github.com/Surya128" rel="noopener noreferrer" target="_blank">
                    <i className="fa fa-github-square" aria-hidden="true" />
                  </a>

            
                 

                </div>
            </div>
          </Cell>
        </Grid>
      </div>
    )
  }
}

export default LandingPage;
