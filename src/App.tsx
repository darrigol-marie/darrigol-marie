import { Outlet } from 'react-router-dom';

import { rootRoute } from './App.routes';
import './App.scss';

import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const queryClient = new QueryClient();

function App() {
	return (
		<>
			<QueryClientProvider client={queryClient}>
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
			</QueryClientProvider>
			<div className="loader">
				<div className="loader-element">
					<div className="loader-element-symbol"></div>
				</div>
				<div className="loader-element">
					<div className="loader-element-symbol"></div>
				</div>
				<div className="loader-element">
					<div className="loader-element-symbol"></div>
				</div>
			</div>
		</>
	);
}

export default App;
