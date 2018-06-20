import React, { Component } from 'react';
import * as firebase from 'firebase';
import { 
         Card, 
         CardContent,
         Chip,
         Typography }from '@material-ui/core';

export default class Timeline extends Component {
    constructor (props) {
        super(props);
        this.state = {
            Events: null
        };
    }
    componentDidMount () {
        firebase.database().ref('/Events').on('value', (snap)=> {
            if (snap.val()) {
                this.setState({
                    Events: snap.val()
                })
            }
        })
    }
    render () {
        return (
            <div className="timeline-container" data-aos="slide-up">
            {   this.state.Events ?
                    Object.keys(this.state.Events).map ( (key, index) => {
                        return (
                            <div key={`${key}-events`} className="year-container"  data-aos="slide-up" data-aos-offset={5}>
                                <Chip label={key} className="year-chip" data-aos-offset={5} />
                                {
                                    Object.keys(this.state.Events[key]).map ( (eventKey, eventIndex) =>{
                                        return (
                                            <Card key={eventKey} className={"event-card " + (index % 2 === 0 ? "right" : "")} data-aos={index%2===0?"fade-left":"fade-right"} data-aos-offset={5}>
                                                <CardContent> 
                                                    <Typography variant="headline" component="h2">
                                                        {this.state.Events[key][eventKey].date}
                                                    </Typography>
                                                    <Typography style={{color:'darkgray'}}>
                                                        {
                                                            this.state.Events[key][eventKey].type === 'flight' ? '✈'  :
                                                            this.state.Events[key][eventKey].type === 'school' ? `📚` :
                                                            null
                                                        }
                                                        &nbsp;
                                                        {this.state.Events[key][eventKey].sub}
                                                    </Typography>
                                                    <Typography component="p">
                                                        {this.state.Events[key][eventKey].desc}
                                                    </Typography>
                                                </CardContent>
                                            </Card>
                                        );
                                    })
                                }
                            </div>
                        );
                    }) :
                    null
                }
            </div>
        );
    }
}