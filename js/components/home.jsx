import React, { Component } from 'react'

import Btn from './button.jsx';
import Nav from './nav.jsx';

export default class Home extends Component{
	render () {
		return (
			<div>
				<h1>Home</h1>
				<Nav />
				<Btn value="play" />
				<Btn value="other"/>
			</div>
    )
	}
}