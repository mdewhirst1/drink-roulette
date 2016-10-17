import React, { Component } from 'react'

export default class RussianWheel extends Component{
	constructor (props) {
		super(props)
		this.state = {};
		this.state.spin = false;
    this.spun = this.spun.bind(this);
	}
	componentDidMount () {
    const elm = this.refs.wheel;
    elm.addEventListener('animationend', this.spun);
  }
  componentWillUnmount () {
    const elm = this.refs.wheel;
    elm.removeEventListener('animationend', this.spun);
  }
  spun () {
  	this.props.action();
    this.setState({spin: false});
  }

	render () {
		const spin = this.state.spin;

		return (
			<div className="playArea">
				<button onClick={() => this.setState({spin: true})}>PLAY</button>
				<div className="wheelContainer" ref='wheel' onClick={() => this.setState({spin: true})}>
					<div className="wheel1">
						<img src="./wheel.png" className={spin ? 'spin' : ''}/>
					</div>
				</div>
				<div className="wheelContainer" ref='wheel' onClick={() => this.setState({spin: true})}>
					<div className="wheel2">
						<img src="./wheel.png" className={spin ? 'spin2' : ''}/>
					</div>
				</div>
				<div className="wheelContainer" ref='wheel' onClick={() => this.setState({spin: true})}>
					<div className="wheel2">
						<img src="./wheel.png" className={spin ? 'spin3' : ''}/>
					</div>
				</div>
			</div>
    )
	}
}