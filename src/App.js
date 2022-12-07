import React from 'react';
import {
  createRoutesFromElements, createHashRouter, RouterProvider, Route,
} from 'react-router-dom';
import Root from './pages/Root';
import HomePage from './pages/HomePage';
import CalculatorPage from './pages/CalculatorPage';
import QuotePage from './pages/QuotePage';
// import './App.css';

export default class App extends React.PureComponent {
  render() {
    const router = createHashRouter(
      createRoutesFromElements(
        <Route path="/" element={<Root />}>
          <Route path="" element={<HomePage />} />
          <Route path="calculator" element={<CalculatorPage />} />
          <Route path="quote" element={<QuotePage />} />
        </Route>,
      ),
    );

    return (
      <RouterProvider router={router} />
    );
  }
}
