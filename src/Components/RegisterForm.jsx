import React, { Component } from "react";
import {
  FormControl,
  FormGroup,
  ControlLabel,
  HelpBlock,
  Checkbox,
  Radio,
  Col,
  Form,
  Modal,
} from "react-bootstrap";
import { Button, Input } from "antd";
import "./App.css";
import PropTypes from "prop-types";
import firebase from "firebase";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Label } from "reactstrap";

class RegisterForm extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.state = {
      nickname: "",
      email: "",
      password: "",
      passwordConfirm: "",
      emailError: false,
      nicknameError: false,
    };

    this.handleChange = this.handleChange.bind(this);
    this.verifyPasswords = this.verifyPasswords.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  componentWillMount() {}

  handleSubmit() {
    if (this.verifyPasswords()) {
      var db = firebase.database().ref("/Users");
      db.once("value", (snapshot) => {
        var users = snapshot.val();
        if (users != null) {
          for (var user in users) {
            if (users.hasOwnProperty(user)) {
              if (
                users[user].email === this.state.email ||
                users[user].username === this.state.nickname
              ) {
                toast.error("Email ou Nickname já existem!");
                return;
              }
            }
          }
        }
        firebase.database().ref("/Users").push({
          userID: 1,
          username: this.state.nickname,
          email: this.state.email,
          password: this.state.password,
        });
        //toast.success("Registo efetuado com sucesso!");
        window.location = "/cityView";
      });
    }

    const template = "template_H0XAbhaM";

    /*this.sendFeedback(
      template,
      this.state.nickname,
      "hello")*/
  }

  sendFeedback(templateId, receiverEmail, message) {
    window.emailjs
      .send("gmail", templateId, {
        receiverEmail,
        message,
      })
      .catch((err) => console.error("Failed to send feedback. Error: ", err));
  }

  verifyPasswords() {
    if (
      this.state.password === this.state.passwordConfirm &&
      this.state.password != ""
    ) {
      return true;
    }
    return false;
  }

  render() {
    return (
      <div className="backdrop">
        <ToastContainer />
        <Form horizontal>
          <FormGroup controlId="formHorizontalNickName">
            <Col sm={10}>
              <Label componentClass={ControlLabel}>Nickname</Label>
              <Input
                name="nickname"
                value={this.state.nickname}
                onChange={this.handleChange}
                type="text"
                placeholder="Nickname"
              />
              <span className="error">
                {this.state.submited && this.state.nicknameError
                  ? "Nome de utilizador inválido"
                  : ""}
              </span>
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalEmail">
            <Col sm={10}>
              <Label componentClass={ControlLabel}>Email</Label>
              <Input
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                type="email"
                placeholder="Email"
              />
              <span className="error">
                {this.state.submited && this.state.emailError
                  ? "Email de utilizador inválido"
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
                  ? "Password de utilizador inválido"
                  : ""}
              </span>
            </Col>
          </FormGroup>
          <FormGroup controlId="formHorizontalPasswordConfirm">
            <Col sm={10}>
              <Label componentClass={ControlLabel}>Confirm Password</Label>
              <Input
                name="passwordConfirm"
                value={this.state.passwordConfirm}
                onChange={this.handleChange}
                type="password"
                placeholder="Confirme a password"
              />
              <span className="error">
                {this.state.submited && this.state.passwordConfirm == ""
                  ? "Password de utilizador inválido"
                  : ""}
              </span>
            </Col>
          </FormGroup>
          <FormGroup>
            <Col sm={10}>
              <Button onClick={() => this.handleSubmit()}>
                Create Account
              </Button>
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

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  show: PropTypes.bool,
  children: PropTypes.node,
};

export default RegisterForm;
