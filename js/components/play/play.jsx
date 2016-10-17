import React, { Component } from 'react'

import Btn from '../general/button.jsx';
import Nav from '../general/nav.jsx';

import Wheel from './wheel.jsx';
import RussianWheel from './russianWheel.jsx';
import Players from './players.jsx';

import settingStore from '../../stores/settingStore.js'

export default class Play extends Component{
	constructor (props)  {
		super(props)

		//get the game settings from the store
		this.state = settingStore.getSettings();
	}

	animationEnd () {
		console.log("animation ended");
	}

	render () {
		var wheel;
		if (!this.state.russianMode) {
		  wheel = <Wheel action={this.animationEnd} />;
		} else {
		  wheel = <RussianWheel action={this.animationEnd} />;
		}
		return (
			<div>
				<h1>Play</h1>
				<Nav />
				<Players players={this.state.players}/>
				<p>winning score: {this.state.winScore}</p>
				{wheel}
			</div>
    )
	}
}