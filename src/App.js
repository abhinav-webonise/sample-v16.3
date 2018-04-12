import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FirstComponent from './firstComponent.js';
import ErrorComponent from './ErrorComponent';
import MyComponent from './MyComponent';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      myName: 'Abhinav',
      smart: true
    }
  }

  // componentWillMount() {
  //   // Deprecated

  //   /*
  //     If you were following the practice to assign props to state here, then start doing it in the constructor.
  //     or If you are following practice to write API calls or to fetch external data in componentWillMount,
  //     change it to componentDidMount lifecycle method.
  //   */
  // }

  componentDidMount() {
    // Use this lifecycle methods for API Calls.

    /*
      There is a common misconception that fetching in componentWillMount lets you avoid the first empty rendering state.
      In practice this was never true because React has always executed render immediately after componentWillMount.
      If the data is not available by the time componentWillMount fires,
      the first render will still show a loading state regardless of where you initiate the fetch.
      This is why moving the fetch to componentDidMount has no perceptible effect in the vast majority of cases.
    */

  }

  // componentWillReceiveProps() {
  //   // Deprecated
  // }

  static getDerivedStateFromProps(newProps, prevState) {
    // New Lifecycle Method
    // It is invoked after a component is instantiated as well as when it receives new props.
    return null;
  }

  componentDidUpdate() {

  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    // New Lifecycle Method
    return null;
  }

  changeSmartness() {
    this.setState({
      smart: !this.state.smart
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React v16.3.x</h1>
        </header>
        <div>
          <FirstComponent
            smart = {this.state.smart}
            myName = {this.state.myName}
            changeSmartness = {this.changeSmartness.bind(this)}
          />
        </div>

        <div>
          <ErrorComponent>
            <MyComponent/>
          </ErrorComponent>
        </div>
      </div>
    );
  }
}

export default App;
