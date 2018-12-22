import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import  LoginForm from './LoginForm';
import  RegisterForm  from './RegisterForm';
import { ButtonToolbar, Button, toggleModal } from 'react-bootstrap';

class LoginView extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = { isOpen: false };
    this.handleChange = this.handleChange.bind(this);
  }

  toggleModal = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }


  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  render() {    
    return (
      <div className="loginView">
        <div className="loginContainer">
          <div className="loginForm">
            <h1 className="gameName">Guerra Tribal</h1>
            <br>
            </br>
            <div className="btnlv">
              <ButtonToolbar>
                <Button onClick={this.toggleModal}
                  bsSize="large"
                  className="btnLogin"
                  block>
                  
                  <img src={require('./resources/images/login.png')}
                    className="loginImages" />
                  <h4 className="loginicons">Login</h4>
                  
                </Button>
                <Button onClick={() => this.setState({ registerShow: true })}
                  bsSize="large"
                  className="btnRegistar"
                  block>
                  <img src={require('./resources/images/register.png')}
                    className="loginImages" /> <h4 className="loginicons">Registo</h4>
                </Button>
              </ButtonToolbar>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginView;
