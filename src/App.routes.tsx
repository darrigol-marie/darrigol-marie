import type { RouteObject } from 'react-router-dom';

import App from './App';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';
import NotFoundPage from './pages/NotFoundPage';

export type AppRoute = RouteObject & {
	path: string;
	name: string;
};

export const rootRoute: RouteObject & {
	children: AppRoute[];
} = {
	element: <App />,
	errorElement: <NotFoundPage />,
	children: [
		{
			path: '/',
			element: <AboutPage />,
			name: 'À propos',
		},
		{
			path: '/experience',
			element: <ExperiencePage />,
			name: 'Expérience',
		},
		{
			path: '/projects',
			element: <ProjectsPage />,
			name: 'Projets',
			loader: async () =>
				fetch('src/data/projects.json').then((response) => response.json()),
		},
		{
			path: '/contact',
			element: <ContactPage />,
			name: 'Contact',
		},
	],
};
