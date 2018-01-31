import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Content from '../Content/Content';
import User from '../User/User';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import WelcomePage from '../WelcomePage/WelcomePage';
import '../../App.css';

const Main = () => (
  <main>
      <Switch>
        <Route exact path='/' component={WelcomePage}/>
        <Route path='/Content' component={Content}/>
        <Route path='/user' component={User}/>
        <Route path='/log in' component={Login}/>
        <Route path='/sign up' component={SignUp}/>
      </Switch>
  </main>
);

export default Main;
