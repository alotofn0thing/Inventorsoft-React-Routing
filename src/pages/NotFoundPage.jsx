import { Link } from 'react-router-dom';

export const NotFoundPage = () => {
	return (
		<div>
			This page doesn't exist. Go to <Link to='/'>Homepage</Link>
		</div>
	);
};
