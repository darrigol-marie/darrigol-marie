import { Outlet, useLocation } from 'react-router-dom';

import { appRoutes, type AppRoute } from './App.routes';
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

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
			<header id="title">
				<Header title={currentRoute ? currentRoute.name : 'Title'} />
			</header>
			<div id="page" className="hidden-overflow">
				<div id="content" className="hidden-overflow">
					<Navigation links={appRoutes} />
					<main>
						<Outlet />
					</main>
				</div>
			</div>
			<Footer />
		</>
	);
}

export default App;
