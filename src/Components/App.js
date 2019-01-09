import React, { Component } from 'react';
import './App.css';
import LoginView from './LoginView';
import CityView from './CityView';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";








const BasicExample = () => (
  <Router>
    <div>
      <Route exact path="/" component={LoginView} />
      <Route path="/Map" component={Map} />
      <Route path="/CityView" component={CityView} />
    </div>
  </Router>
);





export default BasicExample;
