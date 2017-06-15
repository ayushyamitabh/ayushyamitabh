import React, { Component } from 'react';
import './App.css';
import profile from './res/profile.jpg';
import {Card, CardHeader, CardMedia, CardTitle, CardText, CardActions, FlatButton} from 'material-ui';
class App extends Component {
  render() {
    return (
      <div>
        <Card className="main-card">
          <CardMedia>
            <img src={profile} alt="" />
          </CardMedia>
          <CardTitle title="Ayushya Amitabh" className="card-title"/>
          <CardText className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
            Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
            Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
          </CardText>
          <CardActions>
            <FlatButton label="Action1" />
            <FlatButton label="Action2" />
          </CardActions>
        </Card>
      </div>
    );
  }
}

export default App;
