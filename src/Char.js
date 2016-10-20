import React, { Component } from 'react';
import './Char.css';
// import copy from 'copy-js/src/copy.js';

class Char extends Component {
	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick(ev) {
		this.props.handleCopy(this.props.data);
	}

	render() {
		return (
			<div className="Char"
				title={this.props.data.name}
				onClick={this.handleClick}
			>
				{this.props.data.char}
			</div>
		);
	}
}

export default Char;
