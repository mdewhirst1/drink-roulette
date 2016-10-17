import React, { Component } from 'react'

import Btn from '../general/button.jsx';
import Nav from '../general/nav.jsx';

import settingStore from '../../stores/settingStore.js'

export default class Play extends Component{
	handleButton () {
		settingStore.setSettings('winScore', 15);
	}

	render () {
		return (
			<div>
				<h1>Game settings</h1>
				<Nav />
				<button onClick={this.handleButton}>set settings</button>
				<Btn value="Play" link="/play" />
			</div>
    )
	}
}