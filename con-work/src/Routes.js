import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/dashboard';
import AllSubmissions from './pages/all-sumbission';

const Main = (props) => {

  return (
    <div>
      <Router history={props.history}>
        <div>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/all-submission" element={<AllSubmissions />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default Main;
