import React, { Component } from 'react';
import { Button, Modal } from 'react-bootstrap';
import './App.css';

class RegisterForm extends React.Component {
    render() {
      return (
        <Modal
          {...this.props}
          bsSize="large"
          aria-labelledby="contained-modal-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="contained-modal-title-sm">Registo</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.onHide}>Close</Button>
          </Modal.Footer>
        </Modal>
      );
    }
  }

export default RegisterForm