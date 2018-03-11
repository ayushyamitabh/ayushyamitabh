import './App.css';
import AOS from 'aos';
import * as firebase from 'firebase';
import profile from './res/profile.jpg';
import React, { Component } from 'react';
import Code from 'material-ui-icons/Code';
import Link from 'material-ui-icons/Link';
import Email from 'material-ui-icons/Email';
import Timeline from 'material-ui-icons/Timeline';
import KeyboardArrowUp from 'material-ui-icons/FileUpload';
import AssignmentInd from 'material-ui-icons/AssignmentInd';
import InsertDriveFile from 'material-ui-icons/InsertDriveFile';
import KeyboardArrowDown from 'material-ui-icons/ArrowDropDownCircle';
import { AppBar,
         Card, 
         CardContent, 
         CardActions, 
         CardHeader, 
         Chip, 
         Divider,
         IconButton, 
         List,
         ListItem,
         ListItemIcon,
         ListItemText,
         ListSubheader,
         Paper,
         Typography } from 'material-ui';

class Home extends Component {
  constructor (props) {
    super(props);
    this.state = {
      data : {
        resumeurl : null,
        Experience: null,
        Projects: null,
        Skills: null
      }
    }
  }
  componentDidMount () {
    AOS.refresh();
    firebase.database().ref('/').on('value', (snap)=>{
      this.setState({
        data: {
          resumeurl: snap.val().resumeurl,
          Experience: snap.val().Experience,
          Projects: snap.val().Projects,
          Skills: snap.val().Skills
        }
      })
    })
  }
  render() {
    return (
      <div className="App" >

        <div className="tile" >
          <div className="section-content home">
            <Paper className="name-paper" data-aos="fade-left" elevation={4} > 
              <img src={profile} alt="Ayushya Amitabh"/>
              <Typography variant="display2"> 
                Ayushya Amitabh
              </Typography>
              <Typography variant="body2"> 
                Computer Science Major & Math Minor <br /> @ CUNY City College of New York
              </Typography>
            </Paper>
            <div className="home-tile-buttons">
              <List component="nav" subheader={<ListSubheader component="div">PROFESSIONAL ME</ListSubheader>}>
                <ListItem button component="a" href="mailto:ayushyamitabh@gmail.com" data-aos="fade-left" data-aos-delay="150">
                  <ListItemIcon><Email /></ListItemIcon>
                  <ListItemText primary="Contact Me" secondary="I'm always ready for new adventures"/>
                </ListItem>
                <Divider inset data-aos="fade-left" data-aos-delay="200"/>
                <ListItem button component="a" href="https://github.com/ayushyamitabh" data-aos="fade-left" data-aos-delay="300">
                  <ListItemIcon><Code /></ListItemIcon>
                  <ListItemText primary="Github" secondary="All my projects live here"/>
                </ListItem>
                <Divider inset data-aos="fade-left" data-aos-delay="350"/>
                <ListItem button component="a" href="https://linkedin.com/in/ayushyamitabh" data-aos="fade-left" data-aos-delay="450">
                  <ListItemIcon><AssignmentInd /></ListItemIcon>
                  <ListItemText primary="LinkedIn" secondary="Super professional"/>
                </ListItem>
                <Divider inset data-aos="fade-left" data-aos-delay="500"/>
                <ListItem button component="a" href={this.state.data.resumeurl} data-aos="fade-left" data-aos-delay="600">
                  <ListItemIcon><InsertDriveFile /></ListItemIcon>
                  <ListItemText primary="My Resume" secondary="Everything about me on one sheet" />
                </ListItem>
                <Divider inset data-aos="fade-left" data-aos-delay="650"/>
              </List>
            </div>
            <div className="home-tile-buttons">
              <List component="nav" subheader={<ListSubheader component="div">GET TO KNOW ME</ListSubheader>}>
                <ListItem button component="a" href="https://www.facebook.com/AYUSHYAMITABH" data-aos="fade-left" data-aos-delay="150">
                  <ListItemIcon>
                  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"	 width="266.893px" height="266.895px" viewBox="0 0 266.893 266.895" enableBackground="new 0 0 266.893 266.895"	>
                  <path id="Blue_1_" d="M248.082,262.307c7.854,0,14.223-6.369,14.223-14.225V18.812	c0-7.857-6.368-14.224-14.223-14.224H18.812c-7.857,0-14.224,6.367-14.224,14.224v229.27c0,7.855,6.366,14.225,14.224,14.225	H248.082z"/>
                  <path id="f" fill="#FFFFFF" d="M182.409,262.307v-99.803h33.499l5.016-38.895h-38.515V98.777c0-11.261,3.127-18.935,19.275-18.935	l20.596-0.009V45.045c-3.562-0.474-15.788-1.533-30.012-1.533c-29.695,0-50.025,18.126-50.025,51.413v28.684h-33.585v38.895h33.585	v99.803H182.409z"/>
                  </svg>
                  </ListItemIcon>
                  <ListItemText primary="Facebook" secondary="For Facebook Messenger"/>
                </ListItem>
                <Divider inset data-aos="fade-left" data-aos-delay="200"/>
                <ListItem button component="a" href="https://instagram.com/ayushyamitabh" data-aos="fade-left" data-aos-delay="300">
                  <ListItemIcon>
                    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 512 512" enableBackground="new 0 0 512 512" >
                        <path d="M373.659,0H138.341C62.06,0,0,62.06,0,138.341v235.318C0,449.94,62.06,512,138.341,512h235.318
                        C449.94,512,512,449.94,512,373.659V138.341C512,62.06,449.94,0,373.659,0z M470.636,373.659
                        c0,53.473-43.503,96.977-96.977,96.977H138.341c-53.473,0-96.977-43.503-96.977-96.977V138.341
                        c0-53.473,43.503-96.977,96.977-96.977h235.318c53.473,0,96.977,43.503,96.977,96.977V373.659z"/>
                        <path d="M370.586,238.141c-3.64-24.547-14.839-46.795-32.386-64.342c-17.547-17.546-39.795-28.746-64.341-32.385
                        c-11.176-1.657-22.507-1.657-33.682,0c-30.336,4.499-57.103,20.541-75.372,45.172c-18.269,24.631-25.854,54.903-21.355,85.237
                        c4.499,30.335,20.541,57.102,45.172,75.372c19.996,14.831,43.706,22.619,68.153,22.619c5.667,0,11.375-0.418,17.083-1.265
                        c30.336-4.499,57.103-20.541,75.372-45.172C367.5,298.747,375.085,268.476,370.586,238.141z M267.791,327.632
                        c-19.405,2.882-38.77-1.973-54.527-13.66c-15.757-11.687-26.019-28.811-28.896-48.216c-2.878-19.405,1.973-38.77,13.66-54.527
                        c11.688-15.757,28.811-26.019,48.217-28.897c3.574-0.53,7.173-0.795,10.772-0.795s7.199,0.265,10.773,0.796
                        c32.231,4.779,57.098,29.645,61.878,61.877C335.608,284.268,307.851,321.692,267.791,327.632z"/>
                        <path d="M400.049,111.951c-3.852-3.851-9.183-6.058-14.625-6.058c-5.442,0-10.773,2.206-14.625,6.058
                        c-3.851,3.852-6.058,9.174-6.058,14.625c0,5.451,2.207,10.773,6.058,14.625c3.852,3.851,9.183,6.058,14.625,6.058
                        c5.442,0,10.773-2.206,14.625-6.058c3.851-3.852,6.058-9.183,6.058-14.625C406.107,121.133,403.9,115.802,400.049,111.951z"/>
                    </svg>
                  </ListItemIcon>
                  <ListItemText primary="Instagram" secondary="For memories"/>
                </ListItem>
                <Divider inset data-aos="fade-left" data-aos-delay="350"/>
                <ListItem button component="a" href="https://twitter.com/eminemygod" data-aos="fade-left" data-aos-delay="450">
                  <ListItemIcon>
                  <svg  viewBox="0 0 2000 1625.36"  width="2000"  height="1625.36"  version="1.1"  xmlns="http://www.w3.org/2000/svg">
                  <path    d="m 1999.9999,192.4 c -73.58,32.64 -152.67,54.69 -235.66,64.61 84.7,-50.78 149.77,-131.19 180.41,-227.01 -79.29,47.03 -167.1,81.17 -260.57,99.57 C 1609.3399,49.82 1502.6999,0 1384.6799,0 c -226.6,0 -410.328,183.71 -410.328,410.31 0,32.16 3.628,63.48 10.625,93.51 -341.016,-17.11 -643.368,-180.47 -845.739,-428.72 -35.324,60.6 -55.5583,131.09 -55.5583,206.29 0,142.36 72.4373,267.95 182.5433,341.53 -67.262,-2.13 -130.535,-20.59 -185.8519,-51.32 -0.039,1.71 -0.039,3.42 -0.039,5.16 0,198.803 141.441,364.635 329.145,402.342 -34.426,9.375 -70.676,14.395 -108.098,14.395 -26.441,0 -52.145,-2.578 -77.203,-7.364 52.215,163.008 203.75,281.649 383.304,284.946 -140.429,110.062 -317.351,175.66 -509.5972,175.66 -33.1211,0 -65.7851,-1.949 -97.8828,-5.738 181.586,116.4176 397.27,184.359 628.988,184.359 754.732,0 1167.462,-625.238 1167.462,-1167.47 0,-17.79 -0.41,-35.48 -1.2,-53.08 80.1799,-57.86 149.7399,-130.12 204.7499,-212.41" />
                  </svg>
                  </ListItemIcon>
                  <ListItemText primary="Twitter" secondary="For following celebrities"/>
                </ListItem>
                <Divider inset data-aos="fade-left" data-aos-delay="500"/>
                <ListItem button component="a" href="/timeline"  data-aos="fade-left" data-aos-delay="600" >
                  <ListItemIcon><Timeline /></ListItemIcon>
                  <ListItemText primary="Timeline" secondary="My life in a timeline"/>
                </ListItem>
                <Divider inset data-aos="fade-left" data-aos-delay="650"/>
              </List>
            </div>
          </div>
          <IconButton onClick={()=>{document.scrollingElement.scrollBy(0,window.innerHeight);}} className="down-arrow" data-aos="fade-up" data-aos-duration="300" data-aos-delay="900" data-aos-offset="10">
            <KeyboardArrowDown />
          </IconButton>
        </div>

        <div className="tile exp" data-aos="slide-up">
          <AppBar color="default" position="static" className="section-heading" data-aos="fade-up" data-aos-delay="250">
            <Typography variant="display2">Experience</Typography>
          </AppBar>
          <div className="section-content">
            {
              this.state.data.Experience ? 
              this.state.data.Experience.map( (value, index)=>{
                return (
                  <div className="section-card" key={`exp${index}`} data-aos="fade-left" data-aos-delay="500">
                    <Card className="card" >
                      <CardHeader title={value.title} subheader={value.comp} />
                      <CardContent>
                        <Typography variant="subheading">
                          {value.from} ~ {value.to}
                        </Typography>
                        <br />
                        <Typography variant="body1">
                          {value.desc}
                        </Typography>
                      </CardContent>
                    </Card>
                  </div>
                );
              }) : null
            }
          </div>
          <IconButton onClick={()=>{document.scrollingElement.scrollBy(0,window.innerHeight);}} color="primary" className="down-arrow" data-aos="fade-up" data-aos-duration="300" data-aos-delay="900" data-aos-offset="10">
            <KeyboardArrowDown />
          </IconButton>
        </div>
        
        <div className="tile proj" data-aos="slide-up">
          <AppBar color="default" position="static" className="section-heading" data-aos="fade-up" data-aos-delay="250">
            <Typography variant="display2">Projects</Typography>
          </AppBar>
          <div className="section-content">
            {
              this.state.data.Projects ? 
              Object.keys(this.state.data.Projects).map( (key, index)=>{
                var value = this.state.data.Projects[key];
                return (
                  <div className="section-card" key={`proj${index}`} data-aos="fade-left" data-aos-delay="500">
                    <Card className="card" >
                      <CardHeader title={value.name} subheader={value.for} />
                      <CardContent>
                        <Typography variant="body1">
                          {value.desc}
                        </Typography>
                      </CardContent>
                      <CardActions>
                        { value.git ? <IconButton href={value.git} ><Code /></IconButton>: null }
                        { value.web ? <IconButton href={value.web} ><Link /></IconButton>: null }                        
                      </CardActions>
                    </Card>
                  </div>
                );
              }) : null
            }
          </div>
          <IconButton onClick={()=>{document.scrollingElement.scrollBy(0,window.innerHeight);}} color="inherit" className="down-arrow" data-aos="fade-up" data-aos-duration="300" data-aos-delay="900" data-aos-offset="10">
            <KeyboardArrowDown />
          </IconButton>
        </div>
          
        <div className="tile skill" data-aos="slide-up">
          <AppBar color="default" position="static" className="section-heading" data-aos="fade-up" data-aos-delay="250">
            <Typography variant="display2">Skills</Typography>
          </AppBar>
          <div className="section-content">
            {
              this.state.data.Skills ? 
              Object.keys(this.state.data.Skills).map( (key, index)=>{
                return (
                  <div className="section-card" key={key} data-aos="fade-left" data-aos-delay="500">
                    <Card className="card" >
                      <CardHeader title={key} />
                      <CardContent>
                        {
                          this.state.data.Skills[key].map(( skill, skillIndex )=>{
                            return (<Chip key={`${key}-skill-${skillIndex}`} label={skill} className="skill-chip"/>);
                          })
                        }
                      </CardContent>
                    </Card>
                  </div>
                );
              }) : null
            }
          </div>
          <IconButton 
            onClick={()=>{
              document.scrollingElement.scrollBy(0,0-(3*window.innerHeight));      
            }} 
            className="down-arrow" 
            data-aos="fade-up" 
            data-aos-duration="300" 
            data-aos-delay="900" 
            data-aos-offset="10">
            <KeyboardArrowUp />
          </IconButton>
        </div>

      </div>
    );
  }
}

export default Home;