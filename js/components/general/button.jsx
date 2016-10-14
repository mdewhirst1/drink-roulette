import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Btn extends Component{
	constructor (props) {
		super(props)
	}

	render () {
		var link;
		if (this.props.link) {
			link = <Link to={this.props.link}>{this.props.value}</Link>
		}
		else {
			link = this.props.value
		}
		
		return (
			<button>{link}</button>
    )
	}
}