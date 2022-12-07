import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

export default class Header extends React.PureComponent {
  render() {
    return (
      <header>
        <h1>Math Magicians</h1>
        <nav>
          <Link to="/" className="active">Home</Link>
          <Link to="calculator">Calculator</Link>
          <Link to="quote">Quote</Link>
        </nav>
      </header>
    );
  }
}
