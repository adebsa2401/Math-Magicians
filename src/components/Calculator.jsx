import React from 'react';
import Digit from './Digit';
import '../styles/Calculator.css';

export default class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      display: '0',
    };
  }

  render() {
    const labels = [
      'AC', '+/-', '%', '÷',
      '7', '8', '9', 'x',
      '4', '5', '6', '-',
      '1', '2', '3', '+',
      '0', '.', '=',
    ];

    const { display } = this.state;

    return (
      <div className="calculator">
        <span className="display">{display}</span>
        <div className="button-grid">
          { labels.map((label) => <Digit key={label} label={label} />) }
        </div>
      </div>
    );
  }
}
