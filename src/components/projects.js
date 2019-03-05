import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button } from 'react-mdl';


class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(
        <div className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >My PortFolio</CardTitle>
            <CardText>
              - Developed my portfolio website using React, React Router.<br/>
              - Styled the components using CSS, CSS Transition groups, React Material UI.
              </CardText>
            <CardActions border>
              <Button colored><a href="https://github.com/Surya128/MyWebsite" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
              
            </CardActions>
          </Card>

          {/* Project 2 
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
            <CardText>
            Project Description
              </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card> */}

          {/* Project 3 
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
            <CardText>
            Project Description
              </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
          </Card>*/}
        </div>


      )
    } 
    else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '230px', background: 'url(https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/eb7e73a0-96da-11e6-b385-00163ed833e7/4013307709/apple-java-for-mac-screenshot.png) center / cover'}} >Development of Festival Registration System using Spring MVC and Servlets</CardTitle>
            <CardText>
            - Developed a web application where a user can view, edit their details, register and search one or more events. Admin can view , update , delete , add , register an event/s.<br />
- Authentication and authorization of users is done on the server side and the validation of input fields is done on the client side.<br />
- To build this application , Model 2 (MVC) architecture is used to make the navigation control, ease of access and testing better.<br />
              </CardText>
            <CardActions border>
              <Button colored><a href = "https://github.com/Surya128/festival-reg-system" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
            </CardActions>
          </Card>


        <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '176px', background: 'url(https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/eb7e73a0-96da-11e6-b385-00163ed833e7/4013307709/apple-java-for-mac-screenshot.png) center / cover'}} >Best Keyword Cover Search</CardTitle>
            <CardText>
            - Developed an application which uses Closest Keywords search to query objects.<br/>
- It uses k-NNE algorithm which significantly reduces the number of candidate keyword covers generated. <br/>
- Front End is developed using AWT, Swing and the Back End is developed using JAVA , Mysql.<br/>
- k-NNE algorithm applies a different processing strategy, searching local best solution for each object in a certain query keyword. As a consequence, the number of candidate keyword covers generated is significantly reduced.<br/>
              </CardText>
            <CardActions border>
              <Button colored><a href = "https://github.com/Surya128/keyword_cover" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
            </CardActions>
          </Card>


        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">


           <Card shadow={5} style={{width: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '300px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png) center / cover'}} >Re-ranking the comments for questions in Community Question Answering using SVM Classifier</CardTitle>
            <CardText>
            - Developed a project which ranks all the comments for a question according to their relevance. <br />
            - Preprocessing is done on the question-comments dataset and the necessary features are extracted using semantic word embeddings.<br />
            - Word2Vec models are trained on these data sources and cosine similarity is calculated for the resulting vectors.<br />
            - SVM classifier is trained with the different values of the cost parameter and the one with best accuracy is selected.<br />
            - Coding part of the project is done in python using NLTK.
              </CardText>
            <CardActions border>
              <Button colored><a href = "https://github.com/Surya128/CQA" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
            </CardActions>
          </Card>


        <Card shadow={5} style={{width: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '427px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png) center / cover'}} >Development of Online Auction System using bootstrap and django</CardTitle>
            <CardText>
            - Designed and Developed a web based auction system that satisfies the requirements of ease of use, adaptability of changing requirements, maintainable and has a scope of reusability.<br />
Front end : Bootstrap, Python , jQuery<br/>
Back end : Mysql<br/>
Framework : Django<br/>
              </CardText>
            <CardActions border>
              <Button colored><a href = "https://github.com/Surya128/Auction_system" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
            </CardActions>
          </Card>


<Card shadow={5} style={{width: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '337px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png) center / cover'}} >Classification of Music Genre using Logistic Regression and KNN Classifier</CardTitle>
            <CardText>
            - Developed a web application which is written in Python using Django framework that classifies the music based on its genre.<br/>
- We have used Ajax, AngularJS, jQuery and Bootstrap for developing the frontend.<br/>
- Dataset of 1000 audio files is taken and features are extracted from it. We chose to extract MFCC from the audio files as the feature.<br/>
- Various Machine Learning algorithms like K-NN, Logistic Regression and SVM are used and the one which gave the highest testing accuracy is chosen.<br/>
              </CardText>
            <CardActions border>
              <Button colored><a href = "https://github.com/Surya128/classification-of-music-genre" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
            </CardActions>
          </Card>



        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '176px', background: 'url(https://www.itopstimes.com/wp-content/uploads/2018/09/cloud-computing-1990405_960_720-490x338.png) center / cover'}} >Weather forecast API</CardTitle>
            <CardText>
            - Developed and deployed a web application on AWS which displays the data about Cincinnati weather using Python, Flask, Sqlite. <br/>
- It also tells the weather forecast for a particular set of days based on the selection.

              </CardText>
          

          <CardActions border>
              <Button colored><a href = "https://github.com/Surya128/cloud" target="_blank" rel="noopener noreferrer">GitHub</a></Button>
            </CardActions>
            </Card>



        </div>
      )
    }

  }



  render() {
    return(
      <div className = "projects-menu">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab style={{color: 'white'}}>React</Tab>
          <Tab style={{color: 'white'}}>Java</Tab>
          <Tab style={{color: 'white'}}>Python</Tab>
          <Tab style={{color: 'white'}}>Cloud</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;
