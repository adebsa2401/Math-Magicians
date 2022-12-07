import React from 'react';
import Calculator from '../components/Calculator';
import '../styles/CalculatorPage.css';

export default class CalculatorPage extends React.PureComponent {
  render() {
    return (
      <div className="calculator-main">
        <h2>Let&apos;s do some math!</h2>
        <Calculator />
      </div>
    );
  }
}
