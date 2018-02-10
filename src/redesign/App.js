import React, {Component} from 'react';
import './App.css';
import profile from './res/profile.jpg';
import resume from './res/Ayushya Amitabh - Resume.pdf';

export default class App extends Component{
    constructor (props) {
        super(props);
    }
    render() {
        return(
            <div className="page">
                <div className="left-pane">

                </div>
                <div className="right-pane">
                    <div className="imgbox" />
                    <div className="content">
                        <h1 className="name">
                            <span className="first">Ayushya</span>
                            <br />
                            <span className="second">Amitabh</span>
                        </h1>
                        <h2 className="title">
                            B.Sc. in Computer Science &nbsp;•&nbsp; CUNY City College
                        </h2>
                        <h2 className="title">
                            "Genius"/NodeJS Dev &nbsp;•&nbsp; Mobikasa, Inc.
                        </h2>
                        <div className="btn-container">
                            <a href={resume}>
                                <div className="btn-blue">
                                    Resume
                                </div>
                            </a>                            
                            <a href="mailto:ayushyamitabh@gmail.com">
                                <div className="btn-blue">
                                    Contact
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
