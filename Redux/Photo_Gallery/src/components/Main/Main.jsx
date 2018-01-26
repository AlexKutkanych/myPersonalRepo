import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import App from '../../App';
import User from '../User/User';
import Login from '../Login/Login';
import '../../App.css';

const Main = () => (
  <main>
      <Switch>
        <Route exact path='/' component={Login}/>
        <Route path='/user' component={User}/>
        <Route path='/login' component={Login}/>
      </Switch>
  </main>
);

export default Main;
