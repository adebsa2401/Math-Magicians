import React from 'react';
import Digit from './Digit';
import '../styles/Calculator.css';

export default class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      total: null,
      next: null,
      operation: null,
    };

    this.updateState = this.updateState.bind(this);
    this.getState = this.getState.bind(this);
  }

  getState = () => this.state;

  updateState = (newState) => {
    this.setState((previousState) => (
      { ...previousState, ...newState }
    ));
  };

  getDisplay = () => {
    const { total, next } = this.state;

    if (next) {
      return next;
    }

    if (total) {
      return total;
    }

    return '0';
  };

  render() {
    const labels = [
      'AC', '+/-', '%', '÷',
      '7', '8', '9', 'x',
      '4', '5', '6', '-',
      '1', '2', '3', '+',
      '0', '.', '=',
    ];

    return (
      <div className="calculator">
        <span className="display">{this.getDisplay()}</span>
        <div className="button-grid">
          { labels.map((label) => (
            <Digit
              key={label}
              label={label}
              calculatorState={this.getState}
              updateState={this.updateState}
            />
          )) }
        </div>
      </div>
    );
  }
}
