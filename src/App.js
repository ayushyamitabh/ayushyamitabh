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
    this.pageChange = this.pageChange.bind(this);
  }
  pageChange(p){
    this.setState({
      p: p
    })
  }
  render() {
    return (
      <div>
        {
          this.state.p === 'home' ? <Home pageChanger={this.pageChange} />:
          <Timeline pageChanger={this.pageChange}/>
        }
      </div>
    );
  }
}

export default App;
