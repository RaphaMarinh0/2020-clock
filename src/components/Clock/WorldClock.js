import React from 'react';

class WorldClock extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        date: new Date()
      };
    }
    componentDidMount() {
      this.timerID = setInterval(
        () => this.tick(),
        1000
      );
    }
  
    tick() {
      this.setState({
        date: new Date()
      });
      this.state = {date: new Date};
    }
  
    render() {
      let {date}= this.state;
      return (
        <div>
          <h2>World's clock is {date.toLocaleTimeString()}.</h2>
        </div>
      );
    }
}
export default WorldClock