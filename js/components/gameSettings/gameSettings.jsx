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

	handleChange (event) {
		this.setState({
			winScore: event.target.value
		});
		settingStore.setSettings(event.target.id, event.target.value);
	}

	render () {

		return (
			<div>
				<h1>Game settings</h1>
				<Nav />
				<div className="settings">
					<div className="endlessSwitch">
						<p>endless mode: </p>
						<input id="endlessMode" type="checkbox" onClick={this.handleSwitch.bind(this)} defaultChecked={this.state.endlessMode}/>
					</div>
					<div className="russianSwitch">
						<p>russian mode: </p>
						<input id="russianMode" type="checkbox" onClick={this.handleSwitch.bind(this)} defaultChecked={this.state.russianMode}/>
					</div>
					<br />
					<div id="slider">
						<input type="range" id="winScore" min="0" max="50" value={this.state.winScore} onChange={this.handleChange.bind(this)} />
						<p id="sliderOutput">{this.state.winScore}</p>
					</div>
					<button onClick={this.handleButton}>set settings</button>
				</div>
				<Btn value="Play" link="/play" />
			</div>
    )
	}
}