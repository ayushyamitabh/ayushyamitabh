import React, {Component} from 'react';
import * as firebase from 'firebase';
import { Card, CardHeader, CardContent, Typography } from '@material-ui/core';

export default class Experience extends Component{
        constructor(props){
                super(props);
                this.state = {
                        data: []
                };
        }
        componentDidMount() {
                firebase.database().ref('/Experience').once('value', (snap)=>{
                        if (snap.val())
                        this.setState({
                                data: snap.val()
                        })
                })
        }
        render(){
                return(
                        <div data-aos="" className="experience">
                                {
                                        this.state.data.map((data, index)=>{
                                                var description = [];
                                                if (data.desc) description = data.desc.split("\n");
                                                return(
                                                        <Card key={`exp${index}`} className="exp-card" data-aos="fade-up" data-aos-offset={5}>
                                                                <CardHeader title={data.comp} subheader={<span><strong>{data.title}</strong><br />{data.from} to {data.to}</span> } />
                                                                <CardContent style={{paddingTop: 0}}>
                                                                        {
                                                                                description.map((descPart,dIndex)=>{
                                                                                        return(
                                                                                                <Typography key={`desc-${index}-${dIndex}`} variant="body1"> {descPart}</Typography>
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