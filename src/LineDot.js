import React, {Component} from 'react';
import {Card, CardTitle, CardText} from 'material-ui';

class LineDot extends Component {
  constructor(props) {
    super(props);
    this.state={
      events: []
    }
  }
  componentDidMount() {
    this.setState({
      events : this.props.events
    })
  }
  render() {
    return(
      <div id={this.props.id}>
        <div className="line-dot"><h2>{this.props.year}</h2></div>
        {
          this.state.events.map((item, index)=>{
            return (
              <LifeEvent
                key={index}
                alignment = {item.alignment}
                title = {item.title}
                subtitle = {item.subtitle}
                text = {item.text}
              />
            );
          })
        }
      </div>
    );
  }
}

function LifeEvent(props) {
  return (
    <div>
      <div className="down-line-small"></div>
      <div className={props.alignment === 'left' ? 'line-branch-left' : 'line-branch-right' }></div>
      <Card zDepth={0} className={props.alignment === 'left' ? 'event-card-left' : 'event-card-right' }>
        <CardTitle title={props.title} subtitle={props.subtitle} />
        <CardText>
          {props.text}
        </CardText>
      </Card>
      <div className="down-line-small"></div>
    </div>
  );
}

export default LineDot;
