import React, { Component } from 'react'

export default class Wheel extends Component{
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
    this.setState({spin: false});
  }

	render () {
		let wheel;
		if (!this.props.mode) {
			wheel = (
					<div className="wheelContainer" ref='wheel' onClick={() => this.setState({spin: true})}>
						<div className="wheel1">
							<img src="./wheel.png" className={spin ? 'spin' : ''}/>
						</div>
					</div>
				);
		} else {
			wheel = (
					<div className="wheelContainer" ref='wheel' onClick={() => this.setState({spin: true})}>
						<div className="wheel1">
							<img src="./wheel.png" className={spin ? 'spin' : ''}/>
						</div>
						<div className="wheel2">
							<img src="./wheel.png" className={spin ? 'spin' : ''}/>
						</div>
						<div className="wheel3">
							<img src="./wheel.png" className={spin ? 'spin' : ''}/>
						</div>
					</div>
				);
		}

		const spin = this.state.spin;

		return (
			<div className="playArea">
				<button onClick={() => this.setState({spin: true})}>PLAY</button>
				<div className="wheelContainer" ref='wheel' onClick={() => this.setState({spin: true})}>
						<div className="wheel1">
							<img src="./wheel.png" className={spin ? 'spin' : ''}/>
						</div>
					</div>
			</div>
    )
	}
}