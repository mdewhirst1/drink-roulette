import React, { Component } from 'react'

import Btn from './button.jsx';

export default class Home extends Component{
	render () {
		return (
			<div>
				<h1>Home</h1>
				<Btn value="play" />
				<Btn value="other"/>
			</div>
    )
	}
}