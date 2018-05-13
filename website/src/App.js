import React, {Component} from "react";
import { Router, Route } from "react-router";
import createBrowserHistory from 'history/createBrowserHistory';
import Home from './Home.js';
import Timeline from './timeline.js';

const history = createBrowserHistory()

class App extends Component{
  render() {
    return (
      <Router history={history}>
        <div className="router-container">
          <Route exact path="/" component={Home} />
          <Route exact path="/timeline" component={Timeline} />
        </div>
      </Router>
    );
  }
}

export default App;