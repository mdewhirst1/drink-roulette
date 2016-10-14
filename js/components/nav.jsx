import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Nav extends Component{
	render () {
		return (
			<div>
				<ul role="nav">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/play">play</Link></li>
        </ul>
			</div>
    )
	}
}