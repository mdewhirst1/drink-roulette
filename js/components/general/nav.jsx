import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Nav extends Component{
	render () {
		return (
			<div className="nav">
				<ul role="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/gameSettings">Settings</Link></li>
          <li><Link to="/play">Play</Link></li>
        </ul>
			</div>
    )
	}
}