import { screen, waitFor } from '@testing-library/react';

import ProjectsPage, { type Project } from '../../src/pages/ProjectsPage';
import { renderWithRouter } from '../utils/router.helper';

interface Props {
	projectsList: HTMLElement[];
	noProjectMessage: HTMLElement | null;
}

describe('ProjectsPage', () => {
	const mockupProjects: Project[] = [
		{ name: 'Project Name', description: 'Project description' },
	];

	async function renderComponent(projects: Project[] = []): Promise<Props> {
		renderWithRouter(<ProjectsPage />, projects);

		await waitFor(() => screen.getByRole('paragraph'));

		return {
			projectsList: screen.queryAllByRole('article'),
			noProjectMessage: screen.queryByText(/aucun projet/i),
		};
	}

	it('should render a message when there is no project to display', async () => {
		const component = await renderComponent();

		expect(component.projectsList).toHaveLength(0);
		expect(component.noProjectMessage).toBeInTheDocument();
	});

	it('should render a list of the given projects', async () => {
		const component = await renderComponent(mockupProjects);

		expect(component.projectsList).toHaveLength(mockupProjects.length);
		expect(component.noProjectMessage).not.toBeInTheDocument();
	});

	it('should render the name of each project as heading', async () => {
		await renderComponent(mockupProjects);

		const projectHeadings = screen.getAllByRole('heading');

		expect(projectHeadings).toHaveLength(mockupProjects.length);
		for (let i = 0; i < projectHeadings.length; i++) {
			expect(projectHeadings[i]).toHaveTextContent(mockupProjects[0].name);
		}
	});

	it('should render a description for each project', async () => {
		await renderComponent(mockupProjects);

		const projectDescriptions = screen.getAllByRole('paragraph');

		expect(projectDescriptions).toHaveLength(mockupProjects.length);
		for (let i = 0; i < projectDescriptions.length; i++) {
			expect(projectDescriptions[i]).toHaveTextContent(
				mockupProjects[0].description
			);
		}
	});
});
