import React, { Component } from 'react';
import './App.css';
import LoginView from './LoginView';
import CityView from './CityView';
import 'bootstrap/dist/css/bootstrap.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ForgotPassword from './ForgotPassword';








const AppRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={LoginView} />
      <Route path="/Map" component={Map} />
      <Route path="/CityView" component={CityView} />
      <Route path="/ForgotPassword" component={ForgotPassword} />
    </div>
  </Router>
);





export default AppRouter;
