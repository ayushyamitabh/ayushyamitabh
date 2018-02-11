import React, {Component} from 'react';
import * as firebase from 'firebase';
import linkedin from './res/linkedin.png';
import './Experience.css';

export default class Experience extends Component{
    constructor(props){
        super(props);
        this.state = {
            my_exps: 'loading'
        }
    }

    componentDidMount(){
        firebase.database().ref('/Experience/').on('value', (snap)=>{
            if (snap.val()){
                this.setState({
                    my_exps: snap.val()
                })
            } else {
                this.setState({
                    my_exps: null
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
                            window.open('https://linkedin.com/in/ayushyamitabh','_blank');
                        }}
                    >
                        <h1 className="section">Experience</h1>
                        <div className="link">
                            <img src={linkedin} />
                        </div>
                    </div>
                </div>
                <div className="right-pane">
                {   
                    this.state.my_exps === 'loading'?
                    <div className="card loading">
                        Loading...just a moment.
                        <br />
                        :)
                    </div>:
                    this.state.my_exps === null?
                    <div className="card error">
                        There was a problem fetching data
                        <br />
                        :(
                    </div>:
                    Object.keys(this.state.my_exps).map((val,ind)=>{
                        return (
                            <div className="card">
                                <h1 className="title">{this.state.my_exps[val].title}</h1>
                                <h3 className="for">{this.state.my_exps[val].comp}</h3>
                                <h3 className="for">{this.state.my_exps[val].from} to {this.state.my_exps[val].to}</h3>                                
                                <p className="desc">{this.state.my_exps[val].desc}</p>
                            </div>
                        )
                    })
                }

                </div>
            </div>
        );
    }
}