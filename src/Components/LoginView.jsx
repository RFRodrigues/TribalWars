import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
//import  LoginForm from './LoginForm';
//import  RegisterForm  from './RegisterForm';
import { ButtonToolbar, Button } from 'react-bootstrap';

/*  ESTADO QUE ESTAVA ANTES
    this.state = {
      loginShow: false,
      registerShow: false
    };

*/

class LoginView extends Component {

  constructor(props, context) {
    super(props, context);

    this.state = {
    };

    this.handleChange = this.handleChange.bind(this);

  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }


  render() {
    {/*
    let loginClose = () => this.setState({ loginShow: false });
    let registerClose = () => this.setState({ registerShow: false });
    */}
    return (
      <div class="loginView">
        <div class="loginContainer">
          <div class="loginForm">
            <h1 class="gameName">Guerra Tribal</h1>
            <br>
            </br>
            <div class="btnlv">
              <ButtonToolbar>
                <Button onClick={() => this.setState({ smShow: true })}
                  bsSize="large"
                  className="btnLogin"
                  block>
                  
                  <img src={require('./resources/images/login.png')}
                    className="loginImages" />
                  <h4 class="loginicons">Login</h4>
                  
                </Button>
                <Button onClick={() => this.setState({ lgShow: true })}
                  bsSize="large"
                  className="btnRegistar"
                  block>
                  <img src={require('./resources/images/register.png')}
                    className="loginImages" /> <h4 class="loginicons">Registo</h4>
                  
                </Button>
                {/* 
                <LoginForm show={this.state.smShow} onHide={loginClose} />
                <RegisterForm show={this.state.lgShow} onHide={registerClose} />
*/}
              </ButtonToolbar>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginView;
