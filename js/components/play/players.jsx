import React, { Component } from 'react';

import Player from './player.jsx';

export default class Players extends Component{
	constructor (props) {
		super(props);
		this.state = this.props;
	}
	render () {

		let players = this.state.players.map((player, i) => {
			return <Player key={i} name={player.name} score={player.score} />
		});

		return (
			<div className="players">
				{players}
			</div>
    )
	}
}