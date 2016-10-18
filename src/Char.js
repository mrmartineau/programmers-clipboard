import React, { Component } from 'react';
import './Char.css';

const Char = (props) => (
	<div className="Char"
		data-char={props.data.char}
		data-html={props.data.html}
		data-hexadecimal={props.data.hexadecimal}
		title={props.data.name}
	>
		{props.data.char}
	</div>
);

export default Char;
