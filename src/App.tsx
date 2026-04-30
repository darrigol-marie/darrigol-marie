import { Outlet } from 'react-router-dom';
import { QueryClientProvider } from '@tanstack/react-query';

import { rootRoute } from './App.routes';
import './App.scss';

import { queryClient } from './config/query';
import Header from './components/Header';
import Footer from './components/Footer';
import Navigation from './components/Navigation';

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
		</>
	);
}

export default App;
