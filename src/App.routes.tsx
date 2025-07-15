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
		// TODO: extract experiences in data folder
		element: <ExperiencePage experiences={[]} />,
		name: 'Expérience',
	},
	{
		path: '/projects',
		element: (
			<ProjectsPage
				// TODO: to extract in a data folder
				projects={[
					{
						name: 'Mon site personnel',
						description: 'Le site que vous visitez actuellement',
					},
				]}
			/>
		),
		name: 'Projets',
	},
	{
		path: '/contact',
		element: <ContactPage />,
		name: 'Contact',
	},
];
