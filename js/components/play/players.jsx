import React, { Component } from 'react';

import Player from './player.jsx';

var dummyPlayers = [
	{
		name: "player 1",
		score: 0
	},
	{
		name: "player 2",
		score: 0
	}
];

export default class Players extends Component{
	render () {

		let players = dummyPlayers.map((player, i) => {
			return <Player key={i} name={player.name} score={player.score} />
		});

		return (
			<div className="players">
				{players}
			</div>
    )
	}
}