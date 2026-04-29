import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
	render,
	screen,
	waitForElementToBeRemoved,
} from '@testing-library/react';
import { http, HttpResponse } from 'msw';

import ProjectsPage from '../../src/pages/ProjectsPage';
import { expectPropToBeRenderedForEachComponent } from '../utils/expect.helper';
import { mockupProjects } from '../mocks/data';
import { server } from '../mocks/server';

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

	it('should display a message when no project were found', async () => {
		server.use(
			http.get('/projects.json', () => {
				return HttpResponse.json([]);
			}),
		);
		renderComponent();

		await waitForElementToBeRemoved(screen.getByTitle(/animation/i));

		expect(screen.getByText(/aucun projet/i)).toBeInTheDocument();
	});

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
