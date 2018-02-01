import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ContentBlock from '../ContentBlock/ContentBlock';
import ImagePage from '../ImagePage/ImagePage';

// The Roster component matches one of two different routes
// depending on the full pathname
const Content = (props) => (
  <Switch>
    <Route exact path='/content' component={ContentBlock}/>
    <Route path='/content/:id' component={ImagePage}/>
  </Switch>
)


export default Content;
