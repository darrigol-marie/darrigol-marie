import { screen, waitFor } from '@testing-library/react';

import ProjectsPage, { type Project } from '../../src/pages/ProjectsPage';
import { renderWithRouter } from '../utils/router.helper';
import { expectPropToBeRenderedForEachComponent } from '../utils/expect.helper';

describe('ProjectsPage', () => {
	const mockupProjects: Project[] = [
		{
			id: 'project-test',
			name: 'Project Name',
			description: 'Project description',
		},
	];

	async function renderComponent(): Promise<void> {
		renderWithRouter(<ProjectsPage />, mockupProjects);

		await waitFor(() => screen.getByRole('article'));
	}

	it('should render the name of each project as heading', async () => {
		await renderComponent();

		expectPropToBeRenderedForEachComponent('name', mockupProjects);
	});

	it('should render a description for each project', async () => {
		await renderComponent();

		expectPropToBeRenderedForEachComponent('description', mockupProjects);
	});
});
