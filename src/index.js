import React from 'react'
import ReactDOM from 'react-dom'
import {Router, Route, IndexRoute, hashHistory} from 'react-router'

import App from './App'
import Display from './Display'
import Content from './Content'

//stylesheet
import './index.css'

//import posts array
import postsArray from './postsArray'

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Display} ></IndexRoute>
      <Route path="view/:id" component={Content} entries={postsArray}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
