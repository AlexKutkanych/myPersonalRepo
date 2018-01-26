import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import ContentBlock from '../ContentBlock/ContentBlock';
import User from '../User/User';
import Login from '../Login/Login';
import SignUp from '../SignUp/SignUp';
import '../../App.css';

const Main = () => (
  <main>
      <Switch>
        <Route exact path='/' component={ContentBlock}/>
        <Route path='/user' component={User}/>
        <Route path='/log in' component={Login}/>
        <Route path='/sign up' component={SignUp}/>
      </Switch>
  </main>
);

export default Main;
