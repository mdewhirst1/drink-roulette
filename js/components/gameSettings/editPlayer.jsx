import React, { Component } from 'react';

export default class EditPlayers extends Component{
	constructor (props) {
		super(props);
		this.state = {};
		this.state.name = this.props.name;
	}

	handleChange (event) {
		this.props.action(this.props.id, event.target.value);
		this.setState({
			name: event.target.value
		});
	}

	render () {
		return (
			<div className="editPlayer">
				<input type="text" className="editPlayerName" value={this.state.name} onChange={this.handleChange.bind(this)}/>
			</div>
    )
	}
}