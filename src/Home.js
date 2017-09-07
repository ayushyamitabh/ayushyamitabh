import React, {Component} from 'react';
import {Avatar, 
        Card, 
        CardHeader, 
        CardActions, 
        CardText,
        Chip,
        FlatButton} from 'material-ui';
import TimelineIcon from 'material-ui/svg-icons/action/timeline';
import CodeIcon from 'material-ui/svg-icons/action/code';
import ProjectIcon from 'material-ui/svg-icons/hardware/developer-board';
import Projects from 'material-ui/svg-icons/device/developer-mode';
import Business from 'material-ui/svg-icons/communication/business';
import Skills from 'material-ui/svg-icons/social/whatshot';
import profile from './profile.jpg';
import './App.css';
import $ from 'jquery';


class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project:true
    }
    this.pLang = ['C++', 'Java', 'JavaScript', 'Python', 'R5RS (Scheme)', 'MySQL', 'Node.JS', 'ReactJS', 'React Native', 'Electron JS', 'HTML5', 'CSS3'];
    this.fLang = ['Hindi (Fluent)', 'French (Conversational)'];
    this.OS = ['Windows', 'Linux - elementaryOS & Ubuntu'];
    this.otherSkills = ['Adobe Photoshop', 'Adobe InDesign', 'Adobe Illustrator', 'Adobe After Effects', 'Adobe Dreamweaver'];
  }
  componentDidMount() {
    setTimeout(()=>{ $('.avatar').addClass('avatar-resize'); }, 10);
    setTimeout(()=>{ $('.home-name').animate({opacity:1}, 400); }, 20);
  }
  popName(){
    $('.home-name').addClass('home-name-big');
    setTimeout(()=> { $('.home-name').removeClass('home-name-big'); $('.avatar').removeClass('avatar-big'); }, 500);
  }
  toggleView(n){
    if ($(`.${n}`).hasClass('hideView')){
      $(`.${n}`).removeClass('hideView');
    } else {
      $(`.${n}`).addClass('hideView');
    }
  }
  render() {
    return (
      <div className="home">
        <Avatar onClick={this.popName} className="avatar" src={profile} />
        <div className="down-line-small"></div>
        <h1 onClick={this.popName} className="home-name">Ayushya Amitabh</h1>
        <div className="down-line-small"></div>
        <h1 onClick={this.popName} className="home-subname">Pursuing B.S. in Computer Science<br/>@ CUNY City College of New York</h1>
        <div className="down-line-small" />
        <h1 onClick={this.popName} className="home-name arrow">▼</h1>
        <div className="down-line-small"></div>
        <div className="home-name" onClick={()=>{this.props.pageChanger('timeline')}}>
          <TimelineIcon />
          <span>Timeline</span>
        </div>
        <div className="down-line" />
        <h2 
          className="home-name green" 
          onClick={()=>{this.toggleView('projects')}} >
          <Projects className="icon green"/>
          Projects
        </h2>
        <div className="projects hideView">
          <Chip className="chip-link" href="https://www.github.com/ayushyamitabh">
            github/ayushyamitabh
          </Chip>
          <Project 
            title="Together Web" 
            subtitle="Personal Project"
            description="Web and mobile app that provides synced video & music streaming, along with chat. This project uses ReactJS, ReactNative, Socket.io, & Node.js."
            link={{git:"https://www.github.com/ayushyamitabh/TogetherWeb"}}
          />
          <Project 
            title="Appraisals Partner Managment"
            subtitle="Project for internship @ JWC Real Estate Group"
            description="Web and mobile app for a new AMC (Appraisal Management Company) for JWC Real Estate Group. This project uses ReactJS, Material-UI, Firebase Database - Functions - Hosting, & Node.js."
            link={{git:"https://www.github.com/ayushyamitabh/APM"}}
          />
          <Project
            title="Cocoa Grinder NYC Website"
            subtitle="Project for Cocoa Grinder NYC"
            description="Business website for Cocoa Grinder. Built using Squarespace & some basic HTML."
            link={{url:"https://www.cocoagrindernyc.com"}}
          />
          <Project
            title="Cocoa Grinder Franchise Website"
            subtitle="Project for Cocoa Grinder Franchise"
            description="Business website for Cocoa Grinder Franchise. Built using Squarespace & some basic HTML."
            link={{url:"https://www.cocoagrinderfranchise.com/"}}
          />
          <Project
            title="Cocoa Grinder Franchisee Portal"
            subtitle="Project for Cocoa Grinder Franchise"
            description="Franchisee login, and product order portal for Cocoa Grinder NYC partners. Built using ReactJS, Firebase, & Material-UI."
            link={{url:"https://order.cocoagrinderfranchise.com/",git:"https://github.com/ayushyamitabh/cocoagrinderfranchise"}}
          />
          <Project
            title="Cocoa Grinder Franchisee App"
            subtitle="Project for Cocoa Grinder Franchise"
            description="Franchisee login, and product order portal for Cocoa Grinder NYC partners. This app also adds a community issue tracker, and blog/chat functionality. Built using ReactNative, Firebase, & Material-UI."
            link={{git:"https://github.com/ayushyamitabh/FranchiseeApp"}}
          />
          <Project
            title="Character Frequency Counter"
            subtitle="Final Project for Intro to Python"
            description="Python character frequency counter and graph-er that produces a pie chart showing the frequency of each character."
            link={{git:"https://github.com/ayushyamitabh/Character-Frequency-Counter"}}
          />
          <Chip className="chip-link">
            ALGORITHMS
          </Chip>
          <div className="side-scroll">
            <Chip className="chip" href="https://www.github.com/ayushyamitabh/sorting-algorithms">
              <Avatar className="scroll-avatar" icon={<CodeIcon />} />
              Sorting
            </Chip>
            <Chip className="chip" href="https://www.github.com/ayushyamitabh/searching-algorithms">
              <Avatar className="scroll-avatar" icon={<CodeIcon />} />
              Searching
            </Chip>
            <Chip className="chip" href="https://www.github.com/ayushyamitabh/graph-traversal">
              <Avatar className="scroll-avatar" icon={<CodeIcon />} />
              Graph Traversal
            </Chip>
            <Chip className="chip" href="https://www.github.com/ayushyamitabh/greedy-method">
              <Avatar className="scroll-avatar" icon={<CodeIcon />} />
              Greedy Method
            </Chip>
          </div>
        </div>        
        <div className="down-line" />
        <h2 
          className="home-name blue"
          onClick={()=>{this.toggleView('experience')}} >
          <Business className="icon blue" />
          Experience
        </h2>
        <div className="experience hideView">
          <Chip className="chip-link blue" href="https://www.linkedin.com/in/ayushyamitabh">
            linkedin/ayushyamitabh
          </Chip>
          <Job
            title="Freelance Web Developer" 
            subtitle="Cocoa Grinder NYC (Coffee Shop & Supplier) • Mar 2017 - Current • 6 mos"
            description={
              <div>
                Created cocoagrindernyc.com, cocoagrinderfranchise.com, and order.cocoagrinderfranchise.com.
                <ul>
                  <li>Used Facebook's ReactJS for front-end,</li>
                  <li> Used Google's Firebase for BaaS,</li>
                  <li> Used Moltin as an eCommerce API to handle inventory, cart management, and integrated with Stripe for secure payments.</li>
                </ul>
              </div>
            }
          />
          <Job 
            title="App Development Intern"
            subtitle="JWC Real Estate Group • Apr 2017 - Current • 5 mos"
            description={
              <ul>
                <li>Designed and coded website for Miami Beach Appraisals (miamibeachappraisers.com) within a deadline of 2 weeks</li>
                <li>Recently joined team to research and help create an Android app for on-demand hospitality services.</li>
                <li>Learned and used Firebase API by Google.</li>
                <li>Used React JS framework by Facebook to build website's front-end</li>
                <li>Used Node.js to implement Firebase Cloud Functions to automate an email notification system</li>
                <li>Learned and used React Native by Facebook to build a mobile client of website</li>
                <li>Help interview other prospect App Development Interns</li>
              </ul>
            }
          />
          <Job 
            title="Digital Marketing Intern"
            subtitle="CVISION Technologies, Inc. • Nov 2016 - Mar 2017 • 5 mos"
            description={
              <div>
                Worked on improving CVISION Technology's website and also on improving its SEO. Created original videos and graphics for the website. 
                <ul>
                  <li>Created informative videos to advertise company's new Webinar program</li>
                  <li> Created informative videos and graphics to advertise company's products - Trapeze for Invoice Processing, PdfCompressor and Trapeze for Mortgage</li>
                  <li>Helped improve the company's SEO by improving linking between pages, adding 'alt' tags, adding informative headers and analyzing the website's traffic data using Moz, and Google Analytic tools.</li>
                </ul>
              </div>
            }
          />
          <Job
            title="Graphic Design Intern"
            subtitle="Rescuing Leftover Cuisine • Jun 2016 - Nov 2016 • 6 mos"
          />
        </div>
        <div className="down-line" />
        <h2 
          className="home-name yellow"
          onClick={()=>{this.toggleView('skills')}} >
          <Skills className="icon yellow" />
          Skills
        </h2>
        <div className="skills hideView">
          <Chip className="chip-link yellow">
            PROGRAMMING LANGUAGES
          </Chip>
          <div className="side-scroll">
            {
              this.pLang.map((data, index)=>{
                return (
                  <Chip key={`plang${index}`} className="chip">
                    {data}
                  </Chip>
                );
              })
            }
          </div>
          <Chip className="chip-link yellow">
            LANGUAGES
          </Chip>
          <div className="side-scroll">
            {
              this.fLang.map((data, index)=>{
                return (
                  <Chip key={`flang${index}`} className="chip">
                    {data}
                  </Chip>
                );
              })
            }
          </div>
          <Chip className="chip-link yellow">
            OS
          </Chip>
          <div className="side-scroll">
            {
              this.OS.map((data, index)=>{
                return (
                  <Chip key={`os${index}`} className="chip">
                    {data}
                  </Chip>
                );
              })
            }
          </div>
          <Chip className="chip-link yellow">
            OTHER
          </Chip>
          <div className="side-scroll">
            {
              this.otherSkills.map((data, index)=>{
                return (
                  <Chip key={`other${index}`} className="chip">
                    {data}
                  </Chip>
                );
              })
            }
          </div>
        </div>
      </div>
    );
  }
}

function Job (props) {
  return (
    <Card className="job-card">  
      <CardHeader
        title={props.title}
        subtitle={props.subtitle}
      />
      <CardText>  
        {props.description}
      </CardText>
    </Card>
  );
}

function Project (props) {
  return (
      <Card className="project-card">
        <CardHeader
          title={props.title}
          subtitle={props.subtitle}
        />
        <CardText>
          {props.description}
        </CardText>
        <CardActions>
          { props.link ? 
            Object.keys(props.link).map((key,ind)=>{
              if (key === 'url') {
                return (<FlatButton 
                  key={key}
                  label='View Project'
                  icon={<ProjectIcon />}
                  href={props.link[key]}
                />);
              } else if (key === 'git') {
                return (<FlatButton 
                  key={key}
                  label='View Code'
                  icon={<CodeIcon />}
                  href={props.link[key]}
                />);
              }
            }) :
            <div />
          }
        </CardActions>
      </Card>
  );
}

export default Home;
