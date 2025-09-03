import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import {
	render,
	screen,
	waitFor,
	waitForElementToBeRemoved,
} from '@testing-library/react';

import { mockupExperiences } from '../mocks/data';
import { server } from '../mocks/server';
import { expectPropToBeRenderedForEachComponent } from '../utils/expect.helper';
import ExperiencePage from '../../src/pages/ExperiencePage';
import { http, HttpResponse } from 'msw';

describe('ExperiencePage', () => {
	function renderComponent() {
		render(<ExperiencePage />, {
			wrapper: ({ children }) => {
				return (
					<QueryClientProvider client={new QueryClient()}>
						{children}
					</QueryClientProvider>
				);
			},
		});
	}

	async function completeComponentRendering() {
		renderComponent();

		await waitForElementToBeRemoved(() => screen.getByText(/chargement/i));
	}

	it('should display a loading text while loading data', () => {
		renderComponent();

		expect(screen.getByText(/chargement/i)).toBeInTheDocument();
		expect(screen.queryByText(/aucun/i)).not.toBeInTheDocument();
	});

	it('should remove the loading text when data are loaded', async () => {
		await waitFor(completeComponentRendering);

		expect(screen.queryByText(/chargement/i)).not.toBeInTheDocument();
	});

	it('should display a message when no experience were found', async () => {
		server.use(
			http.get('src/data/experiences.json', () => {
				return HttpResponse.json([]);
			})
		);

		await waitFor(completeComponentRendering);

		expect(screen.getByText(/aucun/i)).toBeInTheDocument();
	});

	it('should display the date for each experience', async () => {
		await waitFor(completeComponentRendering);

		expectPropToBeRenderedForEachComponent('date', mockupExperiences);
	});

	it('should display the job position for each experience', async () => {
		await waitFor(completeComponentRendering);

		expectPropToBeRenderedForEachComponent('position', mockupExperiences);
	});

	it('should display the company name for each experience', async () => {
		await waitFor(completeComponentRendering);

		expectPropToBeRenderedForEachComponent('company', mockupExperiences);
	});

	it('should display the description of each experience', async () => {
		await waitFor(completeComponentRendering);

		expectPropToBeRenderedForEachComponent('description', mockupExperiences);
	});
});
