import { Outlet, useNavigate } from 'react-router-dom';
import { CustomLink } from './CustomLink';
import { useAuth } from '../hook/useAuth';

export const Layout = () => {
	const { signOut } = useAuth();
	const { user } = useAuth();
	const navigate = useNavigate();

	const style = `button ${!user ? 'login' : ''}`;
	return (
		<>
			<header>
				<CustomLink to='/'>Home</CustomLink>
				<CustomLink to='/posts'>Blog</CustomLink>
				<CustomLink to='/about'>About</CustomLink>
			</header>

			<main className='container'>
				<div className='btn-container'>
					<button
						className={style}
						onClick={() => signOut(() => navigate('/', { replace: true }))}
					>
						Log out
					</button>
				</div>
				<Outlet />
			</main>

			<footer className='container'>2022</footer>
		</>
	);
};
