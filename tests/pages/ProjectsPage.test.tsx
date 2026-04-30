import { render, screen, waitFor } from '@testing-library/react';

import ProjectsPage, { type Project } from '../../src/pages/ProjectsPage';
import { createMemoryRouter, RouterProvider } from 'react-router-dom';

describe('ProjectsPage', () => {
	const projects: Project[] = [
		{ name: 'Project Name', description: 'Project description' },
	];

	async function renderComponent(projects: Project[]) {
		const router = createMemoryRouter(
			[
				{
					element: <ProjectsPage />,
					path: '/',
					loader: () => projects,
				},
			],
			{
				initialEntries: ['/'],
				initialIndex: 1,
			}
		);

		render(<RouterProvider router={router} />);
		await waitFor(() => screen.getByRole('paragraph'));
	}

	function searchForNoProjectMessage() {
		return screen.queryByText(/aucun projet/i);
	}

	it('should render a message when there is no project to display', async () => {
		await renderComponent([]);

		expect(searchForNoProjectMessage()).toBeInTheDocument();
	});

	it('should render a list of the given projects', async () => {
		await renderComponent(projects);

		expect(screen.getAllByRole('article')).toHaveLength(projects.length);
		expect(searchForNoProjectMessage()).not.toBeInTheDocument();
	});

	it('should render the name of each project as heading', async () => {
		await renderComponent(projects);

		const projectHeadings = screen.getAllByRole('heading');

		expect(projectHeadings).toHaveLength(projects.length);
		for (let i = 0; i < projectHeadings.length; i++) {
			expect(projectHeadings[i]).toHaveTextContent(projects[0].name);
		}
	});

	it('should render a description for each project', async () => {
		await renderComponent(projects);

		const projectDescriptions = screen.getAllByRole('paragraph');

		expect(projectDescriptions).toHaveLength(projects.length);
		for (let i = 0; i < projectDescriptions.length; i++) {
			expect(projectDescriptions[i]).toHaveTextContent(projects[0].description);
		}
	});
});
