import React, { Component } from 'react';
import styleVars from '../misc/style-vars';

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
				<style jsx>{`
					.Char {
						font-size: 40px;
						display: inline-block;
						padding: 0.5rem;
						vertical-align: middle;
						font-family: sans-serif;
						line-height: 44px;
						color: ${styleVars.colors.copy};
					}

					.Char:hover {
						color: ${styleVars.colors.accent};
						cursor: pointer;
					}
					.Char:active {
						background-color: #cdcdcd;
						cursor: pointer;
					}
				`}</style>
			</div>
		);
	}
}

export default Char;
