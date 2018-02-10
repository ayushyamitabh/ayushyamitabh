import React, {Component} from 'react';
import './App.css';
import * as firebase from 'firebase';

export default class App extends Component{
    constructor (props) {
        super(props);
    }
    render() {
        return(
            <div className="page">
                <div className="hor-flex-box">
                    <div className="ver-flex-box">
                        <div className="test-box" />
                        <div className="test-box2" />
                        <div className="test-box" />
                    </div>
                    <div className="ver-divider" />                    
                    <div className="ver-flex-box">
                        <div className="test-box" />
                        <div className="test-box" />
                        <div className="test-box" />
                    </div>
                </div>
            </div>
        )
    }
}