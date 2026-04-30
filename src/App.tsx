import { Outlet } from 'react-router-dom';

import { rootRoute } from './App.routes';
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

function App() {
	return (
		<>
			<Header title="Marie Darrigol" subtitle="Développeuse web" />
			<div id="page" className="hidden-overflow">
				<div id="content" className="hidden-overflow">
					<Navigation links={rootRoute.children} />
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
