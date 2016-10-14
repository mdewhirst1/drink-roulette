import React, { Component } from 'react';

import Btn from '../general/button.jsx';
import Nav from '../general/nav.jsx';

export default class Home extends Component{
	render () {
		return (
			<div>
				<h1>Home</h1>
				<Nav />
				<Btn value="play" link="/play" />
				<Btn value="Add Drink" link="/play" />
				<Btn value="Create Wheel" link="/play" />
			</div>
    )
	}
}