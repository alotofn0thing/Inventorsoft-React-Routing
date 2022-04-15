import { Link, useMatch } from 'react-router-dom';

import React from 'react';

const CustomLink = ({ children, to, ...props }) => {
	const match = useMatch({
		path: to,
		end: to.length === 1,
	});

	return (
		<Link to={to} style={{ color: match ? '#0f7dc6' : 'white' }} {...props}>
			{children}
		</Link>
	);
};

export { CustomLink };
