import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import firebase from "firebase";
import { Grid, Row, Col, Table, Dropdown, MenuItem, Panel, Modal, Button, FormGroup, Form, ControlLabel, FormControl } from 'react-bootstrap';



class ForgotPassword extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
      username: "",
      oldpassword: "",
      newpassword: "",
      repeatNewPassword: ""
    };
    
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentWillMount() {
  }

  handleSubmit() {
  }

  checkPasswords() {
    var db = firebase.database().ref('/Users');
    db.once('value', (snapshot) => {
      var users = snapshot.val();

      for (var user in users) {
        if (users.hasOwnProperty(user)) {
          if (users[user].email || users[user].username === this.state.username) {
            if (users[user].password === this.state.oldPassword && this.state.newpassword === this.state.repeatNewPassword) {
              return true;
            }
            else { return false };
          }
        }
      }
    });
  }



  render() {
    return (
      <div >
        <Form horizontal>
          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={5}>
              Old Password
            </Col>
            <Col sm={10}>
              <FormControl name="oldPassword" value={this.state.oldpassword} onChange={this.handleChange} type="password" placeholder="Old Password" />
              <span className="error">{this.state.submited && this.state.oldpassword == "" ? "Password inválida" : ""}</span>
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={5}>
              New Password
            </Col>
            <Col sm={10}>
              <FormControl name="newPassword" value={this.state.newpassword} onChange={this.handleChange} type="password" placeholder="New Password" />
              <span className="error">{this.state.submited && this.state.newpassword == "" ? "Password inválida" : ""}</span>
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalPassword">
            <Col componentClass={ControlLabel} sm={5}>
              Repeat New Password
            </Col>
            <Col sm={10}>
              <FormControl name="repeatNewPassword" value={this.state.repeatNewPassword} onChange={this.handleChange} type="password" placeholder="Repeat New Password" />
              <span className="error">{this.state.submited && this.state.repeatNewPassword == "" ? "Password inválida" : ""}</span>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col smOffset={2} sm={10}>
              <Button onClick={() => this.handleSubmit()}>Save New Password</Button>
            </Col>
          </FormGroup>
        </Form>

      </div>
    );
  }
}

export default ForgotPassword;
