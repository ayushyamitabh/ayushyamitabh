import React, {Component} from 'react';
import * as firebase from 'firebase';
import git from './res/github.png';
import './Projects.css';

export default class Projects extends Component{
    constructor(props){
        super(props);
        this.state = {
            my_projects: 'loading'
        }
    }

    componentDidMount(){
        firebase.database().ref('/Projects/').on('value', (snap)=>{
            if (snap.val()){
                this.setState({
                    my_projects: snap.val()
                })
            } else {
                this.setState({
                    my_projects: null
                })
            }
        })
    }

    render() {
        return (
            <div className="page">
                <div className="left-pane">
                    <div className="card section"
                        onClick={()=>{
                            window.open('https://github.com/ayushyamitabh','_blank');
                        }}
                    >
                        <h1 className="section">Projects</h1>
                        <div className="link">
                            <img src={git} />
                        </div>
                    </div>
                </div>
                <div className="right-pane">
                {   
                    this.state.my_projects === 'loading'?
                    <div className="card loading">
                        Loading...just a moment.
                        <br />
                        :)
                    </div>:
                    this.state.my_projects === null?
                    <div className="card error">
                        There was a problem fetching data
                        <br />
                        :(
                    </div>:
                    Object.keys(this.state.my_projects).map((val,ind)=>{
                        return (
                            <div className="card">
                                <h1 className="title">{this.state.my_projects[val].name}</h1>
                                <h3 className="for">{this.state.my_projects[val].for}</h3>
                                <p className="desc">{this.state.my_projects[val].desc}</p>
                            </div>
                        )
                    })
                }

                </div>
            </div>
        );
    }
}