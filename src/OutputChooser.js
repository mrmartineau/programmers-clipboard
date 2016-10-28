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

		const inputs = [
			["Plain text", "char"],
			["Javascript", "javascript"],
			["CSS", "css"],
			["Hexadecimal", "hexadecimal-ncr"],
		];

		return (
			<div className="OutputChooser">
				<div className="OutputChooser-info">Choose output:</div>
				{
					inputs.map(([text, value], i) => (
						<label className={`OutputChooser-label ${this.props.choice === value ? "is-active" : ""}`} key={ i }>
							<input type="radio" name="output" value={value}
								onChange={this.handleChange}
								checked={this.props.choice === value}
							/> {text}
						</label>
					))
				}
			</div>
		);
	}
}

export default OutputChooser;
