import type { RouteObject } from 'react-router-dom';

import AboutPage from './pages/AboutPage';

export type AppRoute = RouteObject & {
	path: string;
	name: string;
};

export const appRoutes: AppRoute[] = [
	{
		path: '/',
		element: <AboutPage />,
		name: 'À propos',
	},
];
