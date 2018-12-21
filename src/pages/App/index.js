import React, { Component } from 'react';
import logo from '../../logo.svg';
import './App.css';

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      value: ''
    }
    this.handleInputChnage = this.handleInputChnage.bind(this)
  }
  handleInputChnage (event) {
    this.setState({
      value: event.target.value.toUpperCase()
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <input value={this.state.value} onChange={this.handleInputChnage} />
        </header>
      </div>
    );
  }
}

export default App;
