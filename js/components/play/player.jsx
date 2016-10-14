import React, { Component } from 'react';

export default class Players extends Component{
	constructor (props) {
		super(props);
	}
	render () {
		return (
			<div className="player">
				<p className="playerName">{this.props.name}</p>
				<p className="playerScore">{this.props.score}</p>
			</div>
    )
	}
}