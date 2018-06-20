import React, {Component} from 'react';
import * as firebase from 'firebase';
import {Avatar, Typography, Paper, IconButton, Button, Tooltip} from '@material-ui/core';

// ICONS
import Email from '@material-ui/icons/Email';
import Code from '@material-ui/icons/Code';
import TimelineIcon from '@material-ui/icons/Timeline';
import Skill from '@material-ui/icons/Build';
import Project from '@material-ui/icons/DeveloperBoard';
import Work from '@material-ui/icons/Work';
import Close from '@material-ui/icons/Cancel';
import profile from './res/profile.jpg';

// OTHER COMPONENTS
import Timeline from './Timeline'
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import './App.css';

export default class App extends Component {
        constructor(props) {
                super(props);
                this.state={
                        content : '',
                        color: '',
                        status: []
                };
        }
        componentDidMount(){
                firebase.database().ref('/Status').once('value', (snap)=>{
                        if (snap.val()){
                                var text = snap.val();
                                text = text.split("\n");
                                this.setState({
                                        status: text
                                })
                        }
                }).catch((err)=>{
                        console.log(err);
                })
        }
        render() {
                return(
                        <div className="App" data-aos="">
                                <Avatar src={profile} className="main-avatar" data-aos="fade-up" data-aos-offset={5}/>
                                <div className="socials">
                                        <Tooltip title="Contact" placement="top">
                                                <IconButton className="social-btn" aria-label="Cotact Me" href="mailto:ayushyamitabh@gmail.com" data-aos="fade-up" data-aos-delay={50} data-aos-offset={5}>
                                                        <Email />
                                                </IconButton>
                                        </Tooltip>
                                        <Tooltip title="GitHub" placement="top">
                                                <IconButton className="social-btn" aria-label="GitHub" href="https://www.github.com/ayushyamitabh" data-aos="fade-up" data-aos-delay={50} data-aos-offset={5}>
                                                        <Code />
                                                </IconButton>
                                        </Tooltip>
                                        <Tooltip title="LinkedIn" placement="top">
                                                <IconButton className="social-btn" aria-label="LinkedIn" href="https://www.linkedin.com/in/ayushyamitabh/" data-aos="fade-up" data-aos-delay={50} data-aos-offset={5}>
                                                        <Typography variant="title" >in</Typography>
                                                </IconButton>
                                        </Tooltip>
                                </div>
                                <Paper className="name-paper" data-aos="fade-up" elevation={5} data-aos-delay={100} data-aos-offset={5}>
                                       <Typography variant="headline" color="primary">Ayushya Amitabh</Typography>
                                </Paper>
                                <Paper className="name-paper about" data-aos="fade-up" elevation={5} data-aos-delay={100} data-aos-offset={5}>
                                        {
                                                this.state.status.map((data, index)=>{
                                                        return(
                                                                <Typography variant="body1" key={`textsegment${index}`}>
                                                                         {data}
                                                                 </Typography>
                                                        );
                                                })
                                        }
                                </Paper>
                                <div className="socials" id="section-buttons" data-aos-offset={5}>
                                        <Button 
                                                size={this.state.content !== ''?'small':'medium'}
                                                variant="outlined"
                                                className="social-btn section-btn"
                                                data-aos="fade-up"
                                                data-aos-delay={150}
                                                style={{color:'rgb(0,181,119)'}}
                                                onClick={()=>{
                                                        this.setState({
                                                                content:'timeline', 
                                                                color:'rgb(0,181,119)'
                                                        })
                                                }}
                                        >
                                                <TimelineIcon style={{marginRight:7}} className="section-icon"/> Timeline
                                        </Button>
                                        <Button 
                                                size={this.state.content !== ''?'small':'medium'}
                                                variant="outlined"
                                                className="social-btn section-btn"
                                                data-aos="fade-up"
                                                data-aos-delay={150}
                                                style={{color:'rgb(0,119,181)'}}
                                                onClick={()=>{
                                                        this.setState({
                                                                content:'skills', 
                                                                color:'rgb(0,119,181)'
                                                        })
                                                }}
                                        >
                                                <Skill style={{marginRight:7}} className="section-icon"/> Skills
                                        </Button>
                                        <Button 
                                                size={this.state.content !== ''?'small':'medium'}
                                                variant="outlined" 
                                                className="social-btn section-btn"
                                                color="secondary"
                                                data-aos="fade-up" 
                                                data-aos-delay={150}
                                                style={{color:'rgb(181,0,119)'}}
                                                onClick={()=>{
                                                        this.setState({
                                                                content:'projects', 
                                                                color:'rgb(181,0,119)'
                                                        })
                                                }}
                                        >
                                                <Project style={{marginRight:7}} className="section-icon"/> Projects
                                        </Button>
                                        <Button 
                                                size={this.state.content !== ''?'small':'medium'}
                                                variant="outlined"
                                                className="social-btn section-btn"
                                                data-aos="fade-up"
                                                data-aos-delay={150}
                                                style={{color:'rgb(181,119,0)'}} 
                                                onClick={()=>{
                                                        this.setState({
                                                                content:'experience', 
                                                                color:'rgb(181,119,0)'
                                                        })
                                                }}
                                        >
                                                <Work style={{marginRight:7}} className="section-icon"/> Experience
                                        </Button>
                                        {
                                                this.state.content !== ''?
                                                <IconButton data-aos="fade-left" className="social-btn" onClick={()=>{this.setState({content:'',color:''})}}>
                                                        <Close />
                                                </IconButton>:
                                                null
                                        }
                                </div>
                                {
                                        this.state.content !== ''?
                                        <Typography variant="headline" style={{color:this.state.color, marginTop: 15}}>
                                                {this.state.content.toUpperCase()}
                                        </Typography>:
                                        null
                                }
                                {
                                        this.state.content === 'timeline'?
                                        <Timeline />:
                                        this.state.content === 'skills'?
                                        <Skills />:
                                        this.state.content === 'projects'?
                                        <Projects />:
                                        this.state.content === 'experience'?
                                        <Experience />:
                                        <div>
                                                <Typography 
                                                        variant="subheading" 
                                                        style={{color:'darkgray', marginTop: 15}}
                                                        data-aos="fade-up"
                                                        data-aos-delay={200}
                                                        data-aos-offset={10}
                                                >
                                                        Click on one of them. Things will happen.
                                                </Typography>
                                        </div>
                                }
                        </div>
                );
        }
}