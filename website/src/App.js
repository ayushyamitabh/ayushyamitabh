import React, {Component} from "react";
import { Router, Route } from "react-router";
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './Home.js';
import Timeline from './Timeline.js';
import Redesign from './Redesign.js';

const history = createBrowserHistory()

class App extends Component{
  render() {
    return (
      <Router history={history}>
        <div className="router-container">
          <Route exact path="/" component={Home} />
          <Route exact path="/timeline" component={Timeline} />
          <Route exact path="/redesign" component={Redesign} />
        </div>
      </Router>
    );
  }
}

export default App;