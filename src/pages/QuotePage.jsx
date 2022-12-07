import React from 'react';
import '../styles/QuotePage.css';

export default class QuotePage extends React.PureComponent {
  render() {
    return (
      <div className="quote-main">
        <p className="quote">
          Mathematics is not about numbers, equations, computations, or algorithms:
          it&apos;s about understanding.
          <span className="author">–William Paul Thurston</span>
        </p>
      </div>
    );
  }
}
