import React, { Component } from 'react'

export default class Wheel extends Component{
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<h2>{this.props.value}</h2>
    )
	}
}