import React, { Component } from 'react';

class MyComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bug: false
    }
  }

  callMe() {
    this.setState({
      bug: true
    });
  }

  render() {
      if(this.state.bug) {
        throw new  Error("I crashed");
      }
      return (
        <button onClick = {this.callMe.bind(this)} >Click Me</button>
      );
    }
}

export default MyComponent;
