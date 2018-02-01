import React, { Component } from 'react';
import InputBlock from '../InputBlock/InputBlock';
import '../../App.css';

class Login extends Component {
  constructor(props){
    super(props);
    this.state = {
        email: '',
        password: ''
    }
  }

  handleInput = (e) => {
    const target = e.target;
    this.setState({
      ...this.state,
      [target.name]: target.value
    });
  }

  render(){

    return (
        <div className="login-page">
          <section className="login-page__login">
            <h2>Login</h2>
            <form>
              <InputBlock onChange={this.handleInput} id="email-input" label="Email" type="email" name="email" value={this.state.email} placeholder="Enter your email" />
              <InputBlock onChange={this.handleInput} id="password-input" label="Password" type="password" name="password" value={this.state.password} placeholder="Enter your password"  />
              <button>Login</button>
            </form>
          </section>
        </div>
    )
  }
}

export default Login;
