import React, { Component } from 'react';
import './App.css';
import LoginView from './LoginView'
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";








const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={LoginView} />
      <Route exact path="/Map" component={Map} />
    </div>
  </Router>
);





export default BasicExample;
