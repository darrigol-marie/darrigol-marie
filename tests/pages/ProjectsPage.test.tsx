import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
	render,
	screen,
	waitForElementToBeRemoved,
} from '@testing-library/react';

import ProjectsPage from '../../src/pages/ProjectsPage';
import { expectPropToBeRenderedForEachComponent } from '../utils/expect.helper';
import { mockupProjects } from '../mocks/data';

describe('ProjectsPage', () => {
	function renderComponent() {
		render(<ProjectsPage />, {
			wrapper: ({ children }) => {
				return (
					<QueryClientProvider client={new QueryClient()}>
						{children}
					</QueryClientProvider>
				);
			},
		});
	}

	it('should render the name of each project as heading', async () => {
		renderComponent();

		await waitForElementToBeRemoved(screen.getByTitle(/animation/i));

		expectPropToBeRenderedForEachComponent('name', mockupProjects);
	});

	it('should render a description for each project', async () => {
		renderComponent();

		await waitForElementToBeRemoved(screen.getByTitle(/animation/i));

		expectPropToBeRenderedForEachComponent('description', mockupProjects);
	});

	// TODO: add test for projects date
});
