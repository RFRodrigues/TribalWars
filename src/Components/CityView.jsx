import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Grid, Row, Col, Table, Dropdown, MenuItem, Panel, Modal, Button, FormGroup, Form, ControlLabel, FormControl } from 'react-bootstrap';



class CityView extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {

    };

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  










  render() {

    return (
      <div id="city">
      
      </div>
    );
  }
}

export default CityView;
