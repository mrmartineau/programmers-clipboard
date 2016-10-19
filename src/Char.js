import React, { Component } from 'react';
import './Char.css';
import copy from 'copy-js/src/copy.js';

class Char extends Component {
	constructor(props) {
		super(props);
		// This line is important!
		this.handleClick = this.handleClick.bind(this);
		copy('foo')
	}

	handleClick() {
		const prefixes = {
			css: '\\u',
			javascript: '\\',
			'hexadecimal-ncr': '&#x',
		}

		let charType;
		let pre = ''
		if (this.props.choice === 'char') {
			charType = 'char';

		} else {
			charType = 'hexadecimal';
			pre = prefixes[this.props.choice];
		}

		const copy = '' + pre + this.props.data[charType];
		console.log(copy);
		copy(copy);
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
