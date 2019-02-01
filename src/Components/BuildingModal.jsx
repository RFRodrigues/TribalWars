import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Col, Form, Modal } from 'react-bootstrap';
import './App.css';
import PropTypes from 'prop-types';
import CityView from './CityView';
import { Link } from 'react-router-dom'






class BuildingModal extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {

    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }



  handleSubmit() {
    this.verifyUser();
  }


  render() {
    return (
      <div className="backdrop">
        
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default BuildingModal