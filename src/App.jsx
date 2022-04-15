import { Routes, Route, Navigate } from 'react-router-dom';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { BlogPage } from './pages/BlogPage';
import { SinglePage } from './pages/SinglePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { LoginPage } from './pages/LoginPage';

import { Layout } from './components/Layout';

import { RequireAuth } from './hoc/RequireAuth';
import { AuthProvider } from './hoc/AuthProvider';

const App = () => {
	return (
		<AuthProvider>
			<Routes>
				<Route path='/' element={<Layout />}>
					<Route index element={<HomePage />} />
					<Route path='about' element={<AboutPage />} />
					<Route path='about-us' element={<Navigate to='/about' replace />} />
					<Route
						path='posts'
						element={
							<RequireAuth>
								<BlogPage />
							</RequireAuth>
						}
					/>
					<Route path='posts/:id' element={<SinglePage />} />
					<Route path='login' element={<LoginPage />} />
					<Route path='*' element={<NotFoundPage />} />
				</Route>
			</Routes>
		</AuthProvider>
	);
};

export default App;
