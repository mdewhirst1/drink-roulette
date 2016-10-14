'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import Home from './components/home.jsx'
import Play from './components/play/play.jsx'

render((
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="/play" component={Play} />
  </Router>
), document.getElementById('app'))