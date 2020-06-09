import React, { Component } from "react";
import {
  FormControl,
  FormGroup,
  ControlLabel,
  HelpBlock,
  Radio,
  Col,
  Form,
  Modal,
} from "react-bootstrap";
import { Button, Input, Checkbox } from "antd";
import "./App.css";
import PropTypes from "prop-types";
import firebase from "firebase";
import CityView from "./CityView";
import { Link, useHistory, Redirect  } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PubSub from "pubsub-js";
import { Label } from "reactstrap";
import axios from "axios";

var firebaseConfig = {
  apiKey: "AIzaSyBbGn-CM2XXJAmhkTERlsGDRyYryij9D4g",
  authDomain: "tribalwars-15493.firebaseapp.com",
  databaseURL: "https://tribalwars-15493.firebaseio.com",
  projectId: "tribalwars-15493",
  storageBucket: "tribalwars-15493.appspot.com",
  messagingSenderId: "1009323283348",
  appId: "1:1009323283348:web:465fb1bed784908d33f581",
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      submited: false,
      recover: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggleRecover = this.toggleRecover.bind(this);
    this.handleRecover = this.handleRecover.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value, submited: false });
  }

  componentWillMount() {}

  handleSubmit() {
    var error = "";
    this.setState({ submited: true });

    fetch("http://localhost:5000/api/usersinfo/", { mode: "cors" })
      .then((response) => response.json())
      .then((users) => {
        console.log(users);
        for (var user in users) {
          if (users.hasOwnProperty(user)) {
            if (
              users[user].userinfo.email ||
              users[user].userinfo.username === this.state.username
            ) {
              if (users[user].userinfo.password === this.state.password) {
                window.location = "/cityView";
                localStorage.setItem("loggedUsername", this.state.username);
                break;
              } else {
                error = "Email/Password não coincidem";
              }
            }
          }
          toast.error(error);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }

  toggleRecover() {
    this.setState({ recover: true });
  }

  handleRecover() {
    const template = "template_H0XAbhaM";

    /*this.sendFeedback(
      template,
      this.state.nickname,
      this.generateLink())*/
  }

  sendFeedback(templateId, receiverEmail, message) {
    window.emailjs
      .send("gmail", templateId, {
        receiverEmail,
        message,
      })
      .catch((err) => console.error("Failed to send feedback. Error: ", err));
  }

  generateLink() {
    return window.location.href + "/ForgotPassword";
  }

  render() {
    if (this.state.recover) {
      return (
        <div className="backdrop">
          <ToastContainer />
          <Form horizontal>
            <FormGroup controlId="formHorizontalUsername">
              <Col sm={10}>
                <Label componentClass={ControlLabel}>Email/Username</Label>
                <Input
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Email/Username"
                />
                <span className="error">
                  {this.state.submited && this.state.username == ""
                    ? "Nome de utilizador inválido"
                    : ""}
                </span>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={10}>
                <Button onClick={() => this.handleRecover()}>Send Email</Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      );
    } else {
      return (
        <div className="backdrop">
          <ToastContainer />
          <Form horizontal>
            <FormGroup controlId="formHorizontalUsername">
              <Col sm={10}>
                <Label componentClass={ControlLabel}>Email/Username</Label>
                <Input
                  name="username"
                  value={this.state.username}
                  onChange={this.handleChange}
                  type="text"
                  placeholder="Email/Username"
                />
                <span className="error">
                  {this.state.submited && this.state.username == ""
                    ? "Nome de utilizador inválido"
                    : ""}
                </span>
              </Col>
            </FormGroup>
            <FormGroup controlId="formHorizontalPassword">
              <Col sm={10}>
                <Label componentClass={ControlLabel}>Password</Label>
                <Input
                  name="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                  type="password"
                  placeholder="Password"
                />
                <span className="error">
                  {this.state.submited && this.state.password == ""
                    ? "Password inválida"
                    : ""}
                </span>
                <span className="fake-link" onClick={this.toggleRecover}>
                  Forgot Password
                </span>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={10}>
                <Checkbox>Remember me</Checkbox>
              </Col>
            </FormGroup>
            <FormGroup>
              <Col sm={10}>
                <Button onClick={() => this.handleSubmit()}>Sign in</Button>
              </Col>
            </FormGroup>
          </Form>
          <div className="modal">
            {this.props.children}
            <div className="footer"></div>
          </div>
        </div>
      );
    }
  }
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
};

export default LoginForm;
