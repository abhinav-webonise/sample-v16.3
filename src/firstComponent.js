import React, { Component } from 'react';

class FirstComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myName: this.props.myName,
      smart: this.props.smart
    }
  }

  componentDidMount() {
    
  }

  static getDerivedStateFromProps(newProps, prevState) {
    // New Lifecycle Method
    // It is invoked after a component is instantiated as well as when it receives new props.
    return ({
      myName: newProps.myName,
      smart: newProps.smart
    })
  }

  render() {
    return (
      <div>
       Hi! Look at {this.state.myName}. He is very {this.state.smart ? 'smart': 'cool'}.
        <div>
          <input type = "button" value = "Change" onClick = {this.props.changeSmartness}/>
        </div>  
      </div>
    );
  }
}

export default FirstComponent;