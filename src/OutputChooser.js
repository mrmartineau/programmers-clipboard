import React, { Component } from 'react';
import './OutputChooser.css';

class OutputChooser extends Component {
	constructor(props) {
		super(props);
		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(ev) {
		this.props.handleChoiceChange(ev.target.value);
	}

	render() {
		return (
			<div className="OutputChooser">
				<label className="OutputChooser-label">
					<input type="radio" name="output" value="char"
						onChange={this.handleChange}
						checked={this.props.choice === 'char'}
					/> Char
				</label>

				<label className="OutputChooser-label">
					<input type="radio" name="output" value="javascript"
						onChange={this.handleChange}
						checked={this.props.choice === 'javascript'}
					/> Javascript
				</label>

				<label className="OutputChooser-label">
					<input type="radio" name="output" value="css"
						onChange={this.handleChange}
						checked={this.props.choice === 'css'}
					/> CSS
				</label>

				<label className="OutputChooser-label">
					<input type="radio" name="output" value="hexadecimal-ncr"
						onChange={this.handleChange}
						checked={this.props.choice === 'hexadecimal-ncr'}
					/> Hexadecimal
				</label>

			</div>
		);
	}
}

export default OutputChooser;
