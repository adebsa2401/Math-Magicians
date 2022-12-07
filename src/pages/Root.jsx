import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import '../styles/Root.css';

export default class Root extends React.PureComponent {
  render() {
    return (
      <>
        <Header />
        <main>
          <Outlet />
        </main>
      </>
    );
  }
}
