import React, { Component } from 'react'

import Btn from '../button.jsx';
import Nav from '../nav.jsx';

import Wheel from './wheel.jsx';

export default class Home extends Component{
	render () {
		return (
			<div>
				<h1>Play</h1>
				<Nav />
				<Wheel value="wheel coming soon" />
			</div>
    )
	}
}