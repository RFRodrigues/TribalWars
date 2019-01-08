import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Col, Form, Modal } from 'react-bootstrap';
import './App.css';
import PropTypes from 'prop-types';
import firebase from "firebase";
import CityView from './CityView';

var config = {
  apiKey: "AIzaSyBbGn-CM2XXJAmhkTERlsGDRyYryij9D4g",
  authDomain: "tribalwars-15493.firebaseapp.com",
  databaseURL: "https://tribalwars-15493.firebaseio.com",
  projectId: "tribalwars-15493",
  storageBucket: "tribalwars-15493.appspot.com",
  messagingSenderId: "1009323283348"
};
firebase.initializeApp(config);




class LoginForm extends React.Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      email: "",
      password: ""
    };

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });

  }


  componentWillMount() {

  }




  handleSubmit() {

    this.verifyUser();

  }


  //verifca se o utilizador existe e se a password coincide com o email
  verifyUser() {

    

    var db = firebase.database().ref('/');
    db.on('value', (snapshot) => {
      var users = snapshot.val();
      for (var i = 0; i < users.length; i++) {
        if (users[i].Username === this.state.email) {
          if (users[i].Password === this.state.password) {
            console.log("Dados corretos -> Login");
            return <CityView/>;
          }
          else {
            console.log("Email/Password não coincidem");
            return;
          }
        }
        else {
          console.log("O utilizador não existe");
        }
      }
    });
  }



  render() {
    return (
      <div className="backdrop">
        <Form horizontal>
          <FormGroup controlId="formHorizontalEmail">
            <Col componentClass={ControlLabel} sm={2}>
              Email
          </Col>
            <Col sm={10}>
              <FormControl name="email" value={this.state.email} onChange={this.handleChange} type="email" placeholder="Email" />
            </Col>
          </FormGroup>

          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={2}>
              Password
          </Col>
            <Col sm={10}>
              <FormControl name="password" value={this.state.password} onChange={this.handleChange} type="password" placeholder="Password" />
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Checkbox>Remember me</Checkbox>
            </Col>
          </FormGroup>

          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button onClick={() => this.handleSubmit()}>Sign in</Button>
            </Col>
          </FormGroup>
        </Form>


        <div className="modal">
          {this.props.children}

          <div className="footer">

          </div>
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node
};

export default LoginForm