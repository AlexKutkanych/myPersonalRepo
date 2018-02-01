import React, { Component } from 'react';
import InputBlock from '../InputBlock/InputBlock';
import '../../App.css';

class Login extends Component {
  render(){

    return (
        <div className="login-page">
          <section className="login-page__login">
            <h2>Login</h2>
            <form>
              <InputBlock id="email-input" label="Email" placeholder="Enter your email"/>
              <InputBlock id="password-input" label="Password" placeholder="Enter your password"/>
              <button>Login</button>
            </form>
          </section>
        </div>
    )
  }
}

export default Login;
