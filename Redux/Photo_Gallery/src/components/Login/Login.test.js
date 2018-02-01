import React, { Component } from 'react';
import { shallow, configure } from 'enzyme';
import '../../setupTests';
import Login from './Login';

describe('<Login />', () => {
  it('renders submit button', () => {
    const login = shallow(<Login />);
    expect(login.find('button').length).toEqual(1);
  });

  it('renders <InputBlock />', () => {
    const login = shallow(<Login />);
    expect(login.find('InputBlock').length).toEqual(2);
  });

  it('renders a email input', () => {
    const login = shallow(<Login />);

    login.childAt(0).find('#email-input').simulate('change', {target: {name: 'email', value: 'blah@gmail.com'}});
    expect(login.state().email).toEqual('blah@gmail.com');
  })
})
