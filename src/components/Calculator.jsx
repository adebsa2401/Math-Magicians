import { useState } from 'react';
import Digit from './Digit';
import '../styles/Calculator.css';

const updateState = (newState, setState) => {
  setState((previousState) => (
    { ...previousState, ...newState }
  ));
};

const getDisplay = ({ total, next }) => {
  // const { total, next } = state;

  if (next) {
    return next;
  }

  if (total) {
    return total;
  }

  return '0';
};

export default function Calculator() {
  const labels = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];

  const [state, setState] = useState({
    total: null,
    next: null,
    operation: null,
  });

  return (
    <div className="calculator">
      <span className="display">{getDisplay(state)}</span>
      <div className="button-grid">
        { labels.map((label) => (
          <Digit
            key={label}
            label={label}
            calculatorState={() => state}
            updateState={(state) => updateState(state, setState)}
          />
        )) }
      </div>
    </div>
  );
}
