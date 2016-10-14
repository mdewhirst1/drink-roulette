import React, { Component } from 'react'

import Btn from '../general/button.jsx';
import Nav from '../general/nav.jsx';

import Wheel from './wheel.jsx';
import Players from './players.jsx';

export default class Play extends Component{
	render () {
		return (
			<div>
				<h1>Play</h1>
				<Nav />
				<Players />
				<Btn value="play" />
				<Wheel value="wheel coming soon" />
			</div>
    )
	}
}