import React, { Component } from 'react';

import EditPlayer from './editPlayer.jsx';

export default class EditPlayers extends Component{
	constructor (props) {
		super(props);
	}
	render () {

		let players = this.props.players.map((player, i) => {
			return <EditPlayer key={i} id={i} name={player.name} action={this.props.action}/>
		});

		return (
			<div className="editPlayers">
				{players}
			</div>
    )
	}
}