import React, { Component } from 'react';
import { FormControl, FormGroup, ControlLabel, HelpBlock, Checkbox, Radio, Button, Col, Form, Modal } from 'react-bootstrap';
import './App.css';
import PropTypes from 'prop-types';
import firebase from "firebase";
import CityView from './CityView';
import { Link } from 'react-router-dom'


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

  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      submited: false,
      userPwError: "",
      acctError: ""
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });

  }


  componentWillMount() {

  }




  handleSubmit() {

    this.setState({submited: true}, () => console.log(this.state.submited));

    var db = firebase.database().ref('/Users');
    db.on('value', (snapshot) => {
      var users = snapshot.val();
      for (var user in users) {
        if (users.hasOwnProperty(user)) {
          if (users[user].email || users[user].username === this.state.username) {
            if (users[user].password === this.state.password) {
              window.location = '/cityView';
              break;
            }
            else {
              this.setState({usernameError: "Email/Password não coincidem"});
            }
          }
          else {
            console.log("O utilizador não existe");
          }
        }
      }
    });
  }


  render() {
    return (
      <div className="backdrop">
        <Form horizontal>
          <FormGroup controlId="formHorizontalUsername">
            <Col componentClass={ControlLabel} sm={2}>
              Email/Username
          </Col>
            <Col sm={10}>
              <FormControl name="username" value={this.state.username} onChange={this.handleChange} type="text" placeholder="Email/Username" />
              <span>{this.state.submited && this.state.username == null ? this.state.userPwError: ""}</span>
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
              {<Button onClick={() => this.handleSubmit()}>Sign in</Button>}

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