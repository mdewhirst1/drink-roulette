import React, { Component } from 'react'

export default class Wheel extends Component{
	constructor (props) {
		super(props)
	}

	render () {
		let wheel;
		if (!this.props.mode) {
			wheel = (
					<div className="wheel">
						<p>wheel soon</p>
					</div>
				);
		} else {
			wheel = (
					<div className="wheel">
						<p>wheel soon</p>
						<p>wheel soon</p>
						<p>wheel soon</p>
					</div>
				);
		}
		return (
			<div className="wheelsection">
				<h2>{this.props.value}</h2>
				{wheel}
			</div>
    )
	}
}