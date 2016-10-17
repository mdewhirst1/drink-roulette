import React, { Component } from 'react'

import settingStore from '../../stores/settingStore.js'

export default class Switch extends Component{
	constructor (props) {
		super(props);
		
		this.state = {
			value: this.props.initialValue
		}
	}

	handleSwitch () {
		this.state.value = !this.state.value;
		settingStore.setSettings(this.props.id, this.state.value);
	}

	render () {
		let switchId = `${this.props.id}Switch`;

		return (
			<div className="switch" id={switchId}>
				<p>{this.props.name}: </p>
				<input id={this.props.id} type="checkbox" defaultChecked={this.props.initialValue} onClick={this.handleSwitch.bind(this)} />
			</div>
    )
	}
}