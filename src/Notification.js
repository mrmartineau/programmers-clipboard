import React from 'react';
import './Notification.css';
import classnames from 'classnames';

const Notification = (props) => {
	const classes = classnames({
		'Notification': true,
		'is-active': props.active,
	});

	return (
		<div className={classes}>Copied {props.text}</div>
	)
};

export default Notification;
