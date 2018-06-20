import React, {Component} from 'react';
import * as firebase from 'firebase';
import { Card, CardHeader, CardContent, Chip } from '@material-ui/core';

export default class Skills extends Component{
        constructor(props){
                super(props);
                this.state = {
                        data: ''
                };
        }
        componentDidMount() {
                firebase.database().ref('/Skills').once('value', (snap)=>{
                        if (snap.val()){
                                this.setState({
                                        data: snap.val()
                                })
                        }
                })
        }
        render(){
                return(
                        <div data-aos="slide-up" className="skills">
                                {
                                        Object.keys(this.state.data).map((key, index)=>{
                                                return(
                                                        <Card key={`skill${index}`} className="skill-section" data-aos="fade-up" data-aos-delay={50*index} data-aos-offset={5}>
                                                                <CardHeader title={key}/>
                                                                <CardContent style={{padding: '0px 20px 14px 20px'}}>
                                                                        {
                                                                                this.state.data[key].map((data, sIndex)=>{
                                                                                        return(
                                                                                                <Chip label={data} key={`${key}-${sIndex}`} className="skill-item" data-aos="fade-left" data-aos-delay={10*index} data-aos-offset={5}/>
                                                                                        );
                                                                                })
                                                                        }
                                                                </CardContent>
                                                        </Card>
                                                );
                                        })
                                }
                        </div>
                );
        }
}