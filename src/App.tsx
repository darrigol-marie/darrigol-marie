import { Outlet, useLocation } from 'react-router-dom';

import { appRoutes, type AppRoute } from './App.routes';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';

function getCurrentRoute(): AppRoute | null {
	const currentLocation = useLocation();

	// TODO: throw an error instead of returning null (not finding the current route means we are on an invalid route)
	return (
		appRoutes.find((appRoute) => appRoute.path === currentLocation.pathname) ||
		null
	);
}

function App() {
	const currentRoute = getCurrentRoute();

	return (
		<>
			<div id="page">
				<main>
					<Header title={currentRoute ? currentRoute.name : 'Title'} />
					<nav>
						<ul>
							{appRoutes.map((page) => {
								return (
									<li>
										<a>{page.name}</a>
									</li>
								);
							})}
						</ul>
					</nav>
					<article>
						<Outlet />
					</article>
				</main>
			</div>
			<Footer />
		</>
	);
}

export default App;
