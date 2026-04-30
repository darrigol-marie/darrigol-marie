import type { RouteObject } from 'react-router-dom';

import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ExperiencePage from './pages/ExperiencePage';
import ProjectsPage from './pages/ProjectsPage';

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
	{
		path: '/experience',
		element: <ExperiencePage />,
		name: 'Expérience',
		loader: async () => {
			return fetch('src/data/experiences.json').then((response) =>
				response.json()
			);
		},
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
];
