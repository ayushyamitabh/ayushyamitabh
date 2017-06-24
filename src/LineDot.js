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
    console.log(this.props.events);
    this.setState({
      events : this.props.events
    })
  }
  render() {
    return(
      <div>
        <div className="down-line"></div>
        <div className="down-line"></div>
        <div className="line-dot"><h2>{this.props.year}</h2></div>
        {
          this.state.events.map((item, index)=>{
            console.log(item);
            console.log(item.alignment);
            return (
              <LineDot
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
      <Card className={props.alignment === 'left' ? 'event-card-left' : 'event-card-right' }>
        <CardTitle title={props.title} subtitle={props.subtitle} />
        <CardText>
          {props.text}
        </CardText>
      </Card>
    </div>
  );
}

export default LineDot;
