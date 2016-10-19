import React, { Component } from 'react';
import './App.css';
import Char from './Char';
import charsList from './charsList';

class App extends Component {

	render() {
		const choice = 'css';

		return (
			<div className="App">
				<div className="App-header">
					<h2>Simple copy & paste characters</h2>
				</div>

				{charsList.map(item => <Char data={item} choice={choice} key={item.hexadecimal}/> )}
			</div>
		);
	}
}

export default App;
