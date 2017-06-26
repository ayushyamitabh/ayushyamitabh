import React, { Component } from 'react';
import LineDot from './LineDot.js';
import {Paper} from 'material-ui';
import './App.css';
import $ from 'jquery';

class Timeline extends Component {
  constructor(props) {
    super(props);
    this.state={
      ninetySeven: [{alignment:'right',title:'JULY 17',subtitle:'0th Birthday',text:'Born in Rome, Italy - to the best parents.'}],
      ninetyEight: [{alignment:'left',title:'AUGUST',subtitle:'✈ First Flight',text:'Going back to the motherland - (Patna, Bihar) India - for the first time.'}],
      thousand: [{alignment:'right',title:'JANUARY',subtitle:'✈ To Dakar, Senegal',text:'Left the motherland for the first time in my concious memory - to Dakar, Senegal'}],
      thousandOne: [{alignment:'left',title:'AUGUST',subtitle:'🏫 Dakar Academy',text:'Started school - Kindergarden - at Dakar Academy.\nFrom grades KG to 3. Skipped 2nd Grade.'}],
      thousandFour: [{alignment:'right',title:'JANUARY',subtitle:'✈ Visited CT, USA',text:'Visited Danbury, CT, USA on my way back to India'},
                      {alignment:'right',title:'FEBRUARY',subtitle:'✈ Visited Paris, France',text:'Made a pit stop at Paris, France on my way back to India'},
                      {alignment:'right',title:'MARCH',subtitle:'✈ Back to the India',text:'Flew back to New Delhi, India.'},
                      {alignment:'right',title:'APRIL',subtitle:'🏫 Mount Carmel',text:'Completed third grade at Mount Carmel School'}],
      thousandFive: [{alignment:'left',title:'JUNE',subtitle:'✈ To Abuja, Nigeria',text:'On the move again - to Abuja, Nigeria.'},
                    {alignment:'left',title:'AUGUST',subtitle:'🏫 American International School of Abuja (AISA)',text:'New place, new school. Started school aat AISA - 4th Grade to 6th Grade\n-Junior Soccer Team\n-Middle School Student Govt. (Secretary / Vice President)'}],
      thousandSeven: [{alignment:'right',title:'JULY',subtitle:'✈ To Nairobi, Kenya',text:'On a Kenyan safari with my family.'}],
      thousandEight: [{alignment:'left',title:'JANUARY',subtitle:'✈ Dubai, UAE',text:'Roaming the streets of gold of Dubai, UAE'},
                      {alignment:'left',title:'FEBRUARY',subtitle:'✈ Going Back Home',text:'Going back home - New Delhi, India'},
                      {alignment:'left',title:'APRIL',subtitle:'🏫 ITL Public School',text:'Grades 7 to middle of 9th grade - Environmental Club - International Mathematics Olympiad (3rd in School)'}],
      thousandTwelve: [{alignment:'right',title:'AUGUST',subtitle:'✈ To NY, USA',text:'Started 10th grade at Queens High School for the Sciences - Key Club (President / Webmaster) (Community Service) - Yearbook Committee (Photoshop)'},
                     {alignment:'right',title:'SEPTEMBER',subtitle:'🏫 Queens High School for the Sciences @ York College (QHSS@YC)',text:'Started 10th grade at QHSS@YC - Key Club (President / Webmaster) (Community Service) - Yearbook Committee (Photoshop) - College level Robotics Course at Queensboro Community College'}],
      thousandFifteen: [{alignment:'left',title:'AUGUST',subtitle:'🏫 CUNY City College of New York (CCNY)',text:'Started college at CCNY - class of 2019 - Bachelor`s Degree in Computer Science - Undergraduate Student Government (Engineering Senator, Public Affairs Committee)'}]
    }
  }
  componentDidMount(){
    $('body').animate({scrollTop:0},500);
    setTimeout(()=>{ $('.head').addClass('resize'); }, 800);
  }
  render() {
    return (
      <div>
        <Paper className="head" zDepth={0}>
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
        <LineDot
          id="thousand"
          year = {2000}
          events = {this.state.thousand}
        />
        <LineDot
          id="thousandOne"
          year = {2001}
          events = {this.state.thousandOne}
        />
        <LineDot
          id="thousandFour"
          year = {2004}
          events = {this.state.thousandFour}
        />
        <LineDot
          id="thousandFive"
          year = {2005}
          events = {this.state.thousandFive}
        />
        <LineDot
          id="thousandSeven"
          year = {2007}
          events = {this.state.thousandSeven}
        />
        <LineDot
          id="thousandEight"
          year = {2008}
          events = {this.state.thousandEight}
        />
        <LineDot
          id="thousandTwelve"
          year = {2012}
          events = {this.state.thousandTwelve}
        />
        <LineDot
          id="thousandFifteen"
          year = {2015}
          events = {this.state.thousandFifteen}
        />
      </div>
    );
  }
}

export default Timeline;
