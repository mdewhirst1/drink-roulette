'use strict'

import React from 'react'
import { render } from 'react-dom'
import { Router, Route, hashHistory } from 'react-router'

import Home from './components/home/home.jsx'
import Play from './components/play/play.jsx'
import GameSettings from './components/gameSettings/gameSettings.jsx'

render((
  <Router history={hashHistory}>
    <Route path="/" component={Home} />
    <Route path="/play" component={Play} />
    <Route path="/gameSettings" component={GameSettings} />
  </Router>
), document.getElementById('app'))