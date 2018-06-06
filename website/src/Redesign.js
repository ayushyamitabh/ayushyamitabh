import React, {Component} from 'react';
import * as firebase from 'firebase';
import {CircularProgress} from 'material-ui';
import './Redesign.css';

export default class Redesign extends Component {
        constructor(props) {
                super(props);
                this.state={
                        loading: false,
                        projects: null,
                        skills: null,
                        experience: null
                };
        }
        componentDidMount() {
                firebase.database().ref(`Projects`).once('value', (projsnap)=>{
                        if (projsnap.val()) {
                                this.setState({
                                        projects: projsnap.val(),
                                        loading:false
                                })
                        }
                })
                firebase.database().ref(`Skills`).once('value', (skillsnap)=>{
                        if (skillsnap.val()) {
                                this.setState({
                                        skills: skillsnap.val(),
                                        loading:false
                                })
                        }
                })
                firebase.database().ref(`Experience`).once('value', (expsnap)=>{
                        if (expsnap.val()) {
                                this.setState({
                                        experience: expsnap.val(),
                                        loading:false
                                })
                        }
                })
        }
        render() {
                return(
                        <div className="App" >
                                
                        </div>
                );
        }
}