import React, { Component } from 'react';
import LineDot from './LineDot.js';
import {Card, CardTitle, CardText, Paper} from 'material-ui';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      events: [{alignment:'right',title:'JULY 17',subtitle:'0th Birthday',text:'Test text'}]
    }
  }
  render() {
    return (
      <div>
        <Paper className="head" zDepth={3}>
          <h1>AYUSHYA AMITABH</h1>
          <h3>Start your travel down my memory lane</h3>
        </Paper>
        <LineDot
          year = {1997}
          events = {this.state.events}
        />
      </div>
    );
  }
}

export default App;
