import React from 'react';
import classnames from 'classnames';
import styleVars from '../misc/style-vars';

const Notification = (props) => {
	const classes = classnames({
		'Notification': true,
		'is-active': props.active,
	});

	return (
		<div>
			<div className={classes}>Copied {props.text}</div>
			<style jsx>{`
				.Notification {
					visibility: hidden;
					opacity: 0;
					transition: all 200ms ease-in-out;
					background-color: ${styleVars.colors.accent};
					background-image: linear-gradient(-225deg, ${styleVars.colors.accent} 0%, #CC31DC 100%);
					border-radius: 0.5rem;
					padding: .5em 1.5em;
					display: inline-block;
					color: #fff;
					position: fixed;
					top: 50%;
					left: 50%;
					transform: translate(-50%, -45%);
				}

				.Notification.is-active {
					opacity: 1;
					visibility: visible;
					transform: translate(-50%, -50%);
				}
			`}</style>
		</div>
	)
};

export default Notification;
