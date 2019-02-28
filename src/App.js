import React, { Component } from 'react';
import './App.css';
import { Layout, Header, Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
    <Layout>
        <Header 
            className="header-color" 
            title={<Link style={{textDecoration: 'none', color: '#E50914'}} to="/">MyPortfolio</Link>} scroll>
                <Navigation>
                    <Link to="/resume" style={{color: 'white'}} >Resume</Link>
                    <Link to="/aboutme" style={{color: 'white'}} >About Me</Link>
                    <Link to="/projects" style={{color: 'white'}} >Projects</Link>
                    <Link to="/contact" style={{color: 'white'}} >Contact</Link>
                </Navigation>
        </Header>

        <Drawer 
        title={<Link style={{textDecoration: 'none', color: '#E50914'}} to="/">MyPortfolio</Link>} 
        className="drawer"
        variant="permanent"
        >
            <Navigation>
              <Link to="/resume">Resume</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/projects">Projects</Link>
              <Link to="/contact">Contact</Link>
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;
