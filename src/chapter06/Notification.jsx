import React from "react";
import "./Notification.css";

class Notification extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    console.log(`${this.props.id} componentDidMount() called.`);
  }

  componentDidUpadate() {
    console.log(`${this.props.id} componentDidUpdate() called.`);
  }

  componentWillMount() {
    console.log(`${this.props.id} componentWillMount() called.`);
  }

  render() {
    return (
      <div className="wrapper">
        <span className="messageText">{this.props.message}</span>
      </div>
    );
  }
}

export default Notification;
