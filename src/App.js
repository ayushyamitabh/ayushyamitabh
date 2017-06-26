import React, { Component } from 'react';
import Timeline from './Timeline.js';
import Home from './Home.js';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      p: 'home'
    }
  }
  render() {
    return (
      <div>
        {
          this.state.p === 'home' ? <Home />:
          <Timeline />
        }
      </div>
    );
  }
}

export default App;
