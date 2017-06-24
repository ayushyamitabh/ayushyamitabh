import React, { Component } from 'react';
import LineDot from './LineDot.js';
import {Paper} from 'material-ui';
import './App.css';
import $ from 'jquery';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      ninetySeven: [{alignment:'right',title:'JULY 17',subtitle:'0th Birthday',text:'Born in Rome, Italy - to the best parents.'}],
      ninetyEight: [{alignment:'left',title:'AUGUST',subtitle:'First Flight',text:'Going back to the motherland - (Patna, Bihar) India - for the first time.'}]
    }
  }
  componentDidMount(){
    $('body').animate({scrollTop:0},500);
  }
  render() {
    return (
      <div>
        <Paper className="head" zDepth={3}>
          <h1>AYUSHYA AMITABH</h1>
          <h3>Start your travel down my memory lane</h3>
        </Paper>
        <div className="down-line"></div>
        <LineDot
          id = "ninetySeven"
          year = {1997}
          events = {this.state.ninetySeven}
        />
        <LineDot
          id = "ninetyEight"
          year = {1998}
          events = {this.state.ninetyEight}
        />
      </div>
    );
  }
}

export default App;
