import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Char from './Char';
import charsList from './charsList';

class App extends Component {

	render() {

		return (
			<div className="App">
				<div className="App-header">
					<h2>Simple copy & paste characters</h2>
				</div>

				{charsList.map(item => <Char data={item} key={item.name}/> )}
			</div>
		);
	}

	handleCopy() {
		const prefixes = {
			css: '\\u',
			javascript: '\\',
			'hexadecimal-ncr': '&#x',
		}
	}
}

export default App;
