import React, { Component } from 'react';
import styleVars from '../misc/style-vars';

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
				<style jsx>{`
					.OutputChooser {
						margin-bottom: 20px;
						font-size: 15px;
						text-align: center;
					}

					.OutputChooser-info {
						display: block;
						margin-bottom: 0.5rem;
					}

					.OutputChooser-label {
						margin: 0 0.5rem;
						display: inline-block;
						padding: 0.4em 0.5em;
						line-height: 1;
						cursor: pointer;
						transition: all 200ms ease-in-out;
						border-radius: 0.2rem;
						border: 1px solid transparent;
					}

					.OutputChooser-label:hover,
					.OutputChooser-label.is-active {
						border: 1px solid ${styleVars.colors.accent};
						color: ${styleVars.colors.accent};
					}

					.OutputChooser-label input {
						display: none;
					}
				`}</style>
			</div>
		);
	}
}

export default OutputChooser;
