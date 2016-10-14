import React, { Component } from 'react'

export default class Wheel extends Component{
	constructor (props) {
		super(props)
	}

	render () {
		return (
			<div className="wheelsection">
				<h2>{this.props.value}</h2>
				<div className="wheel">
					<p>wheel soon</p>
				</div>
			</div>
    )
	}
}