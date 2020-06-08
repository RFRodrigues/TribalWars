import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import ForgotPassword from "./ForgotPassword";
import { ButtonToolbar, toggleModal } from "react-bootstrap";
import PubSub from "pubsub-js";
import "antd/dist/antd.css";
import { Modal, Button } from "antd";

class LoginView extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { open: false, login: false, register: false };
    this.handleChange = this.handleChange.bind(this);
  }


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  onCloseModal = () => {
    this.setState({ open: false}, () => this.resetModals());
  };

  resetModals = () => {
    this.setState({login: false, register: false});
  }

  render() {
    const { open } = this.state;

    return (
      <div className="loginView">
        <div className="loginContainer">
          <div className="loginForm">
            <h1 className="gameName">Guerra Tribal</h1>
            <div className="btnlv">
              <Button
                onClick={() => this.setState({ open: true, login: true })}
              >
                  <img
                    src={require("./resources/images/login.png")}
                    className="loginImages"
                  />
                  Login
              </Button>
              <Button
                onClick={() => this.setState({ open: true, register: true })}
              >
                <img
                  src={require("./resources/images/register.png")}
                  className="loginImages"
                />{" "}
                Registo
              </Button>
              <Modal
                title={this.state.register ? "Registar" : "Login"}
                visible={open}
                onCancel={this.onCloseModal}
                footer={null}
              >
                {this.state.login ? <LoginForm /> : <RegisterForm />}
              </Modal>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginView;
