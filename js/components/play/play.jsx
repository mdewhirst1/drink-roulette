import React, { Component } from 'react'

import Btn from '../general/button.jsx';
import Nav from '../general/nav.jsx';

import Wheel from './wheel.jsx';
import RussianWheel from './russianWheel.jsx';
import Players from './players.jsx';

import settingStore from '../../stores/settingStore.js'

const initialState = settingStore.getSettings();

export default class Play extends Component{
	constructor (props)  {
		super(props)

		//get the game settings from the store
		this.state = initialState;
		this.state.turnCounter = 0;
	}

	resetGame () {
		//reset state to initial state;
		this.setState({initialState});
		this.state.turnCounter = 0;
	}

	animationEnd () {
		//select random drink from wheel
		let drinkIndex = this.selectDrink();

		//update player score
		this.updateScore(this.state.wheel.drinks[drinkIndex].score);

		//if endless mode is NOT on
		if (!this.state.endlessMode) {
			//reduce drink count
			this.reduceCount(drinkIndex);
		}
	}

	checkEnd () {
		let curPlayer = this.state.players[this.state.turnCounter];
		if (curPlayer.score >= this.state.winScore) {
			//check if player has reached winnig score
			alert("Winner: " + curPlayer.name);
			this.resetGame();
		} else if (this.state.wheel.drinks.length <= 0) {
			//check if out of drinks
			alert("no cards left Winner: " + curPlayer.name);
			this.resetGame();
		} else {
			//update turn counter
			this.updateTurn();
		}
	}

	reduceCount (index) {
		let count = this.state.wheel.drinks[index].count;

		//reduce drink count
		count = count - 1;

		//if count reaches 0 (or less somehow)
		if (count <= 0) {
			//remove it from the array
			this.state.wheel.drinks.splice(index, 1);
		} else {
			//update with new count
			this.state.wheel.drinks[index].count = count;
		}
	}

	selectDrink () {
		//calculate total drink count
		let total = 0;
		this.state.wheel.drinks.map((drink, i) => {
			total = total + drink.count
		});
		//generate a random number 1 to total drink count
		let rand = Math.floor(Math.random() * total) + 1;

		let countSum = 0;
    
    //loop through wheel drinks
    for (var i = 0; i < this.state.wheel.drinks.length; i++) {
  		//sum the drink count
    	countSum += this.state.wheel.drinks[i].count;
      //if rand is less than sum count found selected drink
      if (rand <= countSum) {
      	//break loop and return selected drink
        return i;
      }
    }
	}

	updateScore (points) {
		//reset turn counter if needed
		if (this.state.turnCounter >= this.state.players.length) {
			this.state.turnCounter = 0;
		}

		//increase player's score
		this.state.players[this.state.turnCounter].score = this.state.players[this.state.turnCounter].score + points;

		//set state to update display
		this.setState({
			players: this.state.players
		});

		//check endgame
		this.checkEnd();
	}

	updateTurn () {
		//update turn counter
		this.state.turnCounter = this.state.turnCounter + 1;
	}

	render () {
		var wheel;
		if (!this.state.russianMode) {
		  wheel = <Wheel action={this.animationEnd.bind(this)} />;
		} else {
		  wheel = <RussianWheel action={this.animationEnd.bind(this)} />;
		}
		return (
			<div>
				<h1>Play</h1>
				<Nav />
				<Players players={this.state.players}/>
				<p>winning score: {this.state.winScore}</p>
				{wheel}
			</div>
    )
	}
}