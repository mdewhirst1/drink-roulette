import React, { Component } from 'react'

export default class Btn extends Component{
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<button>{this.props.value}</button>
    )
	}
}