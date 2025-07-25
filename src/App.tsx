import { Outlet } from 'react-router-dom';

import { appRoutes } from './App.routes';
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
	return (
		<>
			<header id="title">
				<Header />
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
