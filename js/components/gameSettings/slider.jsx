import React, { Component } from 'react'

import settingStore from '../../stores/settingStore.js'

export default class Slider extends Component{
	constructor (props) {
		super(props);
		
		this.state = {
			value: this.props.initialValue
		}
	}

	handleChange (event) {
		//set state to update display
		this.setState({
			value: event.target.value
		});

		//use event.target.value as this.state has not updated yet 
		settingStore.setSettings(event.target.id, event.target.value);
	}

	render () {
		return (
			<div id="slider">
				<input type="range" id="winScore" min="1" max="20" value={this.state.value} onChange={this.handleChange.bind(this)} />
				<p id="sliderOutput">{this.state.value}</p>
			</div>
    )
	}
}