import React, {Component} from 'react';
import * as firebase from 'firebase';
import Code from '@material-ui/icons/Code';
import Website from '@material-ui/icons/Public';
import { Card, CardHeader, CardContent, Typography, CardActions, Button } from '@material-ui/core';

export default class Projects extends Component{
        constructor(props){
                super(props);
                this.state={
                        data: []
                };
        }
        componentDidMount(){
                firebase.database().ref('/Projects').once('value', (snap)=>{
                        if (snap.val())
                        this.setState({
                                data: snap.val()
                        });
                }).catch((err)=>{
                        console.log(err);
                })
        }
        render(){
                return(
                        <div data-aos="" className="projects">
                                {
                                        this.state.data.map((pData, index)=>{
                                                return(
                                                        <Card className="project-card" data-aos="fade-up"  key={`project${index}`} data-aos-offset={5}>
                                                                <CardHeader title={pData.name} subheader={pData.for}/>
                                                                <CardContent style={{paddingTop:0}}>
                                                                       <Typography variant="body1"> {pData.desc}</Typography>
                                                                </CardContent>
                                                                <CardActions>
                                                                        {
                                                                                pData.web?
                                                                                <Button variant="outlined" color="primary" size="small" href={pData.web} target="_blank">
                                                                                        <Website style={{marginRight:5}}/>
                                                                                        View Project
                                                                                </Button>:
                                                                                null
                                                                        }
                                                                        {
                                                                                pData.git?
                                                                                <Button size="small" target="_blank" href={pData.git}>
                                                                                        <Code style={{marginRight:5}}/>
                                                                                        On GitHub
                                                                                </Button>:
                                                                                null
                                                                        }
                                                                </CardActions>
                                                        </Card>
                                                );
                                        })
                                }
                        </div>
                );
        }
}