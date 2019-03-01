import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';


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
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #1</CardTitle>
            <CardText>
              Project Description
              </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #2</CardTitle>
            <CardText>
            Project Description
              </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#fff', height: '176px', background: 'url(https://xtnotes-1255646395.coshk.myqcloud.com/images/react-1.svg) center / cover'}} >React Project #3</CardTitle>
            <CardText>
            Project Description
              </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
              <Button colored>Live Demo</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>


      )
    } 
    else if(this.state.activeTab === 1) {
      return (
        <div className="projects-grid">
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '176px', background: 'url(https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/eb7e73a0-96da-11e6-b385-00163ed833e7/4013307709/apple-java-for-mac-screenshot.png) center / cover'}} >Development of Festival Registration System using Spring MVC and Servlets</CardTitle>
            <CardText>
            - Developed a web application where a user can view, edit their details, register and search one or more events. Admin can view , update , delete , add , register an event/s.<br />
- Authentication and authorization of users is done on the server side and the validation of input fields is done on the client side.<br />
- To build this application , Model 2 (MVC) architecture is used to make the navigation control, ease of access and testing better.<br />
              </CardText>
            <CardActions border>
              <Button colored><a href = "https://github.com/Surya128/festival-reg-system" >GitHub</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 2) {
      return (
        <div className="projects-grid">
           <Card shadow={5} style={{width: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '200px', background: 'url(https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1024px-Python-logo-notext.svg.png) center / cover'}} >Re-ranking the comments for questions in Community Question Answering using SVM Classifier</CardTitle>
            <CardText>
            - Developed a project which ranks all the comments for a question according to their relevance. <br />
            - Preprocessing is done on the question-comments dataset and the necessary features are extracted using semantic word embeddings.<br />
            - Word2Vec models are trained on these data sources and cosine similarity is calculated for the resulting vectors.<br />
            - SVM classifier is trained with the different values of the cost parameter and the one with best accuracy is selected.<br />
            - Coding part of the project is done in python using NLTK.
              </CardText>
            <CardActions border>
              <Button colored><a href = "https://github.com/Surya128/CQA" >GitHub</a></Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
          </Card>
        </div>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <div className="projects-grid">
           <Card shadow={5} style={{minWidth: '450', margin: 'auto'}}>
            <CardTitle style={{color: '#000000', height: '176px', background: 'url(https://www.itopstimes.com/wp-content/uploads/2018/09/cloud-computing-1990405_960_720-490x338.png) center / cover'}} >Cloud Project #1</CardTitle>
            <CardText>
              Project Description
              </CardText>
            <CardActions border>
              <Button colored>GitHub</Button>
            </CardActions>
            <CardMenu style={{color: '#fff'}}>
              <IconButton name="share" />
            </CardMenu>
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
