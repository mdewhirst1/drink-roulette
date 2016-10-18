import React, { Component } from 'react'

import Btn from '../general/button.jsx';
import Nav from '../general/nav.jsx';

import Switch from './switch.jsx';
import Slider from './slider.jsx';
import EditPlayers from './editPlayers.jsx';

import settingStore from '../../stores/settingStore.js'

export default class Play extends Component{
	constructor (props) {
		super(props);
		//set state to the data in the store
		this.state = settingStore.getSettings();
	}

	handleNameChange (id, value) {
		this.state.players[id].name = value;
		settingStore.setSettings("players", this.state.players);
	}

	render () {

		return (
			<div>
				<h1>Game settings</h1>
				<Nav />
				<div className="settings">
					<Switch id="endlessMode" name="endless mode" initialValue={this.state.endlessMode} />
					<Switch id="russianMode" name="russian mode" initialValue={this.state.russianMode} />
					<Slider initialValue={this.state.winScore} />
					<EditPlayers players={this.state.players} action={this.handleNameChange.bind(this)}/>
				</div>
				<Btn value="Play" link="/play" />
			</div>
    )
	}
}