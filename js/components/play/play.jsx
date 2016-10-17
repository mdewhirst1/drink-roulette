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
		this.state.turnCounter = 0;
	}

	animationEnd () {
		//reset turn counter if needed
		if (this.state.turnCounter >= this.state.players.length) {
			this.state.turnCounter = 0;
		}

		//increase player's score
		this.state.players[this.state.turnCounter].score = this.state.players[this.state.turnCounter].score + 5;
		this.setState({
			players: this.state.players
		});

		//increase turn counter
		this.state.turnCounter = this.state.turnCounter + 1;
	}

	render () {
		var wheel;
		if (!this.state.russianMode) {
		  wheel = <Wheel action={this.animationEnd.bind(this)} />;
		} else {
		  wheel = <RussianWheel action={this.animationEnd.bind(this)} />;
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