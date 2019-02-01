import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { Grid, Row, Col, Table, Dropdown, MenuItem, Panel, Modal, Button, FormGroup, Form, ControlLabel, FormControl } from 'react-bootstrap';
import Building from './Building';



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

  componentWillMount(){
    localStorage.setItem('EdificioPrincipal', require("./resources/images/Main1.png"));
  }

  render() {

    return (
      <div id="cityView">
        <div id="city">
          <Building nivel={10} nome={"EdificioPrincipal"}/>
          <Building nivel={2} nome={"Quartel"} />
        </div>
      </div>
    );
  }
}

export default CityView;
