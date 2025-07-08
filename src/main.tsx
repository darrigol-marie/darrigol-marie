import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';
import App from './App.tsx';

import AboutPage from './pages/AboutPage.tsx';

const router = createBrowserRouter([
	{
		element: <App />,
		children: [
			{
				path: '/',
				element: <AboutPage />,
			},
		],
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
