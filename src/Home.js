import React, {Component} from 'react';
import {Avatar} from 'material-ui';
import profile from './profile.jpg';
import './App.css';
import $ from 'jquery';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      a:false
    }
  }
  componentDidMount() {
    setTimeout(()=>{ $('.avatar').addClass('avatar-resize'); }, 10);
    setTimeout(()=>{ $('.home-name').animate({opacity:1}, 400); }, 20);
  }
  popName(){
    $('.home-name').addClass('home-name-big');
    $('.avatar').addClass('avatar-big');
    setTimeout(()=> { $('.home-name').removeClass('home-name-big'); $('.avatar').removeClass('avatar-big'); }, 500);
  }
  render() {
    return (
      <div className="home">
        <Avatar onClick={this.popName} className="avatar" src={profile} />
        <div className="down-line-small"></div>
        <h1 onClick={this.popName} className="home-name">Ayushya Amitabh</h1>
        <div className="down-line-small"></div>
        <h1 onClick={this.popName} className="home-name">▼</h1>
        <div className="down-line"></div>
      </div>
    );
  }
}

export default Home;
