import React, { Component } from 'react';
import PropTypes from 'prop-types';

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends Component {
  static propTypes = {
    scale: PropTypes.string,
    temperature: PropTypes.string,
    onTemperatureChange: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    console.log(props);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    /*eslint react/prop-types: off */
    console.log(this.props.children);
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} onChange={this.handleChange} />
      </fieldset>
    );
  }
}

export default TemperatureInput;
