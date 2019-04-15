import React, { Component } from "react";
import { Grid, Cell, List, ListItem, ListItemContent } from "react-mdl";

class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Surya Prakash</h2>
            <img
              src={require("../images/my_pic.jpg")}
              alt="avatar"
              style={{ height: "250px" }}
            />
          </Cell>
          <Cell col={6}>
            <h2 style={{ color: "white" }} align="center">
              Contact Me
            </h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "sans-serif",
                      color: "white"
                    }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (513) 641-8698
                  </ListItemContent>
                </ListItem>

                <ListItem>
                  <ListItemContent
                    style={{
                      fontSize: "30px",
                      fontFamily: "sans-serif",
                      color: "white"
                    }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    chittivh@mail.uc.edu
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Contact;
