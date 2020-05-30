import React, { Component } from "react";
import {
  FormControl,
  FormGroup,
  ControlLabel,
  HelpBlock,
  Checkbox,
  Radio,
  Button,
  Col,
  Form,
  Modal,
} from "react-bootstrap";
import "./App.css";
import PropTypes from "prop-types";
import firebase from "firebase";
import CityView from "./CityView";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PubSub from "pubsub-js";

var config = {
  apiKey: "AIzaSyBbGn-CM2XXJAmhkTERlsGDRyYryij9D4g",
  authDomain: "tribalwars-15493.firebaseapp.com",
  databaseURL: "https://tribalwars-15493.firebaseio.com",
  projectId: "tribalwars-15493",
  storageBucket: "tribalwars-15493.appspot.com",
  messagingSenderId: "1009323283348",
};
firebase.initializeApp(config);

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: "",
      password: "",
      submited: false,
      teste: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggleRecover = this.toggleRecover.bind(this);
    this.handleRecover = this.handleRecover.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value, submited: false });
  }

  componentWillMount() {}

  //needs fix (toast tem que ser fora do ciclo)
  handleSubmit() {
    var error = "";

    this.setState({ submited: true });

    var db = firebase.database().ref("/Users");
    db.once("value", (snapshot) => {
      var users = snapshot.val();

      for (var user in users) {
        if (users.hasOwnProperty(user)) {
          if (
            users[user].email ||
            users[user].username === this.state.username
          ) {
            if (users[user].password === this.state.password) {
              window.location = "/cityView";
              break;
            } else {
              error = "Email/Password não coincidem";
            }
          }
        }
        toast.error(error);
      }
    });
  }

  toggleRecover() {
    this.setState({ teste: true });
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
    if (this.state.teste) {
      console.log(this.state.teste);
      return (
        <div className="backdrop">
          <ToastContainer />
          <Form horizontal>
            <FormGroup controlId="formHorizontalUsername">
              <Col componentClass={ControlLabel}>Email/Username</Col>
              <Col sm={10}>
                <FormControl
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
              <Col smOffset={2} sm={10}>
                <Button onClick={() => this.handleRecover()}>Send Email</Button>
              </Col>
            </FormGroup>
          </Form>
        </div>
      );
    } else {
      console.log(this.state.teste);
      return (
        <div className="backdrop">
          <ToastContainer />
          <Form horizontal>
            <FormGroup controlId="formHorizontalUsername">
              <Col componentClass={ControlLabel}>Email/Username</Col>
              <Col sm={10}>
                <FormControl
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
              <Col componentClass={ControlLabel}>Password</Col>
              <Col sm={10}>
                <FormControl
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
