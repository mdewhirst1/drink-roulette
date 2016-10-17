import React, { Component } from 'react'

import Btn from '../general/button.jsx';
import Nav from '../general/nav.jsx';

import settingStore from '../../stores/settingStore.js'

export default class Play extends Component{
	constructor (props) {
		super(props);
		this.state = settingStore.getSettings();
	}

	handleButton () {
		settingStore.setSettings('winScore', 15);
	}

	handleSwitch (event) {
		let key = event.target.id;
		settingStore.setSettings(key, !this.state.key);
	}

	render () {

		return (
			<div>
				<h1>Game settings</h1>
				<Nav />
				<div className="endlessSwitch">
					<p>endless mode: </p>
					<input id="endlessMode" type="checkbox" onClick={this.handleSwitch.bind(this)} defaultChecked={this.state.endlessMode}/>
				</div>
				<div className="russianSwitch">
					<p>russian mode: </p>
					<input id="russianMode" type="checkbox" onClick={this.handleSwitch.bind(this)} defaultChecked={this.state.russianMode}/>
				</div>
				<br />
				<button onClick={this.handleButton}>set settings</button>
				<Btn value="Play" link="/play" />
			</div>
    )
	}
}