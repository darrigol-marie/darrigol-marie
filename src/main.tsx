import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.scss';

import { appRoutes } from './App.routes.tsx';
import App from './App.tsx';

const router = createBrowserRouter([
	{
		element: <App />,
		children: appRoutes,
	},
]);

createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>
);
