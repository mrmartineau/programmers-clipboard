import React from 'react';
import './Footer.css';

const Footer = (props) => {
	return (
		<div className="Footer">
			<p>
				If you would like to add more characters, please modify <a href="https://github.com/mrmartineau/copypastechar/blob/master/src/charsList.json">this file</a>
				<br/>
				Made by <a href="https://zander.wtf">Z&er ⚡</a>
			</p>
		</div>
	)
};

export default Footer;
