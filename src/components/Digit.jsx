import PropTypes from 'prop-types';
import React from 'react';
import calculate from '../logic/calculate';
import '../styles/Digit.css';

export default class Digit extends React.PureComponent {
  render() {
    const { label, calculatorState, updateState } = this.props;
    const operators = ['÷', 'x', '-', '+', '='];
    let classNames = [];

    if (label === '0') {
      classNames.push('button-0');
    }

    if (operators.includes(label)) {
      classNames.push('button-op');
    }

    classNames = classNames.join(' ');

    return (
      <button
        type="button"
        className={classNames}
        onClick={() => {
          updateState(calculate(calculatorState(), label));
        }}
      >
        { label }
      </button>
    );
  }
}

Digit.propTypes = {
  label: PropTypes.string.isRequired,
  calculatorState: PropTypes.func.isRequired,
  updateState: PropTypes.func.isRequired,
};
