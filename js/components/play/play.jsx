import React, { Component } from 'react'

import Btn from '../button.jsx';
import Wheel from './wheel.jsx';

export default class Home extends Component{
	render () {
		return (
			<div>
				<h1>Play</h1>
				<Wheel value="wheel coming soon" />
			</div>
    )
	}
}